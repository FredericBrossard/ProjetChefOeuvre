import { Statut } from './../models/statut';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Scenario } from 'src/app/models/scenario';

@Injectable({
  providedIn: 'root'
})
export class StatutService {

  API_URL = 'http://localhost:8090/suivistatut';

  constructor(private htttp: HttpClient) { }

  getAllStatut(): Observable<Statut[]> {
    return this.htttp.get<Statut[]>(this.API_URL);
  }


  getStatutByScenario(id: number): Observable<Statut[]> {
    return this.htttp.get<Statut[]>(this.API_URL + '/' + id);
    // // const status = new Array<Statut>();
    // // const statut = new Statut();
    // // statut.id = id;
    // // statut.label = 'test';
    // // status.push(statut);
    // // console.log('appel a getStatutByScenario id=' + id, status);
    // // return of(status);


    // return this.htttp.get<Statut[]>(this.API_URL + '/' + id).subscribe(retour => {
    //   console.log('appel a getStatutByScenario id=' + id, retour);
    //   return of(retour);
    // });

    // return of(null);

  }

}
