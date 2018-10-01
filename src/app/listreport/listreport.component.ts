import { Report } from './../models/report';
import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-listreport',
  templateUrl: './listreport.component.html',
  styleUrls: ['./listreport.component.css']
})
export class ListreportComponent implements OnInit {

  reports: Report[];
  report: Report;
  exist: Boolean = false;
  dateJourSysteme = new Date();
  rapportJourTrouve: Boolean = false;

  constructor(private reportService: ReportService) { }

  ngOnInit() {

    console.log('listreport.ts');
    this.reportService.getListReport()
      .subscribe(
        (data: Report[]) => {
          this.reports = data;
          console.log(data);

        });

  }

  // Le rapport est créé si il n'existe pas déjà
  createReport() {
    // Log pour debug
    // console.log('methode createReport dans listreport.ts');
    // console.log('dateJour:' + this.dateJourSysteme);

    // 1 Section de Détermination s'il n'existe pas dèjà un rapport

      // 1.1 mise au format de la date systeme : 2018-08-12
    let dateDuJour = this.dateJourSysteme.getDate() + '-';           // jour
    dateDuJour = dateDuJour + this.dateJourSysteme.getMonth() + '-'; // mois
    dateDuJour = dateDuJour + this.dateJourSysteme.getFullYear();    // année
    // console.log('dateDuJour:' + dateDuJour);
      // 1.2 Boucle de recherche si date de rapport existe
    for (let i = 0; i < this.reports.length; i++) {
      console.log(this.reports[i].date);
      // 1.3  mise au format de la date du raport : 2018-08-12. Passage pour une variable date d'objet date
      // pour convertir "this.reports[i].date" qui est de type string. Ainsi, on pourra utiliser les méthodes getDate,....
      const date = new Date(this.reports[i].date);

      let dateDuRappor = date.getDate() + '-';              // jour
      dateDuRappor = dateDuRappor + date.getMonth() + '-';  // mois
      dateDuRappor = dateDuRappor + date.getFullYear();     // année
      console.log('dateDuRapport:' + dateDuRappor);
      // 1.5 recherche si date de rapport === la date dysteme si oui alors le rapport du jour existe.
      if (dateDuRappor === dateDuJour) {
        this.rapportJourTrouve = true;
        // console.log('rapport du jour trouve');
      }
    }
    // Si la date du jour === la date d'un rapport, c'est que le rapport est déjà crée
    // SINON alors on Appel du service pour soumettre la requete HTTP au controller du serveur back

    if (this.rapportJourTrouve) {
      alert('Le rappport du jour est déjà créé');
    } else {
      this.reportService.createtReport();
    }
  }

  envoiEmail(id: number) {
    console.log('methode "envoiEmail" dans listreport.ts avec l id de rappot:', id);
    this.reportService.sendEmail(id).subscribe((mailSendStatus: Boolean) => {

      if (mailSendStatus) {
        alert('Email envoyé');
      }
    }, (error) => {
      alert('Email non envoyé suite à une erreur technique');
    }
    );

  }

}
