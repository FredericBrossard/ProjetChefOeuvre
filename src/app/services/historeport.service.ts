import { Historeport } from 'src/app/models/historeport';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoreportService {

    // Adresse URL qui permet d’aller chercher l’information
    API_URL = 'http://localhost:8090/suivihistory';

    // On créé une varialble locale "http" de type Class "HttpClient", que l'on rend "private" ou "public"
  constructor(private http: HttpClient) { }

  createReport(report: Historeport ): Observable<Historeport> {
    console.log('methode  create : scenario:' + report.statut.scenario );
    return this.http.post<Historeport>(this.API_URL, report);
  }

  getDayReport(): Observable<Historeport[]> {
    console.log('methode  getDayReport');
    return this.http.get<Historeport[]>(this.API_URL);
  }

}
