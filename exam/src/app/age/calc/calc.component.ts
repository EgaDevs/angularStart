import { Component } from '@angular/core';
import { JokeService } from '../joke.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  open:boolean = false
  joke: string = '';
  
  active() {
    this.open = !this.open
    if(!this.open) {
      this.joke = ''
    }
  }
  constructor(private jokeService: JokeService) {}
  getJoke() {
    if(this.open) {
      this.jokeService.joker().subscribe((response: any) => {
        this.joke = response[0].joke
      })
    }
  }

  downloadPdf() {
    if(this.joke) {
      let pdf = new jsPDF()
      pdf.text(this.joke.slice(0,75), 4, 10)
      if(this.joke.length > 75) {
        pdf.text(this.joke.slice(50, -1), 4, 20)
      }
      pdf.save('saveJoke.pdf')
    }
  }
}