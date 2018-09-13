import { Line } from './../models/line';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Reportscenario } from 'src/app/models/reportscenario';

@Injectable({
  providedIn: 'root'
})
export class LineService {

  // Adresse URL qui permet d’aller chercher l’information
  API_URL = 'http://localhost:8090/suivilinereport';

  // On créé une varialble locale "http" de type Class "HttpClient", que l'on rend "private" ou "public"
  constructor(private http: HttpClient) { }

  // createReport(reportLine: Line): Observable<Line> {
    createReport(reportLine: Line): Observable<Line> {
    console.log('methode  "createReport" de line.service. Le Scenario créé est :' + reportLine.scenario);
    return this.http.post<Line>(this.API_URL, reportLine);
  }

}
