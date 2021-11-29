import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';

import { TravelInfo } from '../../models/TravelInfo';
import { selectTravelInfo } from '../../state/travel-info.selectors';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'app-travel-info',
    templateUrl: './travel-info.component.html',
    styleUrls: ['./travel-info.component.css']
})
export class TravelInfoComponent implements OnInit {

    selectedTravelInfo$: Observable<TravelInfo> = of({} as TravelInfo);
    travelInfo: TravelInfo | null = null;

    constructor(private store: Store<AppState>) { 
    }

    ngOnInit(): void {
        this.store.select(selectTravelInfo).subscribe(
            (travelInfo) => {
                console.log('travelInfo: ', travelInfo);
                this.selectedTravelInfo$ = of(travelInfo);
                this.travelInfo = travelInfo;
            }
        );
    }
}
