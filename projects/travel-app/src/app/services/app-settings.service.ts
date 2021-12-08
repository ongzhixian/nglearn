import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AppSettings } from '../models/AppSettings';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  static settings: AppSettings;

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
        resolve();
      }).catch((response: any) => {
        reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
      });
    }); 
  }
}
