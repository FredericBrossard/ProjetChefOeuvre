import { Statut } from 'src/app/models/statut';
import { Report } from './../models/report';
import { StatutService } from './../services/statut.service';

import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-editreport',
  templateUrl: './editreport.component.html',
  styleUrls: ['./editreport.component.css']
})
export class EditreportComponent implements OnInit {
  // [x: string]: number;

  report: Report = null;
  statuts: Statut[] = null;
  states: StateService = null;

  constructor(private reportService: ReportService,
    private route: ActivatedRoute,
    public statutService: StatutService,
    private stateService: StateService,
    private router: Router) {

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

    // this.stateService.getAllState()
    //   .subscribe(
    //     (data: State[]) => {
    //       this.states = data;
    //       console.log(data);
    //     });


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

          console.log('retour back pour l id :' + id, statutsBack);


        });

  }

  // tslint:disable-next-line:max-line-length
  // Methode de mise à jour du report en cours d'édition avec une gestion de message utilisateur son forme de pop up pour indiquer que le rapport est créé ou pas.
  // J'aurais voulu une gestion pop up selon boolean issu du back
  saveReport(report: Report) {
    console.log('methode saveReport', report);
    this.reportService.putReport(report)
      .subscribe(
        (data: Report) => {
          this.report = data;
          console.log(this.report);
          if (report.id != null) {
            this.router.navigateByUrl('/listreport');
            alert('Enregitrement du rapport effectué');
          } else {
            alert('Enregistrement du rapport non effectué');
          }
        });
    // (saveReport: Boolean) => {
    //   if (saveReport) {
    //     alert('Enregistrement effectif');
    //   }
    // },
    // (error) => {
    //   alert('Enregistrement non effectué');

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
          // if (report.id != null) {
          //   alert('Enregistrement du rapport effectuée');
          // } else {
          //  alert('Enregistrement du rapport non effectuée');
          // }

        },
      );
  }

  // tslint:disable-next-line:max-line-length
  // methode de calcul le "libéllé LABEL" de "l'application" en fonction du "libellé "label" du "scenario" choisi par l'utilisateur dans la combobox
  calculateLabelAppli(idSta: number, idApli: number) {
    console.log('calculateLabelAppli idStatut=', idSta, 'idApli=', idApli, this.report);
    // Ralentissement, surveillance en cours
    let noLineAppliVue = 0;
    // for (let indiceLineAppli = 0; this.report.lineAppli.length; indiceLineAppli++) {
    //   // console.log('this.report.lineAppli[noLineAppli].application.id : ' + this.report.lineAppli[indiceLineAppli].application.id);
    //   console.log('idApli' + idApli);
    //   if (this.report.lineAppli[indiceLineAppli].application.id === idApli) {
    //     // Mémorisation du No de la lineAppli dans l'objet Report ou se trouve l'id de l application
    //     noLineAppliVue = indiceLineAppli;
    //     console.log('noLineAppliVue' + noLineAppliVue);
    //   }
    // }

    let cptOuvert = 0;
    let cptIncident = 0;
    console.log('(idApliiii' + idApli);


    if (idApli === 1) {

      // initialisation à l'Etat intermédaire pour l'application qui a vue su scenario mis à jour
      this.report.lineAppli[noLineAppliVue].etat.id = 2;
      this.report.lineAppli[noLineAppliVue].etat.label = 'Accès à l application limité, diagnostic en cours';
      for (let indiceLineScenario = 0; this.report.lineAppli[noLineAppliVue].listReportLineScenario.length; indiceLineScenario++) {

        const indice = this.report.lineAppli[noLineAppliVue].listReportLineScenario[indiceLineScenario].statut.id;

        switch (indice) {
          case 1:
          case 3:
          case 6:
          case 9:

            cptOuvert++;
            console.log('cptOuvert :' + cptOuvert, 'indice:' + indice);

            if (cptOuvert === 4) {
              console.log('cptOuvert :' + cptOuvert);
              this.report.lineAppli[noLineAppliVue].etat.id = 1;
              this.report.lineAppli[noLineAppliVue].etat.label = 'Ouvert';
            }
            break;

          case 2:
          case 4:
          case 7:
          case 10:

            cptIncident = cptIncident + 1;
            console.log('cptIncidentt :' + cptIncident, 'indice:' + indice);


            if (cptIncident >= 1) {
              console.log('cptIncident :' + cptIncident);
              this.report.lineAppli[noLineAppliVue].etat.id = 3;
              this.report.lineAppli[noLineAppliVue].etat.label = 'Service indisponible, l incident est en cours d analyse par les équipes';
            }
            break;
          default:

        }
      }
    }

    if (idApli === 2) {
      noLineAppliVue = 1;
      this.report.lineAppli[noLineAppliVue].etat.id = 2;
      this.report.lineAppli[noLineAppliVue].etat.label = 'Accès à l application limité, diagnostic en cours';

      for (let indiceLineScenario = 0; this.report.lineAppli[noLineAppliVue].listReportLineScenario.length; indiceLineScenario++) {

        console.log(this.report.lineAppli[noLineAppliVue].listReportLineScenario[indiceLineScenario].statut.id);

        const indice = this.report.lineAppli[noLineAppliVue].listReportLineScenario[indiceLineScenario].statut.id;

        switch (indice) {
          case 12:

            cptOuvert++;
            console.log('cptOuvert :' + cptOuvert, 'indice:' + indice);

            if (cptOuvert === 1) {
              console.log('cptOuvert :' + cptOuvert);
              this.report.lineAppli[noLineAppliVue].etat.id = 1;
              this.report.lineAppli[noLineAppliVue].etat.label = 'Ouvert';
            }
            break;

          case 13:

            cptIncident = cptIncident + 1;
            console.log('cptIncidentt :' + cptIncident, 'indice:' + indice);


            if (cptIncident >= 1) {
              console.log('cptIncident :' + cptIncident);
              this.report.lineAppli[noLineAppliVue].etat.id = 3;
              this.report.lineAppli[noLineAppliVue].etat.label = 'Service indisponible, l incident est en cours d analyse par les équipes';
            }
            break;
          default:

        }
      }
    }

    if (idApli === 3) {
      noLineAppliVue = 2;
      this.report.lineAppli[noLineAppliVue].etat.id = 2;
      this.report.lineAppli[noLineAppliVue].etat.label = 'Accès à l application limité, diagnostic en cours';

      for (let indiceLineScenario = 0; this.report.lineAppli[noLineAppliVue].listReportLineScenario.length; indiceLineScenario++) {

        // console.log(this.report.lineAppli[noLineAppliVue].listReportLineScenario[indiceLineScenario].statut.id);

        const indice = this.report.lineAppli[noLineAppliVue].listReportLineScenario[indiceLineScenario].statut.id;

        switch (indice) {
          case 15:
          case 18:

            cptOuvert++;
            console.log('cptOuvert :' + cptOuvert, 'indice:' + indice);

            if (cptOuvert === 2) {
              console.log('cptOuvert :' + cptOuvert);
              this.report.lineAppli[noLineAppliVue].etat.id = 1;
              this.report.lineAppli[noLineAppliVue].etat.label = 'Ouvert';
            }
            break;

          case 16:
          case 19:

            cptIncident = cptIncident + 1;
            console.log('cptIncidentt :' + cptIncident, 'indice:' + indice);


            if (cptIncident >= 1) {
              console.log('cptIncident :' + cptIncident);
              this.report.lineAppli[noLineAppliVue].etat.id = 3;
              this.report.lineAppli[noLineAppliVue].etat.label = 'Service indisponible, l incident est en cours d analyse par les équipes';
            }
            break;
          default:

        }
      }
    }


    if (idApli === 4) {
      noLineAppliVue = 3;
      this.report.lineAppli[noLineAppliVue].etat.id = 2;
      this.report.lineAppli[noLineAppliVue].etat.label = 'Accès à l application limité, diagnostic en cours';

      for (let indiceLineScenario = 0; this.report.lineAppli[noLineAppliVue].listReportLineScenario.length; indiceLineScenario++) {

        console.log(this.report.lineAppli[noLineAppliVue].listReportLineScenario[indiceLineScenario].statut.id);

        const indice = this.report.lineAppli[noLineAppliVue].listReportLineScenario[indiceLineScenario].statut.id;

        switch (indice) {
          case 21:

            cptOuvert++;
            console.log('cptOuvert :' + cptOuvert, 'indice:' + indice);

            if (cptOuvert === 1) {
              console.log('cptOuvert :' + cptOuvert);
              this.report.lineAppli[noLineAppliVue].etat.id = 1;
              this.report.lineAppli[noLineAppliVue].etat.label = 'Ouvert';
            }
            break;

          case 22:

            cptIncident = cptIncident + 1;
            console.log('cptIncidentt :' + cptIncident, 'indice:' + indice);

            if (cptIncident >= 1) {
              console.log('cptIncident :' + cptIncident);
              this.report.lineAppli[noLineAppliVue].etat.id = 3;
              this.report.lineAppli[noLineAppliVue].etat.label = 'Service indisponible, l incident est en cours d analyse par les équipes';
            }
            break;
          default:

        }
      }
    }
    if (idApli === 5) {
      noLineAppliVue = 4;
      this.report.lineAppli[noLineAppliVue].etat.id = 2;
      this.report.lineAppli[noLineAppliVue].etat.label = 'Accès à l application limité, diagnostic en cours';

      for (let indiceLineScenario = 0; this.report.lineAppli[noLineAppliVue].listReportLineScenario.length; indiceLineScenario++) {

        console.log(this.report.lineAppli[noLineAppliVue].listReportLineScenario[indiceLineScenario].statut.id);

        const indice = this.report.lineAppli[noLineAppliVue].listReportLineScenario[indiceLineScenario].statut.id;

        switch (indice) {
          case 24:
          case 26:

            cptOuvert++;
            console.log('cptOuvert :' + cptOuvert, 'indice:' + indice);

            if (cptOuvert === 2) {
              console.log('cptOuvert :' + cptOuvert);
              this.report.lineAppli[noLineAppliVue].etat.id = 1;
              this.report.lineAppli[noLineAppliVue].etat.label = 'Ouvert';
            }
            break;

          case 25:
          case 27:

            cptIncident = cptIncident + 1;
            console.log('cptIncidentt :' + cptIncident, 'indice:' + indice);

            if (cptIncident >= 1) {
              console.log('cptIncident :' + cptIncident);
              this.report.lineAppli[noLineAppliVue].etat.id = 3;
              this.report.lineAppli[noLineAppliVue].etat.label = 'Service indisponible, l incident est en cours d analyse par les équipes';
            }
            break;
          default:

        }
      }
    }
    if (idApli === 6) {
      noLineAppliVue = 5;
      this.report.lineAppli[noLineAppliVue].etat.id = 2;
      this.report.lineAppli[noLineAppliVue].etat.label = 'Accès à l application limité, diagnostic en cours';

      for (let indiceLineScenario = 0; this.report.lineAppli[noLineAppliVue].listReportLineScenario.length; indiceLineScenario++) {

        // console.log(this.report.lineAppli[noLineAppliVue].listReportLineScenario[indiceLineScenario].statut.id);

        const indice = this.report.lineAppli[noLineAppliVue].listReportLineScenario[indiceLineScenario].statut.id;

        switch (indice) {
          case 29:

            cptOuvert++;
            console.log('cptOuvert :' + cptOuvert, 'indice:' + indice);

            if (cptOuvert === 1) {
              console.log('cptOuvert :' + cptOuvert);
              this.report.lineAppli[noLineAppliVue].etat.id = 1;
              this.report.lineAppli[noLineAppliVue].etat.label = 'Ouvert';
            }
            break;

          case 30:

            cptIncident = cptIncident + 1;
            console.log('cptIncidentt :' + cptIncident, 'indice:' + indice);

            if (cptIncident >= 1) {
              console.log('cptIncident :' + cptIncident);
              this.report.lineAppli[noLineAppliVue].etat.id = 3;
              this.report.lineAppli[noLineAppliVue].etat.label = 'Service indisponible, l incident est en cours d analyse par les équipes';
            }
            break;
          default:

        }
      }
    }
    console.log('calculateLabelAppli apres maj=', this.report);
  }

}


  // for (let indiceLineAppli = 0; this.report.lineAppli.length; indiceLineAppli++) {
  //   console.log('this.report.lineAppli[noLineAppli].application.id : ' + this.report.lineAppli[indiceLineAppli].application.id);
  //   console.log('idApli' + idApli);
  //   // const idLineAppliVue = this.report.lineAppli[noLineAppli].application.id;
  //   // tslint:disable-next-line:no-unused-expression
  // switch (idSta) {

  // case 1:
  // case 3:
  // case 6:
  // case 9:
  // case 12:
  // case 15:
  // case 18:
  // case 21:
  // case 24:
  // case 26:
  // case 29:
  //   for (let noLineAppli = 0; noLineAppli < this.report.lineAppli.length; noLineAppli++) {
  //     // console.log('this.report.lineAppli[noLineAppli].application.id : ' + this.report.lineAppli[noLineAppli].application.id);
  //     // console.log('idApli' + idApli);
  //     if (this.report.lineAppli[noLineAppli].application.id === idApli) {
  //       console.log('noLineAppli' + noLineAppli);
  //       this.report.lineAppli[noLineAppli].etat.id = 1;
  //       this.report.lineAppli[noLineAppli].etat.label = 'Fred Ouvert';
  //     }
  //   }
  //   break;

  //   case 4:
  //   case 7:
  //   case 10:
  //   case 13:
  //   case 16:
  //   case 19:
  //   case 22:
  //   case 27:
  //   case 30:

  //     for (let noLineAppli = 0; this.report.lineAppli.length; noLineAppli++) {
  //       console.log('this.report.lineAppli[noLineAppli].application.id : ' + this.report.lineAppli[noLineAppli].application.id);
  //       console.log('idApli' + idApli);
  //       // const idLineAppliVue = this.report.lineAppli[noLineAppli].application.id;
  //       if (this.report.lineAppli[noLineAppli].application.id === idApli) {
  //         console.log('noLineAppli' + noLineAppli);
  //         this.report.lineAppli[noLineAppli].etat.id = 2;
  //         this.report.lineAppli[noLineAppli].etat.label = 'Fred Accès à l application limité, diagnostic en cours';
  //       }
  //     }
  //     break;

  //   case 2:
  //   case 5:
  //   case 8:
  //   case 11:
  //   case 14:
  //   case 17:
  //   case 20:
  //   case 23:
  //   case 25:
  //   case 28:
  //   case 31:
  //     for (let noLineAppli = 0; noLineAppli < this.report.lineAppli.length; noLineAppli++) {
  //       // console.log('this.report.lineAppli[noLineAppli].application.id : ' + this.report.lineAppli[noLineAppli].application.id);
  //       console.log('idApli' + idApli);
  //       if (this.report.lineAppli[noLineAppli].application.id === idApli) {
  //         console.log('noLineAppli' + noLineAppli);
  //         this.report.lineAppli[noLineAppli].etat.id = 3;
  // tslint:disable-next-line:max-line-length
  //         this.report.lineAppli[noLineAppli].etat.label = 'Fred Service indisponible, l incident est en cours d analyse par les équipes';
  //       }
  //     }
  //     break;

  //   default:
  //     console.log('calculateLabelAppli apres maj=', this.report);
  // }



  // tslint:disable-next-line:no-unused-expression


