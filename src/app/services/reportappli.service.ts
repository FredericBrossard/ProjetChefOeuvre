import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Reportappli } from 'src/app/models/reportappli';

@Injectable({
  providedIn: 'root'
})
export class ReportappliService {

      // Adresse URL qui permet d’aller chercher l’information dans "reportlineappli"
      API_URL = 'http://localhost:8090/suiviraportappli';



      // On créé une varialble locale "http" de type Class "HttpClient", que l'on rend "private" ou "public"
    constructor(private http: HttpClient) { }

    getReportAppli(): Observable<Reportappli[]> {
      console.log('methode  getReportAppli');
      return this.http.get<Reportappli[]>(this.API_URL);
    }

}
