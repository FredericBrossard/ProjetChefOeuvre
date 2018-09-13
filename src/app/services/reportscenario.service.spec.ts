import { TestBed, inject } from '@angular/core/testing';

import { ReportscenarioService } from './reportscenario.service';

describe('ReportscenarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportscenarioService]
    });
  });

  it('should be created', inject([ReportscenarioService], (service: ReportscenarioService) => {
    expect(service).toBeTruthy();
  }));
});
