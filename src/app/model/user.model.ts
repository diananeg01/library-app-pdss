import {UserRole} from "./user-role";

export class UserModel {
  user_uuid?: number;
  username?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  userRole?: UserRole;
}
