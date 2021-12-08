import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Country } from '../models/Country';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { AppSettingsService } from './app-settings.service';

@Injectable({
    providedIn: 'root'
})
export class CountryService {

    constructor(private http: HttpClient) { 
        console.info("Create CountryService");
    }

    getCountries(startsWith: string): Observable<Array<Country>> {
        console.debug("[CountryService] - 2 - AppSettingsService: %s", AppSettingsService.settings.Api["CountryService"]); 

        return this.http
            .get<Country[]>(`${AppSettingsService.settings.Api["CountryService"]}?startswith=${encodeURIComponent(startsWith)}`)
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
