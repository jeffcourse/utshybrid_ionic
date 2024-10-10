import { TestBed } from '@angular/core/testing';

import { ReadcomicService } from './readcomic.service';

describe('ReadcomicService', () => {
  let service: ReadcomicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadcomicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
