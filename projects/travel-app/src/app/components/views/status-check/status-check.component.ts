import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { AppState } from 'projects/ng-tutorial-app/src/app/state/app.state';
import { selectPreviousRoute } from '../../../state/travel-app.selectors';
import { navigateToPage } from '../../../state/travel-app.actions';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-status-check',
    templateUrl: './status-check.component.html',
    styleUrls: ['./status-check.component.css']
})
export class StatusCheckComponent implements OnInit {

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

    // vaccinationStatusControl: FormControl = new FormControl('', [Validators.required]);
    // residencyStatusControl: FormControl = new FormControl('', [Validators.required]);


    statusesForm = new FormGroup({
        'vaccinationStatusControl': new FormControl('', [Validators.required, Validators.minLength(1)]),
        'residencyStatusControl': new FormControl('', [Validators.required, Validators.minLength(1)])
        // username: new FormControl('', [Validators.required, Validators.minLength(3)]),
        // password: new FormControl('', [Validators.required, Validators.minLength(3)])
    });

    filteredResidencyStatusOptions!: Observable<string[]>;

    previousRoutePath$: Observable<string> = this.store.select(selectPreviousRoute);

    constructor(
        private store: Store<AppState>,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.filteredResidencyStatusOptions = this.statusesForm.controls.residencyStatusControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filterResidencyStatusOptions(value)),
        );
        this.filteredVaccinationStatusOptions = this.statusesForm.controls.vaccinationStatusControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filterVaccinationStatusOptions(value)),
        );

        // Mark all fields as touched (so that validation errors are shown on page load)
        this.statusesForm.markAllAsTouched();
    }

    private _filterResidencyStatusOptions(value: string): string[] {
        const filterValue = value.toLowerCase();
        return this.residencyStatusOptions.filter(option => option.toLowerCase().includes(filterValue));
    }

    private _filterVaccinationStatusOptions(value: string): string[] {
        const filterValue = value.toLowerCase();
        return this.vaccinationStatusOptions.filter(option => option.toLowerCase().includes(filterValue));
    }

    // forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    //     return (control: AbstractControl): ValidationErrors | null => {
    //         const forbidden = nameRe.test(control.value);
    //         return forbidden ? { forbiddenName: { value: control.value } } : null;
    //     };
    // }
    

    goToPath(path: string) {
        console.log('In status-check: %s', this.statusesForm.valid);

        if (!this.statusesForm.valid)
            return;


        this.store.dispatch(navigateToPage({
            src: this.route.snapshot.url[0].path,
            dst: path
        }));
    }
}
