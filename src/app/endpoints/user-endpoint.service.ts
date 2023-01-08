import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../model/user.model";
import {BookModel} from "../model/book.model";
import {Observable} from "rxjs";

const BKE_API = 'https://library-app-pdss-default-rtdb.firebaseio.com/user';

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
    return this.http.get(BKE_API + `.json`);
  }

  getUserWithUsername(username: string) {
    return this.http.get(BKE_API + `/${username}.json`);
  }

  getUserWithEmail(email: string) {
    return this.http.get(BKE_API + `/${email}.json`);
  }

  editUser(newUser: UserModel, email: string) {
    return this.http.patch(BKE_API + `/${email}.json`, newUser);
  }

  deleteUser(id: string) {
    return this.http.delete(BKE_API + `/${id}.json`);
  }

  addBookToFavourites(username: string, book: BookModel) {
    return this.http.post(BKE_API + `/user/${username}/add-favourites`, {...book});
  }

  getFavouritesList(username: string) : Observable<any> {
    return this.http.get(BKE_API + `/user/${username}/favourites`);
  }
}
