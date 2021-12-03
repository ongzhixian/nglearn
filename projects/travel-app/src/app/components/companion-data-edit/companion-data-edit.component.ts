import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Traveller } from '../../models/Traveller';


@Component({
    selector: 'app-companion-data-edit',
    templateUrl: './companion-data-edit.component.html',
    styleUrls: ['./companion-data-edit.component.css']
})
export class CompanionDataEditComponent implements OnInit {

    @Input() traveller: Traveller | undefined;

    @Output() add = new EventEmitter<Traveller>();

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

    statusesForm = new FormGroup({
        'nameControl': new FormControl(),
        'vaccinationStatusControl': new FormControl('', [Validators.required, Validators.minLength(1)]),
        'residencyStatusControl': new FormControl('', [Validators.required, Validators.minLength(1)])
        // username: new FormControl('', [Validators.required, Validators.minLength(3)]),
        // password: new FormControl('', [Validators.required, Validators.minLength(3)])
    });


    constructor() { }

    ngOnInit(): void {
        this.filteredResidencyStatusOptions = this.statusesForm.controls.residencyStatusControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filterResidencyStatusOptions(value)),
        );
        this.filteredVaccinationStatusOptions = this.statusesForm.controls.vaccinationStatusControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filterVaccinationStatusOptions(value)),
        );

        this.statusesForm.markAllAsTouched();
    }

    onAdd(){
        console.log("onAdd");
        this.add.emit({
            name: this.statusesForm.controls.nameControl.value,
            residencyStatus: this.statusesForm.controls.residencyStatusControl.value,
            vaccinationStatus: this.statusesForm.controls.vaccinationStatusControl.value
        });
        this.statusesForm.controls.nameControl.setValue('');
        this.statusesForm.controls.residencyStatusControl.setValue('');
        this.statusesForm.controls.vaccinationStatusControl.setValue('');

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
