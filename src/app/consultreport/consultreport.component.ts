import { Component, OnInit } from '@angular/core';
import { ReportappliService } from 'src/app/services/reportappli.service';

@Component({
  selector: 'app-consultreport',
  templateUrl: './consultreport.component.html',
  styleUrls: ['./consultreport.component.css']
})
export class ConsultreportComponent implements OnInit {

  constructor(private reportappliService: ReportappliService) { }

  ngOnInit() {
  }

  consultReportAppli(id: number) {
    console.log('methode consultReportAppli avec id : ' + id);
    this.reportappliService.getConsulReportById(id);
  }
}
