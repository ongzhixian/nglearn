# Config files

We usually want to use a configuration file that we can customized at some post-build deployment time.

To do so we need to:

1.  Define a model of the configuration file.
    Example: `AppSettings.ts`
2.  Define JSON files for various environments based on the model defined in step 1.
    Example: `prd-settings.json`, `dev-settings.json`
    Presumably placed in some place in assets, example `assets/settings/dev-settings.json` 
3.  Enhance `environment.ts` and `environment.prod.ts`.
    This is to provide a point of reference which JSON we would be using from step 2 during the build process.
    Example, from:
    ```ts
    export const environment = {
        production: false
    };
    ```
    to:
    ```ts
    export const environment = {
        name: "production-settings",
        deploymentType: "prd",
        production: true
    };

    ```
4.  Ensure that configuration for the project in `angular.json` file for the section is as follows:
    Section: architect > build > configurations > production > fileReplacements
    ```json
    "fileReplacements": [
        {
            "replace": "src/environments/environment.ts",
            "with": "src/environments/environment.prod.ts"
        }
    ]
    ```
    This tells the build process which file when building the application.
    This should be the default if you have not made any changes.
    I'm just stating the obvious here in case this has been changed in your project.

5.  Create a service to load the configuration file.
    Example: `AppSettingsService.ts`

6.  Update `app.module.ts` file to do load the config file prior to app creation.

    ```ts
    // Use Angular APP_INITIALIZER token to execute code when the application is initialized. 
    import { APP_INITIALIZER } from '@angular/core';
    import { AppSettingsService } from './app.config';

    export function initializeApp(appSettingsService: AppSettingsService) {
        return () => appSettingsService.load();
    }

    @NgModule({
        imports: [ , , , ],
        declarations: [ . . . ],
        providers: [
            AppSettingsService,
            { 
                provide: APP_INITIALIZER,
                useFactory: initializeApp,
                deps: [AppSettingsService], 
                multi: true 
            }
        ],
        bootstrap: [
        AppComponent
        ]
    })
    export class AppModule { }
    ```

    If the `initializeApp` function looks distracting, you can inline it in the `useFactory` like so:
    
    `useFactory: (appSettingsService: AppSettingsService) => () => appSettingsService.load(),` 
    

## Usage

```ts
export class DummyPage1Component implements OnInit {

  countryInputBox = new FormControl();
  filteredOptions: Observable<TravelLane[]> = of([]);
  travelLanes: TravelLane[] = TravelLaneJson;
  selectedTravelLane: TravelLane | null;

  // Example of exposing appSettings (for display) to the UI
  appSettings: AppSettings = AppSettingsService.settings;

  // Example of using setting value directly
  settingName: string = AppSettingsService.settings.Name;
  ...
```

Usage in component.
This is assuming `appSettings` was exposed in the originating `ts` file.

```html
    <p fxLayoutAlign="center">
        Find the travel restrictions in country
        {{appSettings.Name}}
    </p>
```


## Notes

In Angular, all services appears to create first! 
From logs, we see:

```logs
Create AppSettingsService 
Create CountryService 
AppSettingsService.load() 
AppSettingsService.load() - response:  Object { Name: "development-settings", DeploymentType: "dev", Api: {…} }
Create AppComponent 
Create CountrySearchComponent
Init CountrySearchComponent
```

In this example, it means that if I need some value from AppSettingsService during the creation of the CountryService, 
it will not be able to retrieve the value (the load() event came later).
Not sure if there is a way to defer loading of CountryService until after AppSettingsService is created.

Another way to bring up the infomation as soon as possible is to use an BehaviourSubject / observable.
CountryService subscribe to AppSettingsService.

# Reference

See: https://devblogs.microsoft.com/premier-developer/angular-how-to-editable-config-files/
