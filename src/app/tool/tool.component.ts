import { Application } from './../models/application';
import { ApplicationService } from './../services/application.service';
import { Component, OnInit } from '@angular/core';
import { ReportRow } from 'src/app/report-row';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent implements OnInit {

  //  Déclaration d'un objet "reportRow" typescript, décrivant une ligne du suivi avec toutes ses propriétées initialisées
  reportsRow: ReportRow[] = [
    {
    nameApplication: null,
    etat: null,
    status: null,
    scenario: null,
    comment: null,
    }
  ];

  applications: Application[];

  constructor(public applicationService: ApplicationService) { }
 // la particularité ngOnInit c'est que le code s'y éxécute quand l'objet est initialisé
  ngOnInit() {
      console.log('nGoNiNIT' + this.applications);
    this.applicationService.getAllApplication()
      .subscribe((appli: Application[]) => {
        this.applications = appli; });

  }

  addReportRow() {
    console.log('methode addRow');
    const newRow = {
      nameApplication: 'Net Credit',
      etat: null,
      status: null,
      scenario: null,
      comment: 'essai comment',
    };
    console.log(newRow);
    this.reportsRow.push(newRow);
  }

  // tslint:disable-next-line:member-ordering
  // public row: any = [{}];

}

