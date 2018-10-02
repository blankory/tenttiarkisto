import { TestBed, inject } from '@angular/core/testing';

import { CourseService } from './course.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('CourseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseService, HttpClient, HttpHandler ]
    });
  });

  it('should be created', inject([CourseService], (service: CourseService) => {
    expect(service).toBeTruthy();
  }));
});
