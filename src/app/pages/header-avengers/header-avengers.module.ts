import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAvengersComponent } from './header-avengers.component';



@NgModule({
  declarations: [
    HeaderAvengersComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderAvengersComponent
  ]
})
export class HeaderAvengersModule { }
