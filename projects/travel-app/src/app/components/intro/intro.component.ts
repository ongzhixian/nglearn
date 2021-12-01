import { Component, OnInit } from '@angular/core';
import { PolarQuestion } from '../../models/PolarQuestion';
import { displayQuestion } from '../../state/travel-app.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { Observable } from 'rxjs';
import { selectQuestion } from '../../state/travel-app.selectors';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

    constructor(
        private store: Store<AppState>
    ) { }

    question$ : Observable<PolarQuestion> = this.store.select(selectQuestion);

    ngOnInit(): void {
    }

    onNext(nextQuestion: string) {
        console.log("Receive event nextQuestin: " + nextQuestion);
        // this.question = {
        //     html: 'Do you have a destination in mind?',
        //     yesRoute: '/page1',
        //     noRoute: '/home',
        //     nextEvent: 'ask residency next'
        // }
        this.store.dispatch(displayQuestion({
            question: {
                html: 'Do you have a destination in mind?',
                yesRoute: '/page1',
                noRoute: '/home',
                nextEvent: 'ask residency next'
            }
        }));
    }
}
