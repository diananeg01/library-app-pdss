import {UserRole} from "./user-role";

export class UserModel {
  id?: string;
  username?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  userRole?: UserRole;
}
