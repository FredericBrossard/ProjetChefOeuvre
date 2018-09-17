import { Report } from './../models/report';
import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-listreport',
  templateUrl: './listreport.component.html',
  styleUrls: ['./listreport.component.css']
})
export class ListreportComponent implements OnInit {

reports: Report[];
// oneReport: Report;

  constructor(private reportService: ReportService) { }

  ngOnInit() {

    console.log('listreport.ts');
    this.reportService.getListReport()
      .subscribe(
        (data: Report[]) => {
          this.reports = data;
          console.log(data);

        });

  }

  // consultReportAppli(id: number) {
  //   console.log('methode consultReportAppli avec id : ' + id);
  //   this.reportService.getConsulReportById(id)
  //   .subscribe(
  //     (data: Report) => {
  //       this.oneReport = data;
  //       console.log(data);

  //     });
  // }

}
