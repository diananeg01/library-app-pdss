import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BookModel} from "../model/book.model";
import {Observable} from "rxjs";

const BKE_API = 'https://library-app-pdss-default-rtdb.firebaseio.com/book';
@Injectable({
  providedIn: 'root'
})
export class BookEndpointService {

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get(BKE_API+'.json');
  }

  getBookById(id: string) {
    return this.http.get(BKE_API + `/${id}.json`);
  }

  getBooksByTitle(title: string) {
    return this.http.get(BKE_API + `/${title}.json`);
  }

  addBook(newBook: BookModel) {
    return this.http.post(BKE_API + '.json', newBook);
  }

  editBook(newBook: BookModel, title: string) {
    return this.http.patch(BKE_API + `/${title}.json`, newBook);
  }

  deleteBook(id: string) {
    return this.http.delete(BKE_API + `/${id}.json`);
  }
}
