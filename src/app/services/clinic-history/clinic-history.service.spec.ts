import { TestBed, inject } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

import { ClinicHistoryService } from './clinic-history.service';

describe('ClinicHistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClinicHistoryService]
    });
  });

  it('should be created', inject([ClinicHistoryService], (service: ClinicHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
