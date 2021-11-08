import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { LogService } from './log.service';

import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(
    private http: HttpClient,
    private logService: LogService) { }
    
    // getHeroes(): Observable<Hero[]> {
    //   const heroes = of([
    //     { id: 11, name: 'Dr Nice' },
    //     { id: 12, name: 'Narco' },
    //     { id: 13, name: 'Bombasto' },
    //     { id: 14, name: 'Celeritas' },
    //     { id: 15, name: 'Magneta' },
    //     { id: 16, name: 'RubberMan' },
    //     { id: 17, name: 'Dynama' },
    //     { id: 18, name: 'Dr IQ' },
    //     { id: 19, name: 'Magma' },
    //     { id: 20, name: 'Tornado' }
    //   ]);

    //   return heroes;
    // }


    getHeroes(): Observable<Hero[]> {
      return this.http.get<Hero[]>(this.heroesUrl)
        .pipe(
          tap(_ => this.log('fetched heroes')),
          catchError(this.handleError<Hero[]>('getHeroes', []))
        );
    }
    
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
  
    /** Log a HeroService message with the MessageService */
    private log(message: string) {
      this.logService.add(`HeroService: ${message}`);
    }
}
