
import { Historeport } from 'src/app/models/historeport';
import { Scenario } from 'src/app/models/scenario';

export interface State {
    id: number;
    label: string;
    // histoReportEtat: Historeport;
    scenario: Scenario;
}
