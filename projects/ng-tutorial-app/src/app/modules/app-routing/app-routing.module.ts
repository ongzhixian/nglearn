import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { DummyPage1Component } from '../../components/dummy-page1/dummy-page1.component';
import { DummyPage2Component } from '../../components/dummy-page2/dummy-page2.component';
import { DummyPage3Component } from '../../components/dummy-page3/dummy-page3.component';
import { LoginComponent } from '../../components/login/login.component';

const routes : Routes = [
  
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'page1', component: DummyPage1Component },
  { path: 'page2', component: DummyPage2Component },
  { path: 'page3', component: DummyPage3Component },
  { path: 'login', component: LoginComponent }
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes', component: HeroesComponent }
  // { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
