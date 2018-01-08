import { TestBed, inject } from '@angular/core/testing';

import { ComponenttypeService } from './componenttype.service';

describe('ComponenttypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponenttypeService]
    });
  });

  it('should be created', inject([ComponenttypeService], (service: ComponenttypeService) => {
    expect(service).toBeTruthy();
  }));
});
