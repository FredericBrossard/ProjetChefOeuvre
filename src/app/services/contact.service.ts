import { Form } from './../models/form';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // Adresse URL qui permet d’aller chercher l’information "report"
  API_URL_REPORT = 'http://localhost:8090/suivireport';

  constructor(private http: HttpClient) { }

  sendForm(form: Form): Observable<Boolean> {
    console.log('méthode sendForm dans sevice l objet est :', form.objet);
    return this.http.post<Boolean>(this.API_URL_REPORT + '/sendform', form);
  }
}
