import { Component, OnInit } from '@angular/core';
import { Application } from './../models/application';
import { StatutService } from 'src/app/services/statut.service';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public applicationService: ApplicationService) { }


  applications: Application[];


  // la particularité ngOnInit c'est que le code s'y éxécute quand l'objet est initialisé. C'est une fonction.
  ngOnInit() {
    console.log('Methode ngOnInit de home.component');
    this.applicationService.getAllApplication()
      .subscribe(
        (appli: Application[]) => {
        this.applications = appli;
        console.log(appli);
      });

  }


  }
