import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ClickyComponent } from './clicky.component';
import { cold } from 'jasmine-marbles';

describe('ClickyComponent', () => {
  let store: MockStore;
  let component: ClickyComponent;
  let fixture: ComponentFixture<ClickyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        // any modules needed
      ],
      providers: [
       
        provideMockStore({ 
          initialState: { count: 0 } 
        })

        // other providers
      ]
    });

    store = TestBed.inject(MockStore);

    fixture = TestBed.createComponent(ClickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });

  // it('should increase store by one when increment()', () => {

  //   const expected = cold('(b|)', { b: 1 });

  //   expect(component.increment()).toBeObservable(expected);

  // });

  // it('should reduce store by one when decrement()', () => {

  //   const expected = cold('(b|)', { b: 2 });

  //   expect(component.decrement()).toBeObservable(expected);

  // });

});
