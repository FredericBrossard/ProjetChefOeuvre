import { TestBed, inject } from '@angular/core/testing';

import { ReportappliService } from './reportappli.service';

describe('ReportappliService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportappliService]
    });
  });

  it('should be created', inject([ReportappliService], (service: ReportappliService) => {
    expect(service).toBeTruthy();
  }));
});
