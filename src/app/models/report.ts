import { Reportappli } from './reportappli';
import { Report } from './report';
export interface Report {
    id: number;
    date: Date;
    lineAppli: Reportappli;
}
