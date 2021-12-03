import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './modules/material/material.module';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';

import { AppSettingsService } from './services/app-settings.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DummyPage1Component } from './components/dummy-page1/dummy-page1.component';
import { ResourceNotFoundComponent } from './components/views/resource-not-found/resource-not-found.component';
import { FirstLibModule } from 'first-lib';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { countryListReducer } from './state/country-list.reducer';
import { CountryApiEffects } from './state/country-list.effects';
import { travelInfoReducer } from './state/travel-info.reducers';
import { TravelInfoApiEffects } from './state/travel-info.effects';
import { TravelAppEffects } from './state/travel-app.effects';

import { CountryListComponent } from './components/country-list/country-list.component';
import { TravelInfoComponent } from './components/travel-info/travel-info.component';
import { TravelInfo2Component } from './components/travel-info2/travel-info2.component';
import { IntroComponent } from './components/views/intro/intro.component';
import { PolarQuestionComponent } from './components/polar-question/polar-question.component';
import { polarQuestionReducer } from './state/travel-app.reducers';
import { OpenCloseComponent } from './components/open-close/open-close.component';
import { QuestionaireComponent } from './components/questionaire/questionaire.component';
import { CountrySearchComponent } from './components/country-search/country-search.component';
import { TravelAloneComponent } from './components/views/travel-alone/travel-alone.component';
import { StatusCheckComponent } from './components/views/status-check/status-check.component';
import { TravelCompanionComponent } from './components/views/travel-companion/travel-companion.component';
import { HasDestinationComponent } from './components/has-destination/has-destination.component';
import { RestrictionSearchComponent } from './components/restriction-search/restriction-search.component';

import { previousRoutePathReducer } from './state/travel-app.reducers';
import { CompanionDataEntryComponent } from './components/companion-data-entry/companion-data-entry.component';
import { CompanionDataEditComponent } from './components/companion-data-edit/companion-data-edit.component';

// 
export function initializeApp(appSettingsService: AppSettingsService) {
  return () => appSettingsService.load();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DummyPage1Component,
    ResourceNotFoundComponent,
    CountryListComponent,
    TravelInfoComponent,
    TravelInfo2Component,
    IntroComponent,
    PolarQuestionComponent,
    OpenCloseComponent,
    QuestionaireComponent,
    CountrySearchComponent,
    TravelAloneComponent,
    StatusCheckComponent,
    TravelCompanionComponent,
    HasDestinationComponent,
    RestrictionSearchComponent,
    CompanionDataEntryComponent,
    CompanionDataEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FirstLibModule,
    StoreModule.forRoot({ 
      countries: countryListReducer,
      selectedTravelInfo: travelInfoReducer,
      polarQuestion: polarQuestionReducer,
      previousRoute: previousRoutePathReducer
    }),
    EffectsModule.forRoot([
      CountryApiEffects,
      TravelInfoApiEffects,
      TravelAppEffects
    ])
  ],
  providers: [
    AppSettingsService,
    {
      provide: APP_INITIALIZER,
      useFactory: (appSettingsService: AppSettingsService) => () => appSettingsService.load(),
      deps: [AppSettingsService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
