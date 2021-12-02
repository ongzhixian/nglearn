import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PolarQuestion } from '../../models/PolarQuestion';

import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { displayQuestion } from '../../state/travel-app.actions';
import { selectQuestion } from '../../state/travel-app.selectors';
import { Router } from '@angular/router';

@Component({
    selector: 'app-questionaire',
    templateUrl: './questionaire.component.html',
    styleUrls: ['./questionaire.component.css']
})
export class QuestionaireComponent implements OnInit {

    question$: Observable<PolarQuestion> = this.store.select(selectQuestion);

    constructor(private store: Store<AppState>, private router: Router) { }

    ngOnInit(): void {
    }

    onNext(nextQuestion: string) {
        console.log("Receive event nextQuestin: " + nextQuestion);

        this.router.navigateByUrl("/country-search");
        // this.question = {
        //     html: 'Do you have a destination in mind?',
        //     yesRoute: '/page1',
        //     noRoute: '/home',
        //     nextEvent: 'ask residency next'
        // }
        // this.store.dispatch(displayQuestion({
        //     question: {
        //         html: 'Do you have a destination in mind?',
        //         yesRoute: '/page1',
        //         noRoute: '/home',
        //         nextEvent: 'ask residency next'
        //     }
        // }));
    }
}
