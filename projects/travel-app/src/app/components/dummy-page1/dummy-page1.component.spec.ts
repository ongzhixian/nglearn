import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { DummyPage1Component } from './dummy-page1.component';

import { MaterialModule } from '../../modules/material/material.module';
import { AppComponent } from '../../app.component';

describe('DummyPage1Component', () => {
  let component: DummyPage1Component;
  let fixture: ComponentFixture<DummyPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent, DummyPage1Component ],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MaterialModule
      ]
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
