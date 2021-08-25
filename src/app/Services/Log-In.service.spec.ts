/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LogInService } from './Log-In.service';

describe('Service: LogIn', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogInService]
    });
  });

  it('should ...', inject([LogInService], (service: LogInService) => {
    expect(service).toBeTruthy();
  }));
});
