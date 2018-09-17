import { Scenario } from 'src/app/models/scenario';
import { Reportappli } from 'src/app/models/reportappli';

export interface Application {
    id: number;
    name: string;
    listScenario: Scenario[];
    listReportLineAppli: Reportappli[];
}
