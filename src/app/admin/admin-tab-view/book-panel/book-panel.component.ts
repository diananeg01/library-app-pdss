

import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {BookModel} from "../../../model/book.model";
import {BookEndpointService} from "../../../endpoints/book-endpoint.service";

@Component({
  selector: 'app-book-panel',
  templateUrl: './book-panel.component.html',
  styleUrls: ['./book-panel.component.scss'],
  providers: [MessageService, ConfirmationService, BookEndpointService]
})
export class BookPanelComponent implements OnInit {

  books: BookModel[] = [];
  selectedBooks: BookModel[] = [];
  book: BookModel = {};
  oldTitle: string = '';
  oldPublishingHouse: string = '';
  bookDialog: boolean = false;
  submitted: boolean = false;
  edit: boolean = false;

  constructor(private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private bookEndpointService: BookEndpointService) { }

  ngOnInit(): void {
    this.bookEndpointService.getBooks().subscribe({
      next: books => this.books = books
    })
    console.log("book-panel");
  }

  openNew() {
    this.book = {};
    this.submitted = false;
    this.bookDialog = true;
  }

  editBook(book: BookModel) {
    this.book = {...book};
    this.oldTitle = book.title!;
    this.oldPublishingHouse = book.publishingHouse!;
    this.bookDialog = true;
    this.edit = true;
  }

  deleteBook(book: BookModel) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + book.title + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.bookEndpointService.deleteBook(book.book_uuid!).subscribe();
        this.books = this.books.filter(val => val.book_uuid !== book.book_uuid);
        this.book = {};
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Book Deleted!', life: 3000});
        window.location.reload()
      }
    });
  }

  deleteSelectedBooks() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected books?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.selectedBooks.forEach(selectedBook => {
          this.bookEndpointService.deleteBook(selectedBook.book_uuid!).subscribe();
        })
        this.books = this.books.filter(val => !this.selectedBooks.includes(val));
        this.selectedBooks = [];
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Books Deleted!', life: 3000});
        window.location.reload()
      }
    });
  }

  saveBook() {
    this.submitted = true;

    if (this.book.title?.trim()) {
      if (this.edit) {

        this.bookEndpointService.editBook(this.book, this.book.book_uuid!).subscribe();
        this.edit = false;
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Book Updated', life: 3000});
        window.location.reload();
      }
      else {
        this.books.push(this.book);
        this.bookEndpointService.addBook(this.book).subscribe();
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Book Added!', life: 3000});
      }

      this.books = [...this.books];
      this.bookDialog = false;
      this.book = {};
    }
  }

  hideDialog() {
    this.bookDialog = false;
    this.submitted = false;
  }
}


