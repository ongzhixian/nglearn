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

  add(name : string) : void {
    name = name.trim();
    if (!name) { return; }

    this.authorService.addAuthor({lastName: name} as Author)
    .subscribe(author => {
      this.authors.push(author)
    })
  }

  delete(author : Author) : void {
    this.authors = this.authors.filter(a => a !== author);
    this.authorService.deleteAuthor(author.id).subscribe();
  }

}
