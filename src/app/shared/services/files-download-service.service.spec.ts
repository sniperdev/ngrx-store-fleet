import { TestBed } from '@angular/core/testing';

import { FilesDownloadServiceService } from './files-download-service.service';

describe('FilesDownloadServiceService', () => {
  let service: FilesDownloadServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilesDownloadServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
