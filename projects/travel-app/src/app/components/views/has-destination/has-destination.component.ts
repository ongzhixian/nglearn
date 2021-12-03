import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { AppState } from 'projects/ng-tutorial-app/src/app/state/app.state';
import { selectPreviousRoute } from '../../../state/travel-app.selectors';

@Component({
  selector: 'app-has-destination',
  templateUrl: './has-destination.component.html',
  styleUrls: ['./has-destination.component.css']
})
export class HasDestinationComponent implements OnInit {

  previousRoutePath$: Observable<string> = this.store.select(selectPreviousRoute);

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
