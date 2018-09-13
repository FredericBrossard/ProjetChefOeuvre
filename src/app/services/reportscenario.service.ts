import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Reportscenario } from 'src/app/models/reportscenario';

@Injectable({
  providedIn: 'root'
})
export class ReportscenarioService {

    // Adresse URL qui permet d’aller chercher l’information
    API_URL = 'http://localhost:8090/suiviraportscenario';

    // On créé une varialble locale "http" de type Class "HttpClient", que l'on rend "private" ou "public"
  constructor(private http: HttpClient) { }

  getReport(): Observable<Reportscenario[]> {
    console.log('methode  getReport');
    return this.http.get<Reportscenario[]>(this.API_URL);
  }

}
