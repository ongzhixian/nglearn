import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyPage4Component } from './dummy-page4.component';

describe('DummyPage4Component', () => {
  let component: DummyPage4Component;
  let fixture: ComponentFixture<DummyPage4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyPage4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyPage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
