import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-restriction-search',
    templateUrl: './restriction-search.component.html',
    styleUrls: ['./restriction-search.component.css']
})
export class RestrictionSearchComponent implements OnInit {

    typesOfShoes: string[] = [
        'Accepted Proof of Vaccination', 
        'Negative Pre-Departure COVID-19 Test', 
        'Valid Vaccinated Travel Pass (VTP)', 
        'COVID-19 Insurance Policy', 
        'Valid Visa (for visa-required visitors)'
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
