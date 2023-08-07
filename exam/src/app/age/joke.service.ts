import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) {};
  
  public joker() {
    return this.http.get(`https://api.api-ninjas.com/v1/jokes`, {
      headers: {
        "X-Api-Key": 'SFXTgTSTUzflk4NPhKXhkw==7WPvmuWYiyPyBHNZ'
      },
      params: {
        limit: 1
      }
    })
  }
}