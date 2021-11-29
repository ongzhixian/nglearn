import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Country } from '../models/Country';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CountryService {

    constructor(private http: HttpClient) { }

    getCountries(startsWith: string): Observable<Array<Country>> {
        return this.http
            .get<Country[]>(`http://localhost:8081/country?startswith=${encodeURIComponent(startsWith)}`)
            .pipe(
                tap(countries => console.log(`[CountryService] ${countries.length} items retrieved.`)),
                map((countries) => countries || []),
                catchError(this.handleError<Country[]>('Get countries', []))
            );

    }


    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // this.log.add(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
