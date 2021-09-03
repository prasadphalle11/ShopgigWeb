/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CategoryInventoryService } from './CategoryInventory.service';

describe('Service: CategoryInventory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryInventoryService]
    });
  });

  it('should ...', inject([CategoryInventoryService], (service: CategoryInventoryService) => {
    expect(service).toBeTruthy();
  }));
});
