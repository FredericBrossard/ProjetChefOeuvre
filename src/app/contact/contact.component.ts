import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Form } from 'src/app/models/form';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup; // represente tout le formulaire


  // Declaration d'un objet de type Form (form: Form) et création de l'objet en ajoutant ( = { email: '', message: '', objet: '' } )
  form: Form = { email: '', message: '', objet: '' };

  constructor(private fb: FormBuilder, private contactService: ContactService) { }

  ngOnInit() {
    this.createForm();
  }

  // Méthode de creation du formulaire et Création d un objet
  createForm() {
    this.contactForm = this.fb.group({
      email: '',
      objet: '',
      message: ''
    });

  }

  // Méthode d'envoi du formulaire via la back de l'application
  sendMessageBack() {
    console.log('méthode sendMessageBack:', this.contactForm.value.message);
    this.form.email = this.contactForm.value['email'];
    this.form.message = this.contactForm.value['message'];
    this.form.objet = this.contactForm.value['objet'];
    this.contactService.sendForm(this.form).subscribe((formSendStatus: Boolean) => {
      console.log('formSendStatus:', formSendStatus);
      if (formSendStatus) {
        alert('Email envoyé');
        console.log('formSendStatus:', formSendStatus);
      }
    }, (error) => {
      alert('Email no envoyé suite à une erreur technique');
      console.log('error:', error);
    }
    );


  }

  // Méthode d'envoi du formulaire via la front de l'application
  sendMessageFront() {
    console.log('méthode sendMessage:', this.contactForm.value.message);
    // const email = require('./path/to/emailjs/email');
    // const server = email.server.connect({
    //   user: 'username',
    //   password: 'password',
    //   host: 'smtp-mail.outlook.com',
    //   tls: { ciphers: 'SSLv3' }
    // });

    const message = {
      text: 'Test envoi mail depuis le Front',
      from: 'frederic.brossard.pf1@gmail.com>',
      // to: 'wavefred@hotmail.com, another <another@your-email.com>',
      to: 'wavefred@hotmail.com',
      // cc: 'else <else@your-email.com>',
      subject: 'testing emailjs',
      //  attachment:
      //  [
      //     {data:"<html>i <i>hope</i> this works!</html>", alternative:true},
      //     {path:"path/to/file.zip", type:"application/zip", name:"renamed.zip"}
      //  ]
    };

    // send the mes sage and get a callback with an error or details of the message that was sent
    // tslint:disable-next-line:no-shadowed-variable
    // server.send(message, function (err, message) { console.log(err || message); });
  }

}
