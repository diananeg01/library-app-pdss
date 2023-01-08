import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {UserEndpointService} from "../endpoints/user-endpoint.service";
import {UserRole} from "../model/user-role";
import {Auth, signInWithEmailAndPassword} from "@angular/fire/auth";
import {Database, get, ref, update} from "@angular/fire/database";
import {MessageService} from "primeng/api";

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
              private database: Database,
              private messageService: MessageService) {
  }


  loginWithGoogle(): void {

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
