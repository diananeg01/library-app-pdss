import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BookModel} from "../model/book.model";
import {Observable} from "rxjs";

const BKE_API = 'https://library-app-pdss-default-rtdb.firebaseio.com/books.json';
@Injectable({
  providedIn: 'root'
})
export class BookEndpointService {

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get(BKE_API);
  }

  getBookById(id: number) {
    return this.http.get(BKE_API + `/id/${id}`);
  }

  getBooksByTitle(title: string) {
    return this.http.get(BKE_API + `/title/${title}`);
  }

  addBook(newBook: BookModel) {
    return this.http.post(BKE_API + `/add`, {...newBook});
  }

  editBook(newBook: BookModel, title: string, publishingHouse: string) {
    return this.http.put(BKE_API + `/edit?oldTitle=${title}&oldPublishingHouse=${publishingHouse}`, {...newBook});
  }

  deleteBook(id: number) {
    return this.http.delete(BKE_API + `/delete?id=${id}`);
  }
}
