import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library-app-pdss';

  constructor(private router:Router) {

  }
  getText() {
    console.log("Text");
  }

  getText1() {
    this.router.navigate(['menu']);
  }
}
