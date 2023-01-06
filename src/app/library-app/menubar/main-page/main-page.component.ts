import { Component } from '@angular/core';
import {BookModel} from "../../../model/book.model";
import {SelectItem} from "primeng/api";
import {UserEndpointService} from "../../../endpoints/user-endpoint.service";
import {BookEndpointService} from "../../../endpoints/book-endpoint.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  providers: [UserEndpointService, BookEndpointService]
})
export class MainPageComponent {
  books: BookModel[] = [];
  username: string;

  sortOptions: SelectItem[] = [];
  sortOrder: number;
  sortField: string;
  sortKey: any;

  constructor(private userEndpointService: UserEndpointService,
              private bookEndpointService: BookEndpointService) {
    this.sortOrder = 0;
    this.sortField = '';
    this.username = '';
  }

  ngOnInit(): void {
    console.log("main-page");
    this.username = JSON.parse(localStorage.getItem('username')!);
    console.log(this.username)
    this.bookEndpointService.getBooks().subscribe({
      next: books => this.books = books
    });
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  addToFavourite(book: BookModel) {
    this.userEndpointService.addBookToFavourites(this.username, book).subscribe();
  }
}
