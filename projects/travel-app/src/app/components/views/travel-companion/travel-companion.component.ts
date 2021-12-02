import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'projects/ng-tutorial-app/src/app/state/app.state';
import { selectPreviousRoute } from '../../../state/travel-app.selectors';
import { navigateToPage } from '../../../state/travel-app.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-travel-companion',
    templateUrl: './travel-companion.component.html',
    styleUrls: ['./travel-companion.component.css']
})
export class TravelCompanionComponent implements OnInit {

    panelOpenState = false;

    previousRoutePath$: Observable<string> = this.store.select(selectPreviousRoute);
    
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
}
