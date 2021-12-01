import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolarQuestionComponent } from './polar-question.component';

describe('PolarQuestionComponent', () => {
  let component: PolarQuestionComponent;
  let fixture: ComponentFixture<PolarQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolarQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolarQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
