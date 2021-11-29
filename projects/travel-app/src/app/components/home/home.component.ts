import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { Country } from '../../models/Country';
// import { TravelLane } from '../../models/TravelLane';
// import TravelLaneJson from '../../../assets/travel-lanes.json';
import { AppSettingsService } from '../../services/app-settings.service';
import { AppSettings } from '../../models/AppSettings';

import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { selectCountries } from '../../state/country-list.selectors';
import { findCountries } from '../../state/country-list.actions';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    countryInputBox = new FormControl();
    filteredOptions: Observable<Country[]> = of([]);
    selectedCountry: Country | null;

    countries: Country[] = [];

    appSettings: AppSettings = AppSettingsService.settings;
    settingName: string = AppSettingsService.settings.Name;

    constructor(private store: Store<AppState>) {
        this.selectedCountry = null;
    }

    ngOnInit(): void {

        this.store.select(selectCountries).subscribe(
            (countries) => {
                console.log(`In selectCountries subscribe ${countries}`);
                this.countries = countries;
            }
        );

        this.store.dispatch(findCountries({ startsWith: '' }));

        this.filteredOptions = this.countryInputBox.valueChanges.pipe(
            startWith(''),
            map(value => {
                if (this.isCountry(value)) {
                    this.selectedCountry = value;
                    return this._filter(value.name);
                }
                return this._filter(value);
            }),
        );
    }

    isCountry(src: any): src is Country { // Type Guard
        return src.country_name !== undefined;
    }

    getOptionText(country: Country) {
        return country?.name;
    }

    private _filter(value: string): Country[] {
        const filterValue = value.toLowerCase();
        // return this.countries.filter(country => country.name.toLowerCase().includes(filterValue));
        return this.countries.filter(country => country.name.toLowerCase().startsWith(filterValue));
    }

}
