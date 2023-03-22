import { AvengersI } from './pages/core/avengers.interface';
import { FooterAvengersModule } from './pages/footer-avengers/footer-avengers/footer-avengers.module';
import { ListAvengersModule } from './pages/list-avengers/list-avengers.module';
import { HeaderAvengersModule } from './pages/header-avengers/header-avengers.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderAvengersModule,
    ListAvengersModule,
    FooterAvengersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
