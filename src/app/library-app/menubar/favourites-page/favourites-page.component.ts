import { Component } from '@angular/core';
import { BookModel } from '../../../model/book.model';
import {SelectItem} from "primeng/api";
import {UserEndpointService} from "../../../endpoints/user-endpoint.service";

@Component({
  selector: 'app-favourites-page',
  templateUrl: './favourites-page.component.html',
  styleUrls: ['./favourites-page.component.scss']
})
export class FavouritesPageComponent {
  favouriteBooks: BookModel[] = [];
  username: string;

  sortOptions: SelectItem[] = [];
  sortOrder: number;
  sortField: string;
  sortKey: any;

  constructor(private userEndpointService: UserEndpointService) {
    this.sortOrder = 0;
    this.sortField = '';
    this.username = '';
  }

  ngOnInit(): void {
    console.log("favourites-page");
    this.username = JSON.parse(localStorage.getItem('username')!);
    this.userEndpointService.getFavouritesList(this.username).subscribe({
      next: books => this.favouriteBooks = books
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
}
