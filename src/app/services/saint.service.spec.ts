import { TestBed } from '@angular/core/testing';

import { SaintService } from './saint.service';

describe('SaintService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaintService = TestBed.get(SaintService);
    expect(service).toBeTruthy();
  });
});
