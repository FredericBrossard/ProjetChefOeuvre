import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup; // represente tt le formulaire
  // Création d un objet
  // contactForm = { nom: '', prenom: '', commentaire: '', email: '' };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }
// Méthode de creation du formulaire
  createForm() {
    this.contactForm = this.fb.group ({
      email: '',
      objet: '',
      message: ''

    });

  }
}
