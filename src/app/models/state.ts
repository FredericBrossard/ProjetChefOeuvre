import { Reportappli } from 'src/app/models/reportappli';

export interface State {
    id: number;
    label: string;
    // histoReportEtat: Historeport;
    // scenario: Scenario;
    reportLineAppli: Reportappli[];
}
