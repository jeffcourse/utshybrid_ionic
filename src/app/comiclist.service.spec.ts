import { TestBed } from '@angular/core/testing';

import { ComiclistService } from './comiclist.service';

describe('ComiclistService', () => {
  let service: ComiclistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComiclistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
