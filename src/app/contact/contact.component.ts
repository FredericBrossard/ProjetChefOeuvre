import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // Création d un objet
  contactForm = { nom: '', prenom: '', commentaire: '', email: '' };
  constructor() { }

  ngOnInit() {
  }

}
