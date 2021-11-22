import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';
import { DummyPage1Component } from '../../components/dummy-page1/dummy-page1.component';
import { ResourceNotFoundComponent } from '../../components/resource-not-found/resource-not-found.component';


const routes : Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'page1', component: DummyPage1Component },
  { path: '**', component: ResourceNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
