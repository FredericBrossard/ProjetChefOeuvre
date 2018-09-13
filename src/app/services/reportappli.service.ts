import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Reportscenario } from 'src/app/models/reportscenario';
import { Reportappli } from 'src/app/models/reportappli';
import { Report } from 'src/app/models/report';

@Injectable({
  providedIn: 'root'
})
export class ReportappliService {

      // Adresse URL qui permet d’aller chercher l’information dans "reportlineappli"
      API_URL = 'http://localhost:8090/suiviraportappli';

       // Adresse URL qui permet d’aller chercher l’information "report"
       API_URL_REPORT = 'http://localhost:8090/suivireport';

      // On créé une varialble locale "http" de type Class "HttpClient", que l'on rend "private" ou "public"
    constructor(private http: HttpClient) { }

    getReportAppli(): Observable<Reportappli[]> {
      console.log('methode  getReportAppli');
      return this.http.get<Reportappli[]>(this.API_URL);
    }

    getListReport(): Observable<Report[]> {
      console.log('methode  getListReport du ReportappliService');
      return this.http.get<Report[]>(this.API_URL_REPORT);
    }

    getConsulReportById(id: number): Observable<Report> {
      console.log('methode GetConsulReportById du ReportappliService');
      return this.http.get<Report>(this.API_URL_REPORT + '/' + id);

    }

}
