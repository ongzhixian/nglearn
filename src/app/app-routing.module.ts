import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthorListComponent } from './author-list/author-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';

const routes : Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: AuthorDetailComponent },
  { path: 'authors', component: AuthorListComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
