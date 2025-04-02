import { TestBed } from '@angular/core/testing';

import { BlogsvcService } from './blogsvc.service';

describe('BlogsvcService', () => {
  let service: BlogsvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogsvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
