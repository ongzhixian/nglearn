import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Author } from '../models/author';
import { AuthorService } from '../author.service';

import { LogService } from '../services/log.service';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {

  @Input() author? : Author;

  constructor(
    private route : ActivatedRoute,
    private authorService : AuthorService,
    private location : Location,
    private log : LogService
  ) { 
    // this.log.name = this.constructor.name;
  }

  ngOnInit(): void {
    this.getAuthor();
  }

  getAuthor() : void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.authorService.getAuthor(id).subscribe(
      author => this.author = author
    );
    this.log.info("subscrivbe one");

  }

  goBack(): void {
    this.location.back();
  }

  save() : void {
    if (this.author) {
      this.authorService.updateAuthor(this.author)
      .subscribe(() => this.goBack());
    }
  }
}
