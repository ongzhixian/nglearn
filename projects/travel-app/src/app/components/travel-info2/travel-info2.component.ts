import { Component, OnInit, Input } from '@angular/core';
// import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { GoogleBook } from '../../models/google-book';
import { TravelInfo } from '../../models/TravelInfo';


@Component({
    selector: 'app-travel-info2',
    templateUrl: './travel-info2.component.html',
    styleUrls: ['./travel-info2.component.css']
})
export class TravelInfo2Component implements OnInit {

    @Input()
    travelInfo: TravelInfo | null = null;

    constructor() { }

    ngOnInit(): void {
        console.info(`[TravelInfo2Component] code: %s`, this.travelInfo?.code)
    }

}
