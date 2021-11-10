import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { GoogleBook } from '../models/google-book';
import { LogService } from './log.service';
import { mockBookJson } from '../models/mockBooks';

@Injectable({ providedIn: 'root' })
export class GoogleBooksService {
  constructor(private http: HttpClient,
    private log : LogService) {}

  getBooks(author: string = 'frank herbert'): Observable<Array<GoogleBook>> {
    return this.http
      .get<{ items: GoogleBook[] }>(`https://books.googleapis.com/books/v1/volumes?q=${encodeURIComponent(author)}`)
      .pipe(
        tap(_ => this.log.add(`${_.items.length} items retrieved.`)),
        map((books) => books.items || []),
        catchError(this.handleError<GoogleBook[]>('Get books', []))
      );

    // return of(mockBookJson).pipe(map((books) => books.items || []));
  }

  // getBooks(): Observable<Array<GoogleBook>> {
  //   return of(mockBookJson).pipe(map((books) => books.items || []));
  // }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log.add(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
