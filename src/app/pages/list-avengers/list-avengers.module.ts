import { avengersData } from './../core/avengers.data';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAvengersComponent } from './list-avengers.component';
import { AvengersComponent } from './components/avengers/avengers.component';



@NgModule({
  declarations: [
    ListAvengersComponent,
    AvengersComponent
  ],
  imports: [
    CommonModule

  ],
  exports: [
    ListAvengersComponent
  ]
})
export class ListAvengersModule { }
