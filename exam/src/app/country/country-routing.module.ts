import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CntryComponent } from './cntry/cntry.component';

const routes: Routes = [{path: 'country', component: CntryComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
