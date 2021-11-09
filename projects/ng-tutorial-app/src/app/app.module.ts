import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from './modules/material/material.module';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DummyPage1Component } from './components/dummy-page1/dummy-page1.component';
import { DummyPage2Component } from './components/dummy-page2/dummy-page2.component';
import { DummyPage3Component } from './components/dummy-page3/dummy-page3.component';
import { LoginComponent } from './components/login/login.component';
import { DisplayLogComponent } from './components/display-log/display-log.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockHeroesApiService } from './services/mock-heroes-api.service';

import { HttpRequestInterceptor } from './interceptors/http-request.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DummyPage1Component,
    DummyPage2Component,
    DummyPage3Component,
    LoginComponent,
    DisplayLogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      MockHeroesApiService, { dataEncapsulation: false }
    )
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
    { provide: 'LOCALE', useFactory: () => window.navigator.language}
    // { provide: 'SOURCE_TYPE', useFactory: ()=> "AA"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
