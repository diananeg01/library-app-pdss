import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

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

  constructor() {
    this.activeItem = this.items[0];
  }

  ngOnInit(): void {
    console.log("admin");
  }

}
