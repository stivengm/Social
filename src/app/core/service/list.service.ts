import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private _countriesURL = 'assets/js/country.json';
  private _cities = 'assets/js/city.json';

  constructor(private httpClient: HttpClient) { }

  getCountries(): Observable<any> {
    return this.httpClient.get(this._countriesURL);
  }

  getCities() {
    return this.httpClient.get(this._cities);
  }
}
