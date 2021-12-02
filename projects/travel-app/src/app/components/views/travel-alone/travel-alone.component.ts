import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'projects/ng-tutorial-app/src/app/state/app.state';
import { selectPreviousRoute } from '../../../state/travel-app.selectors';
import { navigateToPage } from '../../../state/travel-app.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-travel-alone',
    templateUrl: './travel-alone.component.html',
    styleUrls: ['./travel-alone.component.css']
})
export class TravelAloneComponent implements OnInit {

    previousRoutePath$: Observable<string> = this.store.select(selectPreviousRoute);

    constructor(
        private store: Store<AppState>,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        // this.store.select(selectCountries).subscribe(
        //     (countries) => {
        //         this.countries = countries;
        //     }
        // );
        // this.previousRoutePath$.subscribe(a => {
        //     console.log("PreviousUrl: %s", a);
        // });

    }

    goToPath(path: string) {
        // routerLink="/travel-alone"
        // console.log("navigateToPage: %s, %s", this.route.snapshot.url[0].path, '/travel-alone');
        // console.log(this.route.snapshot.toString());
        this.store.dispatch(navigateToPage({
            src: this.route.snapshot.url[0].path,
            dst: path
        }));
    }

}
