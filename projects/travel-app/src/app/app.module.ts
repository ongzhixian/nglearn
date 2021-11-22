import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './modules/material/material.module';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DummyPage1Component } from './components/dummy-page1/dummy-page1.component';
import { ResourceNotFoundComponent } from './components/resource-not-found/resource-not-found.component';
import { FirstLibModule } from 'first-lib';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DummyPage1Component,
    ResourceNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FirstLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
