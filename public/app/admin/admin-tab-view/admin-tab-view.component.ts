import { Component, OnInit } from '@angular/core';
import {MenuItem, MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {Auth, signOut} from "@angular/fire/auth";

@Component({
  selector: 'app-admin-tab-view',
  templateUrl: './admin-tab-view.component.html',
  styleUrls: ['./admin-tab-view.component.scss']
})
export class AdminTabViewComponent implements OnInit {
  items: MenuItem[] = [
    {
      label: "Books",
      icon: "pi pi-book",
      routerLink: ['books']
    },
    {
      label: "Users",
      icon: "pi pi-users",
      routerLink: ['users']
    }
  ];
  activeItem: MenuItem;

  constructor(private router: Router,
              private auth: Auth,
              private messageService: MessageService) {
    this.activeItem = this.items[0];
  }

  ngOnInit(): void {
    console.log("admin");
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
