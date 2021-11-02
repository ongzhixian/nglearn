import { Component, OnInit } from '@angular/core';
import { Author } from '../models/author';

import { AUTHORS } from '../data/mock-authors';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  // author: Author = {
  //   id: "409-56-7008",
  //   lastName: "Bennet",
  //   firstName: "Abraham"
  // };

  authors = AUTHORS;

  selectedAuthor? : Author;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(author : Author) : void {
    this.selectedAuthor = author;
  }

}
