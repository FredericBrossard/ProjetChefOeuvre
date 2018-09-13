import { Statut } from './statut';
import { Scenario } from './scenario';

export interface Line {
    id: number;
    date: Date;
    scenario: string;
    statut: string;
    // scenario: Scenario;
    // statut: Statut;
    comment: string;
}
