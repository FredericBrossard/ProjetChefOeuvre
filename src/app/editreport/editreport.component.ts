import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/models/report';
import { ReportService } from 'src/app/services/report.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editreport',
  templateUrl: './editreport.component.html',
  styleUrls: ['./editreport.component.css']
})
export class EditreportComponent implements OnInit {

  report: Report = null;

  constructor(private reportService: ReportService,
    private route: ActivatedRoute) {

    // methode d'ecoute de changement de route. recupération de l'ID dans l'URL
    this.route.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.consultReportAppli(+params['id']);
      }
    });

  }

  ngOnInit() {
  }

  consultReportAppli(id: number) {
    console.log('dans editcomponent.ts, la methode consultReportAppli avec id : ' + id);
    this.reportService.getConsulReportById(id)
      .subscribe(
        (data: Report) => {
          this.report = data;
          console.log(data);

        });

  }

}

