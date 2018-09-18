
import { Scenario } from 'src/app/models/scenario';
import { Reportscenario } from 'src/app/models/reportscenario';

export class Statut {
    id: number;
    label: string;
    scenario: Scenario;
    listReportLineScenario: Reportscenario[];
}
