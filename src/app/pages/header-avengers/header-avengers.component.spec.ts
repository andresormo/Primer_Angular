import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAvengersComponent } from './header-avengers.component';

describe('HeaderAvengersComponent', () => {
  let component: HeaderAvengersComponent;
  let fixture: ComponentFixture<HeaderAvengersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAvengersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAvengersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
