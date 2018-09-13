import { Scenario } from './../models/scenario';
import { Statut } from 'src/app/models/statut';
import { Reportscenario } from './../models/reportscenario';
import { Reportappli } from './../models/reportappli';
import { State } from './../models/state';
import { StateService } from './../services/state.service';
import { StatutService } from './../services/statut.service';
import { ScenarioService } from './../services/scenario.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})

export class ToolComponent implements OnInit {


  states: State[];
  statuts: Statut[];
  scenarios: Scenario[];
  reportscenarios: Reportscenario[];
  rapportapplis: Reportappli[];

  // scenarioService est de type "ScenarioService"
  constructor(
    public scenarioService: ScenarioService,
    private statutService: StatutService,
    private stateService: StateService
    ) { }

  // la particularité ngOnInit c'est que le code s'y éxécute quand l'objet est initialisé. C'est une fonction.
  ngOnInit() {

    // Appel de la méthode "getAllScenario" qui appel la methode GET avec en paramétre l'URL
    // puis ensuite la méthode "subscribe" permet en retour d'appel de "getAllScenario"  on s'incrit à "data"
    // qui contient le retour du serveur appellé via l'URL
    // et on passe le resutltat "data" a "scenarios" que l'on peut utiliser ainsi dans le template tool.component.html
    this.scenarioService.getAllScenario()
      .subscribe(
        (data: Scenario[]) => {
          this.scenarios = data;
          console.log(data);
          // for (const scenario of data) {
          //   const reportScenario: Reportscenario = {id: null, reportlineappli: null, scenario: scenario, statut: null};
          //   this.reportscenarios.push(reportScenario);
          // }
          // creation de l'objet reportscenario et initialisation de celui ci en bouclant sur l'objet scenario
          let i: number;
          const reportscenario: Reportscenario = {id: null, scenario: null, reportlineappli: null, statut: null};
          for (i = 0; i < this.scenarios.length; i++) {
                      reportscenario.scenario = this.scenarios[i];
                      console.log(reportscenario.scenario.application);
          }

        });

    this.statutService.getAllStatut()
      .subscribe(
        (data: Statut[]) => {
          this.statuts = data;
          console.log(data);
          // this.reportscenarios.statut = this.statuts;
        });

        this.stateService.getAllState()
        .subscribe(
          (data: State[]) => {
            this.states = data;
            console.log(data);
          });


  }

  updateRapportLabelScenario(i: number) {
    // this.reportscenarios.statut[i] = this.statuts.label[i];
  }
   // methode qui calcul le "label de l'application" en fonction du "label du scenario" choisi par l'utilisateur
   calculateLabelAppli() {

    //   if (this.scenarios.statut.id = '1') {
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

    // getSum(i: number): number {
    //   let sum = 0;
    //   for (i = 0; i < this.foodsRow.length; i++) {
    //     sum += this.foodsRow[i].cg;
    //   }
    //   sum = Number.parseFloat(Number(sum).toFixed(2));
    //   return sum;
    // }

}

// loadreportscenario() {
 // let i: number;
//   for (i = 0; i < this.scenarios.length; i++) {
//     this.reportscenarios[i] = this.scenarios[i];
//   }

}

