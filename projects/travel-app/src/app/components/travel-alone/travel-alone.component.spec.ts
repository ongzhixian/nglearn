import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelAloneComponent } from './travel-alone.component';

describe('TravelAloneComponent', () => {
  let component: TravelAloneComponent;
  let fixture: ComponentFixture<TravelAloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelAloneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelAloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
