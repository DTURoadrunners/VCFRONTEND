import { TestBed, inject } from '@angular/core/testing';

import { ComponentService } from './component.service';

describe('ComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentService]
    });
  });

  it('should be created', inject([ComponentService], (service: ComponentService) => {
    expect(service).toBeTruthy();
  }));
});
