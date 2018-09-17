
import { Scenario } from 'src/app/models/scenario';
import { Reportscenario } from 'src/app/models/reportscenario';

export interface Statut {
    id: number;
    label: string;
    scenario: Scenario;
    listReportLineScenario: Reportscenario[];
}
