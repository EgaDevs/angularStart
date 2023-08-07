import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountryRoutingModule } from './country-routing.module';
import { CntryComponent } from './cntry/cntry.component';


@NgModule({
  declarations: [
    CntryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CountryRoutingModule
  ]
})
export class CountryModule { }
