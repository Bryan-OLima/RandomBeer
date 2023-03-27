import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beer } from '../main/models/beers.models';

@Injectable({
  providedIn: 'root'
})
export class BeerSericeService {

  private _apiUrl: string = 'https://api.punkapi.com/v2/beers/random';

  constructor(private _http: HttpClient) { }

  getRandomBeer():Observable<Array<any>>{
    return this._http.get<any[]>(`${this._apiUrl}`);
  }

}
