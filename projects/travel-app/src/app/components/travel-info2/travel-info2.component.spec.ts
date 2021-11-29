import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelInfo2Component } from './travel-info2.component';

describe('TravelInfo2Component', () => {
  let component: TravelInfo2Component;
  let fixture: ComponentFixture<TravelInfo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelInfo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelInfo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
