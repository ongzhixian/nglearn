import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../../state/clicky.actions';

@Component({
  selector: 'app-clicky',
  templateUrl: './clicky.component.html',
  styleUrls: ['./clicky.component.css']
})
export class ClickyComponent implements OnInit {

  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }
 
  ngOnInit(): void {
  }

  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }
}
