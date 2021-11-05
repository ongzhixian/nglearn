import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from './modules/material/material.module';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DummyPage1Component } from './components/dummy-page1/dummy-page1.component';
import { DummyPage2Component } from './components/dummy-page2/dummy-page2.component';
import { DummyPage3Component } from './components/dummy-page3/dummy-page3.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DummyPage1Component,
    DummyPage2Component,
    DummyPage3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
