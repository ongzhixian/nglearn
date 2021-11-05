import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyPage2Component } from './dummy-page2.component';

describe('DummyPage2Component', () => {
  let component: DummyPage2Component;
  let fixture: ComponentFixture<DummyPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyPage2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
