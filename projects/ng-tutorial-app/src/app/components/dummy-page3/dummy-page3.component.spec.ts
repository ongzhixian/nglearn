import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyPage3Component } from './dummy-page3.component';

describe('DummyPage3Component', () => {
  let component: DummyPage3Component;
  let fixture: ComponentFixture<DummyPage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyPage3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
