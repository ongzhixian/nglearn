import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { TravelLane } from '../../models/TravelLane';
import TravelLaneJson from '../../../assets/travel-lanes.json';
import { AppSettingsService } from '../../services/app-settings.service';
import { AppSettings } from '../../models/AppSettings';

@Component({
  selector: 'app-dummy-page1',
  templateUrl: './dummy-page1.component.html',
  styleUrls: ['./dummy-page1.component.css']
})
export class DummyPage1Component implements OnInit {

  countryInputBox = new FormControl();
  filteredOptions: Observable<TravelLane[]> = of([]);
  travelLanes: TravelLane[] = TravelLaneJson;
  selectedTravelLane: TravelLane | null;

  // Example of exposing appSettings (for display) to the UI
  appSettings: AppSettings = AppSettingsService.settings;
  
  // Example of retrieving a value directly
  settingName: string = AppSettingsService.settings.Name;

  constructor() {
    this.selectedTravelLane = null;
  }

  ngOnInit(): void {

    
    console.log("SAppSettingsService: %s", AppSettingsService.settings.Name);

    // This was placed in constructor originally.
    // The argument is that the UI component (countryInputBox) could potentially
    // be unavailable at time of construction (really?!!).
    // So, it maybe safer to set the event-handler as part of Angular component life-cycle.
    this.filteredOptions = this.countryInputBox.valueChanges.pipe(
      startWith(''),
      map(value => {
        if (this.isTravelLane(value)) {
          // console.log("show info for %s", value);
          this.selectedTravelLane = value;
          return this._filter(value.country_name);
        }

        return this._filter(value);

        // Example of type checking without the use of type guards (see below)
        // If we pick a value from the dropdown, value will be a TravelLane object
        // if ((value as TravelLane).country_name) {
        //   return this._filter(value.country_name);
        // }
        // // Else value will be a string
        // return this._filter(value);
      }),
    );

  }

  // Example of Type Guards
  // See: https://tutorialsforangular.com/2021/08/04/type-checking-in-typescript/
  // See: https://basarat.gitbook.io/typescript/type-system/typeguard
  isTravelLane(src: any): src is TravelLane {
    // Define the check conditions to determine that src is TravelLane
    // ZX: So yeah, its a bit of duck-typing check... (if it quacks and waddles like a duck, its a duck)
    // In this case, we are saying that 'src' can be deemed as a TravelLane
    // if it has the following properties (or in this case, just 'country_name' property):
    return src.country_name !== undefined;
  }

  getOptionText(travelLane: TravelLane) {
    return travelLane?.country_name;
  }

  // countrySelected(option: any) {
  //   // console.log(`onOptionSelected event [${event}]`);
  // }

  private _filter(value: string): TravelLane[] {
    // console.log(`_filter value [${value}]`);
    const filterValue = value.toLowerCase();
    return this.travelLanes.filter(travelLane => travelLane.country_name.toLowerCase().includes(filterValue));
  }
}
