import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CardetailsComponent } from './cardetails/cardetails.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CardetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'',component:CarsComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
