import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import { MaterialModule } from '../material/material.module';
import { CourseService } from '../service/course.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;
  let mockCourseService = {
    getCourseByCode: () => new Observable()
  };
  let mockSnapshot = {
    paramMap : {
      has: (name: string) => true, 
      get: (name: string) => 'x',
      getAll: (name: string) => [],
    }
  }
  let route = {
    snapshot: mockSnapshot
  };


  beforeEach(async(() => {
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
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
