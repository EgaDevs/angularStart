import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RoversService {
  constructor(private http: HttpClient) {}

  public search(){
    return this.http.get('https://api.nasa.gov/mars-photos/api/v1/rovers', {
      params: {
        api_key: 'zO5m0TUh3p88vuVEA9X0Wpyn7xutnuJ55PhBVJta',
      }
    });
  }

  getPhotos(name: string, date: string) {
    return this.http.get('https://api.nasa.gov/mars-photos/api/v1/rovers/'+ name + '/photos', {
      params: {
        api_key: 'zO5m0TUh3p88vuVEA9X0Wpyn7xutnuJ55PhBVJta',
        earth_date: date
      }
    });
  }
}
