import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleBookCollectionComponent } from './google-book-collection.component';

describe('GoogleBookCollectionComponent', () => {
  let component: GoogleBookCollectionComponent;
  let fixture: ComponentFixture<GoogleBookCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleBookCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleBookCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
