import { HttpClient } from '@angular/common/http';
import { Scenario } from './../models/scenario';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ScenarioService {

  // Adresse URL qui permet d’aller chercher l’information
  API_URL = 'http://localhost:8090/suiviscenario';

  // On créé une varialble locale "http" de type Class "HttpClient", que l'on rend "private" ou "public"
  constructor(private http: HttpClient) {}

  getAllScenario(): Observable<Scenario[]> {
   return this.http.get<Scenario[]>(this.API_URL);
  }

}
