import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CntrService {

  constructor(private http: HttpClient) { };
  public searcher(name: string) {
    return this.http.get(`https://restcountries.com/v3.1/name/${name}`)
  }
}
