import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickyComponent } from './clicky.component';

describe('ClickyComponent', () => {
  let component: ClickyComponent;
  let fixture: ComponentFixture<ClickyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
