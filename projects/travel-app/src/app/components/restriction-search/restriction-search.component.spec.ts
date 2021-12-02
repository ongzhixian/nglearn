import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictionSearchComponent } from './restriction-search.component';

describe('RestrictionSearchComponent', () => {
  let component: RestrictionSearchComponent;
  let fixture: ComponentFixture<RestrictionSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestrictionSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrictionSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
