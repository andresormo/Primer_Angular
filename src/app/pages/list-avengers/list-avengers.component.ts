import { AvengersI } from './../core/avengers.interface';
import { avengersData } from './../core/avengers.data';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-avengers',
  templateUrl: './list-avengers.component.html',
  styleUrls: ['./list-avengers.component.scss'],
})
export class ListAvengersComponent {
  public avengers = avengersData;
  public contador: number = 0;

  public activeAvengers = (avenger: AvengersI) => {
    if(avenger.isActive){
      avenger.isActive = false;
      this.contador--;
    } else{
      avenger.isActive = true
      this.contador++;
    }
  };
}
