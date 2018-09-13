import { TestBed, inject } from '@angular/core/testing';

import { HistoreportService } from './historeport.service';

describe('HistoreportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HistoreportService]
    });
  });

  it('should be created', inject([HistoreportService], (service: HistoreportService) => {
    expect(service).toBeTruthy();
  }));
});
