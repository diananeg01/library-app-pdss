import { Component } from '@angular/core';
import {MenuItem, MessageService} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";
import {Auth, signOut} from "@angular/fire/auth";

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {
  items: MenuItem[] = [];
  username: any;

  constructor(private router: Router,
              private auth: Auth,
              private messageService: MessageService,
              private route: ActivatedRoute) {
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
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
      console.log(this.username)
    });
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
