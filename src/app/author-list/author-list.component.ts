import { Component, OnInit } from '@angular/core';
import { Author } from '../models/author';

import { AuthorService } from '../author.service';
import { MessageService } from '../message.service';

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

  authors : Author[] = [];

  selectedAuthor? : Author;

  constructor(private authorService : AuthorService, private messageService : MessageService) { }

  ngOnInit(): void {
    this.getAuthors();
  }

  getAuthors() : void {
    // this.authors = this.authorService.getAuthors();
    this.authorService.getAuthors().subscribe(
      authors => this.authors = authors
    )
  }

  onSelect(author : Author) : void {
    this.selectedAuthor = author;
    this.messageService.add(`Author list component: Selected author id=${author.id}`);
  }

}
