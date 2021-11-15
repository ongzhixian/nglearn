import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyPage5Component } from './dummy-page5.component';

describe('DummyPage5Component', () => {
  let component: DummyPage5Component;
  let fixture: ComponentFixture<DummyPage5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyPage5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyPage5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
