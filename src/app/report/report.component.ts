import { Application } from './../models/application';
import { Reportscenario } from './../models/reportscenario';
import { Reportappli } from 'src/app/models/reportappli';
import { Component, OnInit } from '@angular/core';
import { ReportscenarioService } from 'src/app/services/reportscenario.service';
import { ScenarioService } from 'src/app/services/scenario.service';
import { Scenario } from 'src/app/models/scenario';
import { ApplicationService } from 'src/app/services/application.service';
import { Statut } from 'src/app/models/statut';
import { StatutService } from 'src/app/services/statut.service';
import { Report } from 'src/app/models/report';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent implements OnInit {

  reportscenarios: Reportscenario[];
  reportapplis: Reportappli[];
  scenarios: Scenario[] = null;

  applications: Application[];
  statuts: Statut[];

  utilisateur: { firstName: null, name: null};

  report: Report;

  // scenarioNetCredit: {'Page d accueil', 'Offre Alternative', 'Utilisation de carte', 'Entrée dossier papier'};
  // scenarioNetDemat: {'Entrée dossier Demat'};
  // scenarioODEJ: {'Automobile', 'Distribution'};

  // reportService est de type "HistoreportService"
  constructor(private reportscenarioService: ReportscenarioService,
              private scenarioService: ScenarioService,
              private applicationService: ApplicationService,
              private statutService: StatutService) { }

  ngOnInit() {

    // this.reportscenarioService.getReport()
    //   .subscribe(
    //     (data: Reportscenario[]) => {
    //       this.reportscenarios = data;
    //       console.log(data);
    //     });

        this.scenarioService.getAllScenario()
      .subscribe(
        (data: Scenario[]) => {
          this.scenarios = data;
          console.log('senar:');
          console.log(data);

        });

        this.applicationService.getAllApplication()
      .subscribe(
        (appli: Application[]) => {
        this.applications = appli;
        console.log('appli :');
        console.log(appli);

      });

      this.statutService.getAllStatut()
      .subscribe(
        (data: Statut[]) => {
          this.statuts = data;
          console.log('statut : ');
          console.log(data);

        });

        let i: number;
        for (i = 0; i < this.applications.length; i++) {

          this.report.lineAppli[i].etat.id = this.scenarios[i].id;
}

  // for (const scenario of this.scenarios ) {
  //           const reportScenario: Reportscenario = {id: null, reportlineappli: null, scenario: scenario, statut: null};
  //           this.report.push(scenario);
  //         }

        // let i: number;
        //   const scenarioNetCredit: Scenario = null;
        //   for (i = 0; i < this.scenarios.length; i++) {
        //     scenarioNetCredit = this.scenarios[i];
        //               console.log(scenarioNetCredit.name);
        //   }
        //   if (this.scenarios.application.id =  1) { }

          // let i: number;
          // const reportscenario: Reportscenario = {id: null, scenario: null, reportlineappli: null, statut: null};
          // for (i = 0; i < this.scenarios.length; i++) {
          //             reportscenario.scenario = this.scenarios[i];
          //             console.log(reportscenario.scenario.application);
          // }

  }


// methode qui calcul le "label de l'application" en fonction du "label du scenario" choisi par l'utilisateur
calculateLabelAppli(id: number) {
console.log(id);
  //   if (id = '1') {
  //  // Ouvert
  //    this.rapportapplis. = '1';
  //    }
  //  // Service indisponible, l incident est en cours d analyse par les équipes
  //    if (this.reportscenarios.statut.id = '2') {
  //    this.reportapplis.etat.id = '2';
  //    }
  //    // Accès à l application limité, diagnostic en cours
  //    if (this.statuts. = '3') {
  //    this.reportapplis.etat.id = '3';
  //    }

  }

}
