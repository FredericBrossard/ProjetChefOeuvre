import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Report } from 'src/app/models/report';
import { Observable } from '../../../node_modules/rxjs/internal/Observable';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  // Adresse URL qui permet d’aller chercher l’information "report"
  API_URL_REPORT = 'http://localhost:8090/suivireport';


  constructor(private http: HttpClient, private router: Router) { }


  getListReport(): Observable<Report[]> {
    console.log('methode  getListReport du ReportappliService');
    return this.http.get<Report[]>(this.API_URL_REPORT);
  }

  getConsulReportById(id: number): Observable<Report> {
    console.log('methode GetConsulReportById du ReportappliService sur id = ' + id);
    return this.http.get<Report>(this.API_URL_REPORT + '/' + id);

  }

  putReport(report: Report): Observable<Report> {
    return this.http.put<Report>(this.API_URL_REPORT, report);
  }

  postReport1(report: Report): Observable<Report> {
    console.log('methode createReport1 du ReportappliService');
    return this.http.post<Report>(this.API_URL_REPORT, report);
  }

  createtReport() {
    console.log('methode createReport du ReportappliService');
    return this.http.get(this.API_URL_REPORT + '/create')
    .subscribe(
      (reportId) => {
        console.log(reportId);
        this.router.navigateByUrl('/editreport/' + reportId);
      });

  }

}
