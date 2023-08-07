import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DictRoutingModule } from './dict-routing.module';
import { DictionaryComponent } from './dictionary/dictionary.component';


@NgModule({
  declarations: [
    DictionaryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DictRoutingModule
  ]
})
export class DictModule { }
