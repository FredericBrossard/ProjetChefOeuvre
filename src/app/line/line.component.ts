import { Scenario } from 'src/app/models/scenario';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Reportscenario } from 'src/app/models/reportscenario';
import { LineService } from 'src/app/services/line.service';
import { ScenarioService } from 'src/app/services/scenario.service';
import { StatutService } from 'src/app/services/statut.service';
import { Statut } from 'src/app/models/statut';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  // // Creation d'instance utilisable dans le template HTML
  reportFormLine: FormGroup;
  // formattedMessage: String;
  // date courante
  // date = new Date();

  statutScenario = ['Ouvert', 'Indisponible'];
  nameScenario = ['Page Accueil', 'Offre alternative', 'Utilistation de carte'];
  reportscenario: Reportscenario;
  scenarios: Scenario[];
  statuts: Statut[];

  constructor(private fb: FormBuilder,
    private lineService: LineService,
    private scenarioService: ScenarioService,
    private statutService: StatutService) { }

  ngOnInit() {


    // creation du formulaire scenario de type "reactiveform"
    this.createFormLine();
    // this.onChanges();

    this.scenarioService.getAllScenario()
      .subscribe(
        (data: Scenario[]) => {
          this.scenarios = data;
          console.log(data);

        });

    this.statutService.getAllStatut()
      .subscribe(
        (data: Statut[]) => {
          this.statuts = data;
          console.log(data);
          // this.reportscenarios.statut = this.statuts;
        });
  }

  // tslint:disable-next-line:max-line-length
  // méthode de creation du formulaire scenario de type "reactiveform". Ce formgroup "reportFormScenario" est créé à partir de la méthode "group" depuis FormBuilder "fb"
  createFormLine() {
    this.reportFormLine = this.fb.group({
      scenario: 'Scénario',
      statut: 'Ouverte',
      comment: 'R.A.S',
      date: new Date()
    });
  }

  forwardLine(reportFormLine) {
    console.log('line.component.ts , le secenario choisi est :' + this.reportFormLine.value['scenario']);

    // this.reportscenario.scenario.name = this.reportFormLine.value['scenario'];
    // this.reportscenario.scenario.statut = this.reportFormLine.value['statut'];
    // console.log('ici1:' +  this.reportscenario.scenario.statut );
    // this.lineService.createReport(this.reportscenario);F

    this.lineService.createReport(reportFormLine.value).subscribe(val => {
      alert(val);
    });

  }
  // onChanges(): void {
  //   this.reportFormLine.valueChanges.subscribe(val => {
  //     this.formattedMessage =
  //     `Application = ${val.scenario} , status= ${val.status}, comment= ${val.comment}, date= ${val.date}`;
  //     alert(this.formattedMessage);
  //   });
  // }
}
