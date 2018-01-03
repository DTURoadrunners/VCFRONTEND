import { TestBed, inject } from '@angular/core/testing';

import { CnAuthService } from './cn-auth.service';

describe('CnAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CnAuthService]
    });
  });

  it('should be created', inject([CnAuthService], (service: CnAuthService) => {
    expect(service).toBeTruthy();
  }));
});
