import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { Country } from '../../models/Country';
import { TravelInfo } from '../../models/TravelInfo';
import { AppSettingsService } from '../../services/app-settings.service';
import { AppSettings } from '../../models/AppSettings';

import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { selectCountries } from '../../state/country-list.selectors';
import { findCountries } from '../../state/country-list.actions';
import { getCountryTravelInfo } from '../../state/travel-info.actions';
import { selectTravelInfo } from '../../state/travel-info.selectors';

@Component({
    selector: 'app-country-search',
    templateUrl: './country-search.component.html',
    styleUrls: ['./country-search.component.css']
})
export class CountrySearchComponent implements OnInit {

    countryInputBox = new FormControl();
    filteredOptions: Observable<Country[]> = of([]);
    selectedCountry: Country | null;

    // initialState: TravelInfo | null = {} as TravelInfo | null;
    countries: Country[] = [];
    travelInfo$: Observable<TravelInfo> = this.store.select(selectTravelInfo);

    appSettings: AppSettings = AppSettingsService.settings;
    settingName: string = AppSettingsService.settings.Name;

    constructor(private store: Store<AppState>) {
        console.debug("Create CountrySearchComponent");
        this.selectedCountry = null;
    }

    ngOnInit(): void {
        console.debug("Init CountrySearchComponent");

        console.debug("AppSettingsService: %s", AppSettingsService.settings.Name);
        console.debug("AppSettingsService: %s", AppSettingsService.settings.Api["CountryService"]); 

        this.store.select(selectCountries).subscribe(
            (countries) => {
                this.countries = countries;
            }
        );

        this.store.dispatch(findCountries({ startsWith: '' }));

        this.filteredOptions = this.countryInputBox.valueChanges.pipe(
            startWith(''),
            map(value => {
                if (this.isCountry(value)) {
                    this.selectedCountry = value;
                    console.info(`[HomeComponentitems retrieved.] Selected country: ${value.name}`);
                    this.store.dispatch(getCountryTravelInfo({ code: value.code }));
                    return this._filter(value.name);
                }
                return this._filter(value);
            }),
        );

    }


    isCountry(src: any): src is Country { // Type Guard
        return src.name !== undefined;
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
