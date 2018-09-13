import { State } from './../models/state';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  API_URL = 'http://localhost:8090/suivietat';

  constructor(private http: HttpClient) { }

  getAllState(): Observable<State[]> {
    return this.http.get<State[]>(this.API_URL);
  }
}
