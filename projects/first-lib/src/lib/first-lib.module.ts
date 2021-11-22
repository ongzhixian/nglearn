import { NgModule } from '@angular/core';
import { FirstLibComponent } from './first-lib.component';
import { DummyPage4Component } from './components/dummy-page4/dummy-page4.component';



@NgModule({
  declarations: [
    FirstLibComponent,
    DummyPage4Component
  ],
  imports: [
  ],
  exports: [
    FirstLibComponent
  ]
})
export class FirstLibModule { }
