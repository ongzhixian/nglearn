import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyPage6Component } from './dummy-page6.component';

describe('DummyPage6Component', () => {
  let component: DummyPage6Component;
  let fixture: ComponentFixture<DummyPage6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyPage6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyPage6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
