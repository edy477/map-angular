import { TestBed } from '@angular/core/testing';
import { HttpErrorResponse } from '@angular/common/http';
import {DataServiceService} from "./data-service.service";

describe('DataServiceService', () => {
  let service: DataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});



