import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { DummyPage1Component } from '../../components/dummy-page1/dummy-page1.component';
import { DummyPage2Component } from '../../components/dummy-page2/dummy-page2.component';
import { DummyPage3Component } from '../../components/dummy-page3/dummy-page3.component';
import { DummyPage4Component } from '../../components/dummy-page4/dummy-page4.component';
import { DummyPage5Component } from '../../components/dummy-page5/dummy-page5.component';
import { DummyPage6Component } from '../../components/dummy-page6/dummy-page6.component';
import { LoginComponent } from '../../components/login/login.component';
import { LogoutComponent } from '../../components/logout/logout.component';

import { AuthenticatedUserGuard } from '../../guards/authenticated-user.guard';

const routes : Routes = [
  
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'page1', component: DummyPage1Component },
  { path: 'page2', component: DummyPage2Component, canActivate: [AuthenticatedUserGuard] },
  { path: 'page3', component: DummyPage3Component, canActivate: [AuthenticatedUserGuard] },
  { path: 'page4', component: DummyPage4Component, canActivate: [AuthenticatedUserGuard] },
  { path: 'page5', component: DummyPage5Component, canActivate: [AuthenticatedUserGuard] },
  { path: 'page6', component: DummyPage6Component},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
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
