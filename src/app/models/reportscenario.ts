import { Reportappli } from 'src/app/models/reportappli';
import { Statut } from 'src/app/models/statut';
import { Scenario } from 'src/app/models/scenario';

export interface Reportscenario {
    id: number;
    reportlineappli: Reportappli;
    scenario: Scenario;
    statut: Statut;
}
