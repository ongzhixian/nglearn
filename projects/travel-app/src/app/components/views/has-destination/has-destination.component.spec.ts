import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HasDestinationComponent } from './has-destination.component';

describe('HasDestinationComponent', () => {
  let component: HasDestinationComponent;
  let fixture: ComponentFixture<HasDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HasDestinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HasDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
