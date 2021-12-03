import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'projects/ng-tutorial-app/src/app/state/app.state';
// import { selectNavigationHistory, selectPreviousRoute } from '../../../state/travel-app.selectors';
// import { navigateToPage } from '../../../state/travel-app.actions';
import { ActivatedRoute } from '@angular/router';
import { navigateToPrevious } from '../../state/travel-app.actions';

@Component({
    selector: 'app-back-button',
    templateUrl: './back-button.component.html',
    styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent implements OnInit {

    // previousRoutePath$: Observable<string> = this.store.select(selectPreviousRoute);

    // navigationHistory$: Observable<string[]> = this.store.select(selectNavigationHistory);

    constructor(
        private store: Store<AppState>,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
    }

    goToPreviousView() {
        this.store.dispatch(navigateToPrevious());
    }

}
