import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { TravelLane } from '../../models/TravelLane';
import TravelLaneJson from '../../../assets/travel-lanes.json';

@Component({
  selector: 'app-dummy-page1',
  templateUrl: './dummy-page1.component.html',
  styleUrls: ['./dummy-page1.component.css']
})
export class DummyPage1Component implements OnInit {

  countryInputBox = new FormControl();
  // options: string[] = ['One', 'Two', 'Three', 'Singapore', 'Switzerland', 'Germany'];
  filteredOptions: Observable<TravelLane[]>;
  travelLanes: TravelLane[] = TravelLaneJson;


  constructor() {
    this.filteredOptions = this.countryInputBox.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  ngOnInit(): void {

  }

  private _filter(value: string): TravelLane[] {
    const filterValue = value.toLowerCase();
    return this.travelLanes.filter(travelLane => travelLane.country_name.toLowerCase().includes(filterValue));
  }
}
