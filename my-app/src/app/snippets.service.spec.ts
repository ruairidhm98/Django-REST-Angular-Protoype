import { TestBed } from '@angular/core/testing';

import { SnippetsService } from './snippets.service';

describe('SnippetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SnippetsService = TestBed.get(SnippetsService);
    expect(service).toBeTruthy();
  });
});
