import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {
  username: string = '';
  email: string = '';
  firstname: string = '';
  lastname: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log("confirm")
  }

  finish() {
    this.router.navigate([`/:${this.username}/main-page`]);
  }

  back() {
    this.router.navigate(['sign-up-details/personal-information']);
  }

  ngAfterContentInit(): void {
    this.username = JSON.parse(localStorage.getItem('username')!);
    this.email = JSON.parse(localStorage.getItem('email')!);
    this.firstname = JSON.parse(localStorage.getItem('firstname')!);
    this.lastname = JSON.parse(localStorage.getItem('lastname')!);
  }
}
