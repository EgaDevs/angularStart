import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgeRoutingModule } from './age-routing.module';
import { CalcComponent } from './calc/calc.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CalcComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AgeRoutingModule
  ]
})
export class AgeModule { }
