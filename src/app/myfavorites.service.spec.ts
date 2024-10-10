import { TestBed } from '@angular/core/testing';

import { MyfavoritesService } from './myfavorites.service';

describe('MyfavoritesService', () => {
  let service: MyfavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyfavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
