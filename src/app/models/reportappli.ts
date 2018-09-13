import { Reportscenario } from './reportscenario';
import { Report } from 'src/app/models/report';
import { Application } from 'src/app/models/application';
import { State } from 'src/app/models/state';

export interface Reportappli {
    id: number;
    report: Report;
    application: Application;
    etat: State;
    comment: string;
    reportlinescenario: Reportscenario;

}
