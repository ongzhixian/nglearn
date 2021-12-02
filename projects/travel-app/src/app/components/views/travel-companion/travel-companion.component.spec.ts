import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelCompanionComponent } from './travel-companion.component';

describe('TravelCompanionComponent', () => {
  let component: TravelCompanionComponent;
  let fixture: ComponentFixture<TravelCompanionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelCompanionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelCompanionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
