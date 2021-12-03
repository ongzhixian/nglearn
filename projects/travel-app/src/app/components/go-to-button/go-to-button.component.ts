import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router';;
import { Store } from '@ngrx/store';
import { AppState } from 'projects/ng-tutorial-app/src/app/state/app.state';
import { navigateToPage } from '../../state/travel-app.actions';

@Component({
    selector: 'app-go-to-button',
    templateUrl: './go-to-button.component.html',
    styleUrls: ['./go-to-button.component.css']
})
export class GoToButtonComponent implements OnInit {

    @Input() displayText: string | undefined;

    @Input() destinationPath: string = "";

    constructor(
        private store: Store<AppState>,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        if (this.destinationPath === null) {
            throw new Error("Attribute 'destinationPath' is required");
        }
    }

    goToDestination() {
        this.store.dispatch(navigateToPage({
            src: this.route.snapshot.url[0].path,
            dst: this.destinationPath
        }));
    }
}
