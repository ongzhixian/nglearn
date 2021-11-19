import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { DummyPage1Component } from './dummy-page1.component';

import { MaterialModule } from '../../modules/material/material.module';
import { AppComponent } from '../../app.component';
import { TravelLane } from '../../models/TravelLane';

describe('DummyPage1Component', () => {
  let component: DummyPage1Component;
  let fixture: ComponentFixture<DummyPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent, DummyPage1Component ],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MaterialModule
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

describe('When Singapore is selected', () => {
  let component: DummyPage1Component;
  let fixture: ComponentFixture<DummyPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent, DummyPage1Component ],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MaterialModule
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
    let userInput:TravelLane = {
      "id": 199,
      "country_iso": "SG",
      "country_name": "Singapore",
      "lane_name": "STL-Cat4",
      "filters": {
          "lane": "STL-Cat4",
          "fully_vaccinated": false,
          "age_above_12": false,
          "required_residential_status": "",
          "no_pcr": false,
          "no_art": false,
          "no_shn": false,
          "no_sdf": false,
          "link": "https://safetravel.ica.gov.sg/travel-checklist/category-4",
          "more_details": ""
      }
    };

    component.countryInputBox.setValue(userInput);

    expect(component.selectedTravelLane).toEqual(userInput);
  });

});
