import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAvengersComponent } from './list-avengers.component';

describe('ListAvengersComponent', () => {
  let component: ListAvengersComponent;
  let fixture: ComponentFixture<ListAvengersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAvengersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAvengersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
