import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {
  items: MenuItem[] = [];

  constructor(private router: Router) {
    this.items = [
      {
        label: 'Main Page',
        icon: 'pi pi-home',
        routerLink: 'all-books'
      },
      {
        label: 'Favourites',
        icon: 'pi pi-star-fill',
        routerLink: 'favourite-books'
      },
      {
        label: 'Request a book',
        icon: 'pi pi-book',
        routerLink: 'request-book',
        disabled: true
      }
    ]
  }

  ngOnInit(): void {
  }

  signOut() {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
