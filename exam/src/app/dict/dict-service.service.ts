import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DictServiceService {

  constructor(private http: HttpClient) {}
  public searchWord(term: string) {
    return this.http.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${term}`)
  }
}