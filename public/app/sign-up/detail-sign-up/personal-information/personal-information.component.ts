import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {UserEndpointService} from "../../../endpoints/user-endpoint.service";
import {UserModel} from "../../../model/user.model";

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
  providers: [MessageService]
})
export class PersonalInformationComponent {
  firstname: any;
  lastname: any;

  submitted: boolean;

  constructor(private router: Router,
              private messageService: MessageService,
              private userEndpointService: UserEndpointService) {
    this.submitted = false;
  }

  ngOnInit(): void {
    console.log("personal info")
  }

  nextPage() {
    if (this.firstname && this.lastname) {
      const newUser: UserModel = {
        firstname: this.firstname,
        lastname: this.lastname
      };
      const email = JSON.parse(localStorage.getItem('email')!);
      this.userEndpointService.editUser(newUser, email);
      localStorage.setItem('firstname', JSON.stringify(this.firstname));
      localStorage.setItem('lastname', JSON.stringify(this.lastname));
      this.router.navigate(['sign-up-details/confirm']);
    } else {
      this.messageService.add({severity:'error', summary:'Unfinished', detail:'You must complete all fields before confirming!'})
    }
    this.submitted = true;
  }

  backToSignUp() {
    this.router.navigate(['sign-up']);
  }
}
