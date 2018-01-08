import { TestBed, inject } from '@angular/core/testing';

import { BreadcrumpService } from './breadcrump.service';

describe('BreadcrumpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BreadcrumpService]
    });
  });

  it('should be created', inject([BreadcrumpService], (service: BreadcrumpService) => {
    expect(service).toBeTruthy();
  }));
});
