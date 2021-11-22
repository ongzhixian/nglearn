import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';
import { DummyPage1Component } from '../../components/dummy-page1/dummy-page1.component';
import { ResourceNotFoundComponent } from '../../components/resource-not-found/resource-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'page1', component: DummyPage1Component },

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
