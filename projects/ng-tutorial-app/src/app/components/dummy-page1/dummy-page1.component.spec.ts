import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyPage1Component } from './dummy-page1.component';

describe('DummyPage1Component', () => {
  let component: DummyPage1Component;
  let fixture: ComponentFixture<DummyPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyPage1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
