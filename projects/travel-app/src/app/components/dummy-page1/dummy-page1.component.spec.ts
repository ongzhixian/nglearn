import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DummyPage1Component } from './dummy-page1.component';

import { AppRoutingModule } from '../../modules/app-routing/app-routing.module';
import { MaterialModule } from '../../modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from '../../app.component';

describe('DummyPage1Component', () => {
  let component: DummyPage1Component;
  let fixture: ComponentFixture<DummyPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent, DummyPage1Component ],
      imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule, 
        ReactiveFormsModule,
        MaterialModule,
        FlexLayoutModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
