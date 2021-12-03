import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'projects/ng-tutorial-app/src/app/state/app.state';
import { selectPreviousRoute } from '../../../state/travel-app.selectors';
import { navigateToPage } from '../../../state/travel-app.actions';
import { ActivatedRoute } from '@angular/router';

import { Traveller } from '../../../models/Traveller';

@Component({
    selector: 'app-travel-companion',
    templateUrl: './travel-companion.component.html',
    styleUrls: ['./travel-companion.component.css']
})
export class TravelCompanionComponent implements OnInit {

    editIndex: number = -1;
    editTraveller: Traveller | undefined;

    panelOpenState = false;

    previousRoutePath$: Observable<string> = this.store.select(selectPreviousRoute);

    companions: Traveller[] = [
        {
            name: 'John',
            vaccinationStatus: 'Vaccinated',
            residencyStatus: 'Resident'
        },
        {
            name: 'Jane',
            vaccinationStatus: 'Vaccinated',
            residencyStatus: 'Resident'
        },
        {
            name: 'Jessie',
            vaccinationStatus: 'Vaccinated, Pfizer',
            residencyStatus: 'Resident'
        },
    ];

    constructor(
        private store: Store<AppState>,
        private route: ActivatedRoute
    ) { }

    step = 0;

    setStep(index: number) {
        this.step = index;
    }

    nextStep() {
        this.step++;
    }

    prevStep() {
        this.step--;
    }

    ngOnInit(): void {
    }

    goToPath(path: string) {
        this.store.dispatch(navigateToPage({
            src: this.route.snapshot.url[0].path,
            dst: path
        }));
    }

    onAdd(companionInfo: Traveller) {
        console.info("Parent received onAdd");
        // this.store.dispatch(addBook({ bookId }));
        this.companions.push(companionInfo);
    }

    remove(index: number) {
        console.info("Index is %d", index);
        this.companions.splice(index, 1);
    }

    edit(index: number) {
        this.editIndex = index;
        this.editTraveller = this.companions[index]; 
        console.info("Edit (index): %d", index);
        console.info(this.editTraveller);
        // this.companions.splice(index, 1);
    }

    cancel(index: number) {
        this.editIndex = -1;
    }

    save(index: number) {
        console.info("Save (index): %d", index);
        this.editIndex = index;
        
        // this.companions.splice(index, 1);
    }

    onUpdate(traveller: Traveller) {
        // console.log("Updated!", x);
        this.companions[this.editIndex] = traveller;  
        this.editIndex = -1;
    }
}
