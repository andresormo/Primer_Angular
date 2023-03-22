import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avengers',
  templateUrl: './avengers.component.html',
  styleUrls: ['./avengers.component.scss']
})
export class AvengersComponent implements OnInit {
  public ngOnInit(): void {
    console.log('Init product');

  }
}
