import { Statut } from './../models/statut';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatutService {

  API_URL = 'http://localhost:8090/suivistatut';

  constructor(private htttp: HttpClient) { }

  getAllStatut(): Observable<Statut[]> {
    return this.htttp.get<Statut[]>(this.API_URL);
  }

}
