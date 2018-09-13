import { Report } from './../models/report';
import { Component, OnInit } from '@angular/core';
import { ReportappliService } from 'src/app/services/reportappli.service';

@Component({
  selector: 'app-listreport',
  templateUrl: './listreport.component.html',
  styleUrls: ['./listreport.component.css']
})
export class ListreportComponent implements OnInit {

reports: Report[];

  constructor(private listReportService: ReportappliService) { }

  ngOnInit() {

    this.listReportService.getListReport()
      .subscribe(
        (data: Report[]) => {
          this.reports = data;
          console.log(data);

        });

  }

}
