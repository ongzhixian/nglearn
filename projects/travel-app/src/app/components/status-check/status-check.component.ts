import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
    selector: 'app-status-check',
    templateUrl: './status-check.component.html',
    styleUrls: ['./status-check.component.css']
})
export class StatusCheckComponent implements OnInit {

    vaccinationStatusControl: FormControl = new FormControl('', [Validators.required]);
    vaccinationStatusOptions: string[] = [
        "Pfizer/BioNTech (BNT162b2 / Comirnaty / Tozinameran), at least 2 doses 17 days apart",
        "Moderna (mRNA-1273), at least 2 doses 24 days apart",
        "AstraZeneca (AZD1222 Vaxzevria), at least 2 doses 24 days apart",
        "Covishield, at least 2 doses 24 days apart",
        "Sinopharm, at least 2 doses 17 days apart",
        "Sinovac, at least 2 doses 13 days apart",
        "Covaxin, at least 2 doses 24 days apart",
        "Mix of any vaccines above, at least 2 doses 17 days apart",
        "Janssen/J&J (Ad26.COV2.S), 1 dose",
        "Other vaccines or none of the above"
    ];
    filteredVaccinationStatusOptions!: Observable<string[]>;

    residencyStatusControl: FormControl = new FormControl('', [Validators.required]);
    residencyStatusOptions: string[] = [
        "Singapore Citizen",
        "Singapore PR (excl. PR-IPA Holders)",
        "MOM-issued Pass holder (incl. IPA)",
        "Dependant of a MOM-issued Pass holder",
        "Student Pass Holder (incl. IPA)",
        "Student Pass Holder's immediate family member",
        "SC/PR's immediate family member",
        "Fiancé/Fiancée of an SC/PR",
        "Singapore PR-IPA holder",
        "Short term business traveller",
        "Traveller visiting on compassionate grounds",
        "Social visitor/tourist",
        "Long-Term Visit Pass - Graduated Student"
    ];
    filteredResidencyStatusOptions!: Observable<string[]>;

    constructor() { }

    ngOnInit(): void {
        this.filteredResidencyStatusOptions = this.residencyStatusControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filterResidencyStatusOptions(value)),
        );
        this.filteredVaccinationStatusOptions = this.vaccinationStatusControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filterVaccinationStatusOptions(value)),
        );
    }

    private _filterResidencyStatusOptions(value: string): string[] {
        const filterValue = value.toLowerCase();
        return this.residencyStatusOptions.filter(option => option.toLowerCase().includes(filterValue));
    }

    private _filterVaccinationStatusOptions(value: string): string[] {
        const filterValue = value.toLowerCase();
        return this.vaccinationStatusOptions.filter(option => option.toLowerCase().includes(filterValue));
    }
}
