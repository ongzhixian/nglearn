import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanionDataEditComponent } from './companion-data-edit.component';

describe('CompanionDataEditComponent', () => {
  let component: CompanionDataEditComponent;
  let fixture: ComponentFixture<CompanionDataEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanionDataEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanionDataEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
