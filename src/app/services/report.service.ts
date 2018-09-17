import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Report } from 'src/app/models/report';
import { Observable } from '../../../node_modules/rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

         // Adresse URL qui permet d’aller chercher l’information "report"
         API_URL_REPORT = 'http://localhost:8090/suivireport';


  constructor(private http: HttpClient) { }


  getListReport(): Observable<Report[]> {
    console.log('methode  getListReport du ReportappliService');
    return this.http.get<Report[]>(this.API_URL_REPORT);
  }

  getConsulReportById(id: number): Observable<Report> {
    console.log('methode GetConsulReportById du ReportappliService sur id = ' + id);
    return this.http.get<Report>(this.API_URL_REPORT + '/' + id);

  }

}
