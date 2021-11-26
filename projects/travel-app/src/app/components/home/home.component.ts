import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { TravelLane } from '../../models/TravelLane';
import TravelLaneJson from '../../../assets/travel-lanes.json';
import { AppSettingsService } from '../../services/app-settings.service';
import { AppSettings } from '../../models/AppSettings';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    countryInputBox = new FormControl();
    filteredOptions: Observable<TravelLane[]> = of([]);
    travelLanes: TravelLane[] = TravelLaneJson;
    selectedTravelLane: TravelLane | null;

    appSettings: AppSettings = AppSettingsService.settings;

    settingName: string = AppSettingsService.settings.Name;

    constructor() { 
        this.selectedTravelLane = null;
    }

    ngOnInit(): void {
        this.filteredOptions = this.countryInputBox.valueChanges.pipe(
            startWith(''),
            map(value => {
                if (this.isTravelLane(value)) {
                    this.selectedTravelLane = value;
                    return this._filter(value.country_name);
                }

                return this._filter(value);
            }),
        );
    }

    isTravelLane(src: any): src is TravelLane { // Type Guard
        return src.country_name !== undefined;
    }

    getOptionText(travelLane: TravelLane) {
        return travelLane?.country_name;
    }

    private _filter(value: string): TravelLane[] {
        const filterValue = value.toLowerCase();
        return this.travelLanes.filter(travelLane => travelLane.country_name.toLowerCase().includes(filterValue));
    }

}
