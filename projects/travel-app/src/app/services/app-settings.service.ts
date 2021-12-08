import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AppSettings } from '../models/AppSettings';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  static settings: AppSettings;

  // This is redundant; but i want to learn the observable pattern
  static _todos: BehaviorSubject<AppSettings> = new BehaviorSubject(AppSettingsService.settings);
  static readonly todos$: Observable<AppSettings> = AppSettingsService._todos.asObservable();

  constructor(private http: HttpClient) { 
    console.debug("Create AppSettingsService");
  }

  load() {
    console.debug("AppSettingsService.load()");

    const jsonFile = `assets/settings/${environment.deploymentType}-settings.json`;

    return new Promise<void>((resolve, reject) => {
      this.http.get(jsonFile).toPromise().then((response: any) => {
        console.debug("AppSettingsService.load() - response: ", response);

        AppSettingsService.settings = <AppSettings>response;
        
        // This is redundant; but i want to learn the observable pattern
        AppSettingsService._todos.next(AppSettingsService.settings);

        resolve();
      }).catch((response: any) => {
        reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
      });
    }); 
  }
}
