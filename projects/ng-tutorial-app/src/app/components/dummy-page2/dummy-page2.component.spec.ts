import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { DummyPage2Component } from './dummy-page2.component';

describe('DummyPage2Component', () => {
  let component: DummyPage2Component;
  let fixture: ComponentFixture<DummyPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyPage2Component ],
      imports: [ HttpClientModule,
        StoreModule.forRoot({ 

        }) 
       ]
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
