import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../model/user.model";
import {BookModel} from "../model/book.model";
import {Observable} from "rxjs";

const BKE_API = 'https://library-app-pdss-default-rtdb.firebaseio.com/users';

@Injectable({
  providedIn: 'root'
})
export class UserEndpointService {

  constructor(private http: HttpClient) {}

  signUp(username: string, email: string, password: string) {
    return this.http.post(BKE_API + `/register?username=${username}&email=${email}&password=${password}`, {});
  }

  signIn(username: string, password: string) {
    return this.http.post(BKE_API + `/log-in?username=${username}&password=${password}`, {});
  }

  getUsers(): Observable<any> {
    return this.http.get(BKE_API);
  }

  getUserWithUsername(username: string) {
    return this.http.get(BKE_API + `/username/${username}`);
  }

  getUserWithEmail(email: string) {
    return this.http.get(BKE_API + `/email/${email}`);
  }

  editUser(newUser: UserModel, email: string) {
    return this.http.put(BKE_API + `/edit?oldEmail=${email}`, {...newUser});
  }

  deleteUser(id: number) {
    return this.http.delete(BKE_API + `/delete?id=${id}`);
  }

  addBookToFavourites(username: string, book: BookModel) {
    return this.http.post(BKE_API + `/user/${username}/add-favourites`, {...book});
  }

  getFavouritesList(username: string) : Observable<any> {
    return this.http.get(BKE_API + `/user/${username}/favourites`);
  }
}
