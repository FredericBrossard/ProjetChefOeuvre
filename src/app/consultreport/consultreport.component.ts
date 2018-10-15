import { Component, OnInit } from '@angular/core';
import { ReportappliService } from 'src/app/services/reportappli.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { Report } from 'src/app/models/report';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-consultreport',
  templateUrl: './consultreport.component.html',
  styleUrls: ['./consultreport.component.css']
})
export class ConsultreportComponent implements OnInit {

  report: Report = null;
  // reportId: number = null;

  constructor(private reportService: ReportService,
              private route: ActivatedRoute) {

// methode d'ecoute de changement de route. recupération de l'ID dans l'URL
  this.route.params.subscribe(params => {
    if (params.hasOwnProperty('id')) {
      this.consultReportAppli(+params['id']); // (+) converts string 'id' to a number
    }
  });

              }

  ngOnInit() {
  }

  consultReportAppli(id: number) {
    console.log('methode consultReportAppli avec id : ' + id);
    this.reportService.getConsulReportById(id)
    .subscribe(
      (data: Report) => {
        this.report = data;
        console.log(data);

      });
  }


}
