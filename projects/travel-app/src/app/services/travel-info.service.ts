import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TravelInfo } from '../models/TravelInfo';
import { tap, map, switchMap, mergeMap, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';


@Injectable({
    providedIn: 'root'
})
export class TravelInfoService {

    constructor(private http: HttpClient) { }

    getTravelInfo(id: string): Observable<TravelInfo> {
        return this.http
            .get<TravelInfo>(`http://localhost:8081/travel-info/${encodeURIComponent(id)}`)
            .pipe(
                tap(travelInfo => console.log(`Retrieved ${travelInfo}`)),
                map((travelInfo) => travelInfo || {}),
                catchError(this.handleError<TravelInfo>('Get countries', {} as TravelInfo))
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
