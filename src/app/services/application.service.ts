import { Application } from './../models/application';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  API_URL = 'http://localhost:8090/suiviappli';

  constructor(private http: HttpClient) {}

  getAllApplication(): Observable<Application[]> {
    console.log('methode getAllApplication du service');
    return this.http.get<Application[]>(this.API_URL);
  }

}
