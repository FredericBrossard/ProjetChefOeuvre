import { StatutService } from './../services/statut.service';
import { Statut } from './../models/statut';
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

  createReport(report: Report) {
    console.log('methode createReport', report);
    const date = new Date();
    this.report.id = null;
    this.report.date = date;
    this.reportService.postReport1(report)
    .subscribe(
      (data: Report) => {
        this.report = data;
        console.log(this.report);

      });
  }

  envoiEmail (report: Report) {
    this.reportService.sendEmail(report);
  }

  // methode qui calcul le "label de l'application" en fonction du "label du scenario" choisi par l'utilisateur
calculateLabelAppli(id: number) {
  console.log('calculateLabelAppli id=', id, this.report);
      if (id = 29) {
     // Ouvert
       this.report.lineAppli[5].etat.id = 1;            }
    //  // Service indisponible, l incident est en cours d analyse par les équipes
    //    if (this.lineappli.etat.label = '2') {
    //    this.reportapplis.etat.id = '2';
    //    }
    //    // Accès à l application limité, diagnostic en cours
    //    if (this.statuts. = '3') {
    //    this.reportapplis.etat.id = '3';
    //    }

    }

}

