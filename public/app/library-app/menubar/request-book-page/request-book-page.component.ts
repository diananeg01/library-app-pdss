import { Component } from '@angular/core';
import { BookModel } from '../../../model/book.model';

@Component({
  selector: 'app-request-book-page',
  templateUrl: './request-book-page.component.html',
  styleUrls: ['./request-book-page.component.scss']
})
export class RequestBookPageComponent {
  newBook: BookModel = {};
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

  }
}
