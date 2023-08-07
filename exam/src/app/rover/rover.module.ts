import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoverRoutingModule } from './rover-routing.module';
import { FormsModule } from '@angular/forms';
import { MarsComponent } from './mars/mars.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MarsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RoverRoutingModule
  ],
  exports: [
    MarsComponent,
  ]
})
export class RoverModule { }
