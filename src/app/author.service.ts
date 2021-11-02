import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Author } from './models/author';
import { AUTHORS } from './data/mock-authors';

import { MessageService } from './message.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private authorApiUrl = 'api/authors';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private messageService : MessageService,
    private httpClient : HttpClient) { }

  // getAuthors() : Author[] {
  //   return AUTHORS;
  // };

  getAuthors() : Observable<Author[]> {
    // const heroes = of(AUTHORS);
    // this.messageService.add('AuthorService: fetched authors');
    // return heroes;
    return this.httpClient.get<Author[]>(this.authorApiUrl)
    .pipe(
      tap(_ => this.log('Fetch authors')),
      catchError(this.handleError<Author[]>('getAuthors', []))
    )

  }

  getAuthor(id : string) : Observable<Author> {
    // const author = AUTHORS.find(a => a.id === id)!;
    // this.messageService.add(`Author service : fetch id ${id}`);
    // return of(author);
    const url = `${this.authorApiUrl}/${id}`;
    return this.httpClient.get<Author>(url)
      .pipe(
        tap(_ => this.log(`fetch author ${id}`)),
        catchError(this.handleError<Author>(`getAuthor id ${id}`))
      )
  }

  updateAuthor(author : Author) : Observable<any> {
    return this.httpClient.put(this.authorApiUrl, author, this.httpOptions).pipe(
      tap(_ => this.log(`Update author ${author.id}`)),
      catchError(this.handleError<any>('Update author'))
    );
  }

  addAuthor(author : Author) : Observable<Author> {
    return this.httpClient.post<Author>(this.authorApiUrl, author, this.httpOptions).pipe(
      tap((newAuthor : Author) => this.log(`Add author ${newAuthor.id}`)),
      catchError(this.handleError<Author>("Add author"))
    );
  }

  deleteAuthor(id : string) : Observable<Author> {
    const url = `${this.authorApiUrl}/${id}`;

    return this.httpClient.delete<Author>(url, this.httpOptions).pipe(
      tap(_ => this.log(`delete author = ${id}`)),
      catchError(this.handleError<Author>("delete author"))
    );
  }

  searchAuthor(term : string): Observable<Author[]> {
    if (!term.trim()) {
      this.log('no terms!');
      return of([]);
    }

    return this.httpClient.get<Author[]>(`${this.authorApiUrl}/?firstName=${term}`).pipe(
      tap(x => x.length ? this.log(`Found authors matching ${term}`) : this.log(`No authors matchings ${term}`)),
      catchError(this.handleError<Author[]>('searchAuthors', []))
    )
  }

  private log(message: string) {
    this.messageService.add(`AuthorService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result? : T) {
    return (error : any) : Observable<T> => {

      // TODO: To send error to remote logging service
      console.error(error); 

      this.log(`${operation} failed: ${error.message}`);
      
      return of(result as T);
    }
  }
}
