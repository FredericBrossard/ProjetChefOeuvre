import { Application } from 'src/app/models/application';
import { Statut } from 'src/app/models/statut';
import { Reportscenario } from 'src/app/models/reportscenario';

export interface Scenario {
    id: number;
    name: string;
    application: Application;
    listReportLineScenario: Reportscenario[];
    liststatut: Statut[];

}
