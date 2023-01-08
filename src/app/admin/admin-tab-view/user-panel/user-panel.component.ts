import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {UserModel} from "../../../model/user.model";
import {UserRole} from "../../../model/user-role";
import {UserEndpointService} from "../../../endpoints/user-endpoint.service";

@Component({
  selector: 'app-users-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class UsersPanelComponent implements OnInit {

  users: UserModel[] = [];
  selectedUsers: UserModel[] = [];
  user: UserModel = {};
  userDialog: boolean = false;
  isAdmin: boolean = false;

  admin = UserRole.ADMIN;
  reader = UserRole.READER;

  constructor(private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private userEndpointService: UserEndpointService) { }

  ngOnInit(): void {
    let ids: string[] = [];
    this.userEndpointService.getUsers().subscribe({
      next: users => {
        console.log(users)
        ids = Object.keys(users);
        this.users = Object.values(users);

        let i;
        for(i = 0; i < this.users.length; i++) {
          this.users[i].id = ids[i];
        }
        console.log(this.users);
      }
    })
    console.log("users-panel");
  }

  makeAdmin() {
    if(this.isAdmin) {
      this.user.userRole = UserRole.ADMIN;
    } else {
      this.user.userRole = UserRole.READER;
    }
    this.userEndpointService.editUser(this.user, this.user.email!).subscribe();
    this.userDialog = false;
  }

  deleteUser(user: UserModel) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + user.username + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.userEndpointService.deleteUser(user.id!).subscribe();
        this.users = this.users.filter(val => val.id !== user.id);
        this.user = {};
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'User Deleted!', life: 3000});
      }
    });
  }

  deleteSelectedUsers() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected users?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.selectedUsers.forEach(selectedUser => {
          this.userEndpointService.deleteUser(selectedUser.id!).subscribe();
        });
        this.users = this.users.filter(val => !this.selectedUsers.includes(val));
        this.selectedUsers = [];
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Users Deleted!', life: 3000});
      }
    });
  }

  hideDialog() {
    this.userDialog = false;
  }

  openNew(user: UserModel) {
    this.userDialog = true;
    this.user = user;
    if(user.userRole === this.admin) {
      this.isAdmin = true;
    }
  }
}
