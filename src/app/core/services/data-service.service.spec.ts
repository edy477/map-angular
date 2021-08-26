import { TestBed } from '@angular/core/testing';
import { HttpErrorResponse } from '@angular/common/http';
import {DataService} from "./data-service.service";

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});



