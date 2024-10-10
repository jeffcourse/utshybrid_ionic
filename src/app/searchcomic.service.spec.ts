import { TestBed } from '@angular/core/testing';

import { SearchcomicService } from './searchcomic.service';

describe('SearchcomicService', () => {
  let service: SearchcomicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchcomicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
