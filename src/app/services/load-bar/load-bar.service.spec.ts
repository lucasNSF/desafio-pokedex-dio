/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoadBarService } from './load-bar.service';

describe('Service: Loadbar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadBarService],
    });
  });

  it('should ...', inject([LoadBarService], (service: LoadBarService) => {
    expect(service).toBeTruthy();
  }));
});
