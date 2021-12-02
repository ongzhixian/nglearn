import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'projects/ng-tutorial-app/src/app/state/app.state';
import { selectPreviousRoute } from '../../state/travel-app.selectors';

@Component({
    selector: 'app-travel-alone',
    templateUrl: './travel-alone.component.html',
    styleUrls: ['./travel-alone.component.css']
})
export class TravelAloneComponent implements OnInit {

    previousRoutePath$: Observable<string> = this.store.select(selectPreviousRoute);

    constructor(private store: Store<AppState>) 
    {
        
    }

    ngOnInit(): void {
        // this.store.select(selectCountries).subscribe(
        //     (countries) => {
        //         this.countries = countries;
        //     }
        // );
        this.previousRoutePath$.subscribe(a => {
            console.log("PreviousUrl: %s", a);
        });

    }

}
