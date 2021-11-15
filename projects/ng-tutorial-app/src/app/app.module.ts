import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DummyPage1Component } from './components/dummy-page1/dummy-page1.component';
import { DummyPage2Component } from './components/dummy-page2/dummy-page2.component';
import { DummyPage3Component } from './components/dummy-page3/dummy-page3.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { DisplayLogComponent } from './components/display-log/display-log.component';

// ZX:  The HttpClientInMemoryWebApiModule is a landmine.
//      When you are testing with a real API, you might get a HTTP 404 error with following error in the body:
//      {error: "Collection 'v1' not found"}
//      This is HttpClientInMemoryWebApiModule will re-route your actual requests and cause the 404 not found.
//      So always remove/comment HttpClientInMemoryWebApiModule after your mockup. 
//      See: https://stackoverflow.com/questions/55769409/angular-http-vs-httpclient
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockHeroesApiService } from './services/mock-heroes-api.service';

import { HttpRequestInterceptor } from './interceptors/http-request.interceptor';

import { StoreModule } from '@ngrx/store';
import { booksReducer } from './state/google-books.reducer';
import { collectionReducer } from './state/collection.reducer';
import { GoogleBookListComponent } from './components/google-book-list/google-book-list.component';
import { GoogleBookCollectionComponent } from './components/google-book-collection/google-book-collection.component';

import { counterReducer } from './state/clicky.reducer';
import { ClickyComponent } from './components/clicky/clicky.component';
import { EffectsModule } from '@ngrx/effects';

import { GoogleBookApiEffects } from './state/google-books.effects';
import { AuthenticationEffects } from './state/authentication.effects';

import { appUserReducer } from './state/authentication.reducer';
import { errorMessageReducer } from './state/errorMessage.reducer';
import { DummyPage4Component } from './components/dummy-page4/dummy-page4.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DummyPage1Component,
    DummyPage2Component,
    DummyPage3Component,
    LoginComponent,
    DisplayLogComponent,
    LogoutComponent,
    // BookListComponent,
    // BookCollectionComponent,
    GoogleBookListComponent,
    GoogleBookCollectionComponent,
    ClickyComponent,
    DummyPage4Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ 
      books: booksReducer, 
      collection: collectionReducer,
      count: counterReducer,
      loggedInUser: appUserReducer,
      errorMessage: errorMessageReducer
    }),
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    EffectsModule.forRoot([
      GoogleBookApiEffects, 
      AuthenticationEffects]),
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // See also landmine remarks above.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   MockHeroesApiService, { dataEncapsulation: false }
    // )
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
    { provide: 'LOCALE', useFactory: () => window.navigator.language}
    // { provide: 'SOURCE_TYPE', useFactory: ()=> "AA"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
