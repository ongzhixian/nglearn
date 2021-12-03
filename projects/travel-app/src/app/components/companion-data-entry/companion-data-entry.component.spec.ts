import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanionDataEntryComponent } from './companion-data-entry.component';

describe('CompanionDataEntryComponent', () => {
  let component: CompanionDataEntryComponent;
  let fixture: ComponentFixture<CompanionDataEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanionDataEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanionDataEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
