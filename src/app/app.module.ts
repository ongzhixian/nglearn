import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { MatSliderModule } from '@angular/material/slider';
// import { MatListModule } from '@angular/material/list';
import {FlexLayoutModule} from '@angular/flex-layout';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { MaterialModule } from './modules/material.module';

import { AppComponent } from './app.component';

import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { AuthorSearchComponent } from './author-search/author-search.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpLogInterceptor } from './intercepters/http-log.interceptor';
import { StoreModule } from '@ngrx/store';

// import { counterReducer } from './counter.reducer';

import { counterReducer } from './state/counter.reducer';
import { CounterComponent } from './counter/counter.component';

import { booksReducer } from './state/book.reducer';
import { collectionReducer } from './state/collection.reducer';
import { GoogleBookListComponent } from './google-book-list/google-book-list.component';
import { GoogleBookCollectionComponent } from './google-book-collection/google-book-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorListComponent,
    AuthorDetailComponent,
    MessagesComponent,
    DashboardComponent,
    AuthorSearchComponent,
    CounterComponent,
    GoogleBookListComponent,
    GoogleBookCollectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }),
    StoreModule.forRoot({ 
      
      books: booksReducer, 
      collection: collectionReducer,
      count: counterReducer
    }, {})
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpLogInterceptor, multi: true },
    { provide: 'LOCALE', useFactory: () => window.navigator.language}
    // { provide: 'SOURCE_TYPE', useFactory: ()=> "AA"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
