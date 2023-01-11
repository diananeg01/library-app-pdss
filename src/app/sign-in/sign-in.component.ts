import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {UserEndpointService} from "../endpoints/user-endpoint.service";
import {UserRole} from "../model/user-role";
import {Auth, signInWithEmailAndPassword, signInWithPopup} from "@angular/fire/auth";
import {Database, get, ref, update} from "@angular/fire/database";
import {MessageService} from "primeng/api";
import {GoogleAuthProvider} from "firebase/auth";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [MessageService]
})
export class SignInComponent {


  email: any;
  password: any;

  constructor(private router: Router,

              private userEndpointService: UserEndpointService,
              private auth: Auth,
              private provider: GoogleAuthProvider,
              private database: Database,
              private messageService: MessageService) {
  }


  loginWithGoogle(): void {
    signInWithPopup(this.auth, this.provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential!.accessToken;
        // The signed-in user info.
        const user = result.user;
        const username = user.email?.substring(0, user.email?.indexOf('@'));
        this.router.navigateByUrl(`/${username}/main-page`);
      }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: errorMessage,
        life: 3000,
        key: 'custom-error'
      });
      // The email of the user's account used.
      const email = error.customData.email;
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: "Email already in use!",
        life: 3000,
        key: 'used-email'
      });
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }

  ngOnInit(): void {
    this.email = '';
    this.password = '';
  }

  signIn() {
    // this.userEndpointService.signIn(this.email, this.password).subscribe({
    //   next: (user: UserModel) => {
    //     console.log(user);
    //     localStorage.setItem('username', JSON.stringify(user.username));
    //     if(user.userRole === UserRole.READER) {
    //       this.router.navigateByUrl(`/${user.username}/main-page`);
    //     } else if(user.userRole === UserRole.ADMIN) {
    //       this.router.navigateByUrl(`/${user.username}/admin`);
    //     }
    //   }
    // });

    signInWithEmailAndPassword(this.auth, this.email, this.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        let userRole: UserRole = UserRole.READER;
        let username: string;
        update(ref(this.database, 'user/' + user.uid), {});
        get(ref(this.database, 'user/' + user.uid))
          .then((user) => {
            console.log(user.exportVal())
            userRole = user.val().userRole;
            console.log(userRole)
            username = user.val().username;
            console.log(username)
            if(userRole === UserRole.READER) {
              this.router.navigateByUrl(`/${username}/main-page`);
            } else if(userRole === UserRole.ADMIN) {
              this.router.navigateByUrl(`/${username}/admin`);
            }
          }
        )
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.messageService.add({severity:'error', summary: 'Error', detail: errorMessage, life: 3000})
      });



  }


}
