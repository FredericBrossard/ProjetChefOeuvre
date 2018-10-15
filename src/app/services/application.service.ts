import { Application } from './../models/application';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// @Injectable()

export class ApplicationService {

  API_URL = 'http://localhost:8090/suiviappli';

  constructor(private http: HttpClient) {}
// Méthode qui récupére la liste des applications. Construction de la requête get + URL
  getAllApplication(): Observable<Application[]> {
    console.log('methode getAllApplication du service');
    return this.http.get<Application[]>(this.API_URL);
  }

}
