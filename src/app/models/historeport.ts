import { Application } from 'src/app/models/application';
import { State } from 'src/app/models/state';
import { Statut } from 'src/app/models/statut';

export interface Historeport {
    id: number;
    etat: State;
    statut: Statut;
    // application: Application;
    comment: string;
    createDate: Date;
}
