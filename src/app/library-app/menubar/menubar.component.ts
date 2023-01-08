import { Component } from '@angular/core';
import {MenuItem, MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {Auth, signOut} from "@angular/fire/auth";

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {
  items: MenuItem[] = [];

  constructor(private router: Router,
              private auth: Auth,
              private messageService: MessageService) {
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
    signOut(this.auth).then(() => {
      // Sign-out successful.
      this.router.navigate(['']);
    }).catch((error) => {
      // An error happened.
      this.messageService.add({severity:'error', summary: 'Error', detail: error.message, life: 3000});
    });
  }
}
