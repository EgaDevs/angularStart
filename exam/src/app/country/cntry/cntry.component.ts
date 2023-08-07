import { Component } from '@angular/core';
import { CntrService } from '../cntr.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cntry',
  templateUrl: './cntry.component.html',
  styleUrls: ['./cntry.component.css']
})
export class CntryComponent {
  constructor(private countries: CntrService) {}
  
  country: string = '';
  attributes: any = [];
  errorWord = '';
  population = 0;
  getName(event: any) {
    this.country = event.target.value;
  }
  getAttributes() {
    this.errorWord = '';
    try {
      this.countries.searcher(this.country).subscribe((response: any) => {
          this.attributes = response;
          this.population = Math.floor(response[0].population / 1000000)
      },
      (error: HttpErrorResponse) => {
        this.errorWord = error.message
      }
      )
    } catch(e) {
      console.log(e);
    }
  }
}
