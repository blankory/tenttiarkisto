import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import { MaterialModule } from '../material/material.module';
import { CourseService } from '../service/course.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;
  let mockCourseService: CourseService;
  let route: ActivatedRoute;

  let mockjotain = {
    paramMap : {
      has: (name: string) => true, 
      get: (name: string) => 'x',
      getAll: (name: string) => [],
    }
  }

  beforeEach(async(() => {
    route = jasmine.createSpyObj('route', ['snapshot']).and.returnValue(mockjotain);;
    // jasmine.createSpy('snapshot').and.returnValue(mockjotain);
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ CourseComponent ],
      providers: [ {provide: CourseService, useValue: mockCourseService} 
        ,{provide: ActivatedRoute, useValue: route}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    mockCourseService = jasmine.createSpyObj('courseService', ['getCourseByCode']);
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
