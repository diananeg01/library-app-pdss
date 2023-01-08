import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UserEndpointService} from "../endpoints/user-endpoint.service";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {Auth} from "@angular/fire/auth";
import {MessageService} from "primeng/api";
import {Database, ref, set} from "@angular/fire/database";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [MessageService]
})
export class SignUpComponent {
  username: any;
  email: any;
  password: any;

  constructor(private router: Router,
              private auth: Auth,
              private database: Database,
              private userEndpointService: UserEndpointService,
              private messageService: MessageService) {
  }

  // loginWithGoogle(): void {
  //   this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
  //     .then(() => this.router.navigate(['sign-up/personal-information']));
  // }

  ngOnInit(): void {
    this.username = '';
    this.email = '';
    this.password = ''
  }

  signUp() {
    // localStorage.setItem('username', JSON.stringify(this.username));
    // localStorage.setItem('email', JSON.stringify(this.email));
    // this.userEndpointService.signUp(this.username, this.email, this.password)
    // this.router.navigate(["sign-up-details/personal-information"]);
    createUserWithEmailAndPassword(this.auth, this.email, this.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        set(ref(this.database, 'user/' + user.uid), {
          username: this.username,
          email: this.email
        });
        this.userEndpointService.signUp(this.username, this.email, this.password);
        this.router.navigate(["sign-up-details/personal-information"]);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.messageService.add({severity:'error', summary: 'Error', detail: errorMessage, life: 3000})
      });
  }


}
