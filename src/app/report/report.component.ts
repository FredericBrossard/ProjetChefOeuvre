import { Reportscenario } from './../models/reportscenario';
import { Statut } from 'src/app/models/statut';
import { Reportappli } from 'src/app/models/reportappli';
import { Component, OnInit } from '@angular/core';
import { ReportscenarioService } from 'src/app/services/reportscenario.service';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent implements OnInit {

  reportscenarios: Reportscenario[];
  reportapplis: Reportappli[];

  // reportService est de type "HistoreportService"
  constructor(private reportscenarioService: ReportscenarioService) { }

  ngOnInit() {

    this.reportscenarioService.getReport()
      .subscribe(
        (data: Reportscenario[]) => {
          this.reportscenarios = data;
          console.log(data);
        });
  }



  }

