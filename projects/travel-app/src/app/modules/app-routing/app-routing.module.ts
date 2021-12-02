import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';
import { DummyPage1Component } from '../../components/dummy-page1/dummy-page1.component';
import { ResourceNotFoundComponent } from '../../components/views/resource-not-found/resource-not-found.component';
import { FirstLibComponent } from 'first-lib';
import { DummyPage4Component } from 'first-lib';
// import { IntroComponent } from '../../components/views/intro/intro.component';
import { IntroComponent } from '../../components/views/intro/intro.component';
import { QuestionaireComponent } from '../../components/questionaire/questionaire.component';
import { CountrySearchComponent } from '../../components/country-search/country-search.component';
import { TravelAloneComponent } from '../../components/views/travel-alone/travel-alone.component';
import { StatusCheckComponent } from '../../components/views/status-check/status-check.component';
import { TravelCompanionComponent } from '../../components/views/travel-companion/travel-companion.component';
import { HasDestinationComponent } from '../../components/has-destination/has-destination.component';
import { RestrictionSearchComponent } from '../../components/restriction-search/restriction-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full' },
  { path: 'intro', component: IntroComponent },
  { path: 'questionaire', component: QuestionaireComponent },
  { path: 'country-search', component: CountrySearchComponent },
  { path: 'travel-alone', component: TravelAloneComponent },
  { path: 'status-check', component: StatusCheckComponent },
  { path: 'travel-companion', component: TravelCompanionComponent },
  { path: 'has-destination', component: HasDestinationComponent },
  { path: 'restriction-search', component: RestrictionSearchComponent },
  
  { path: 'home', component: HomeComponent },
  { path: 'page1', component: DummyPage1Component },
  { path: 'first-lib', component: FirstLibComponent },
  { path: 'page4', component: DummyPage4Component },

  // Resource not found routing using redirection
  // This means whenever resource is not found, users will be re-directed to: http://localhost:4200/resource-not-found
  { path: 'resource-not-found', component: ResourceNotFoundComponent },
  { path: '**', redirectTo: 'resource-not-found' }

  // Note: We could also do away the redirecting with the following, 
  // it which case, the url bar will display url as entered (example: http://localhost:4200/homeXxx)
  // Redirection gives a consistent reporting; this gives a accurate experience.
  // { path: '**', component: ResourceNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
