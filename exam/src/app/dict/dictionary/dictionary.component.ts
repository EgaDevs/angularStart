import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { DictServiceService } from '../dict-service.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent {
  constructor(private words: DictServiceService) {}

  word: string = '';
  term = ''
  @Output() submitted = new EventEmitter<string>();
  pages = '';
  phonetic = '';
  partOfSpeech = '';
  errorWord = '';
  onInput(event: Event) {
    this.term = (event.target as HTMLInputElement).value;
  }
  onFormSubmit(event: any)  {
    event.preventDefault()
    this.submitted.emit(this.term)
  }
  onTerm(term: string) {
    this.errorWord = ''
    try {
      this.words.searchWord(term).subscribe((response: any) => {
        this.pages = response[0].meanings[0].definitions[0].definition
        this.phonetic = response[0].phonetics[0].text
        this.partOfSpeech = response[0].meanings[0].partOfSpeech        
      },
      (error: HttpErrorResponse) => {
        this.errorWord = error.error.title
      }
      )
    } catch(e) {
      console.log(e);
    }
  }
}