import { Component, OnInit } from '@angular/core';
import { Application } from './../models/application';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // photo en milieu de page d'accueil
  photoAccueil = 'assets/CreditoBNPPF.jpg';
  // Déclaration/injection du service dans le constructeur
  constructor(public applicationService: ApplicationService) { }
  // déclaration d'un objet "applications" de type liste d'Application
  applications: Application[];

  // la particularité ngOnInit c'est que le code s'y éxécute quand l'objet est initialisé.
  ngOnInit() {
    // console.log('Methode ngOnInit de home.component');
    // Récupération de la liste des Applications
    this.applicationService.getAllApplication()
      .subscribe(
        (appli: Application[]) => {
          this.applications = appli;
          // console.log(appli);
        });

  }
}
