import { TestBed } from '@angular/core/testing';

import { JobExperiencesService } from './job-experiences.service';

describe('JobExperiencesService', () => {
  let service: JobExperiencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobExperiencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
