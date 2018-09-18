import { StatutService } from './../services/statut.service';
import { Statut } from './../models/statut';
import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/models/report';
import { ReportService } from 'src/app/services/report.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editreport',
  templateUrl: './editreport.component.html',
  styleUrls: ['./editreport.component.css']
})
export class EditreportComponent implements OnInit {

  report: Report = null;
  statuts: Statut[] = null;

  constructor(private reportService: ReportService,
    private route: ActivatedRoute,
    public statutService: StatutService) {

    // methode d'ecoute de changement de route. recupération de l'ID dans l'URL
    this.route.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.consultReportAppli(+params['id']);
      }
    });

  }

  ngOnInit() {

    this.statutService.getAllStatut()
    .subscribe(
      (data: Statut[]) => {
        this.statuts = data;
        console.log(data);
      });

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

  listStatutByScenarioId(id: number) {
    console.log('dans editcomponent.ts, la methode "listStatutByScenarioId" avec id : ' + id);
    let statutsBack = null;
    this.statutService.getStatutByScenario(id)
      .subscribe(
        (data: Statut[]) => {
          statutsBack = data;

          console.log('retour back pour l id :' + id , statutsBack);


        });

  }

  // Methode de mise à jour du report en cours d'édition
  saveReport(report: Report) {
    console.log('methode saveReport', report);
    this.reportService.putReport(report)
    .subscribe(
      (data: Report) => {
        this.report = data;
        console.log(this.report);

      });
  }

}

