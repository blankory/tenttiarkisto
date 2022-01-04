import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseListComponent } from './course-list.component';
import { MaterialModule } from '../material/material.module';
import { CourseService } from '../service/course.service';
import { Observable } from 'rxjs';
import { Course } from '../model/course.model';
import { Router } from '@angular/router';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let mockCourseService = {
    getCourses: () => new Observable()
  };
  let mockRouter: Router;
  let kurssit: Course[] = [];
  
  beforeEach(async(() => {
    kurssit.push({code: "x", name: "y", exam: null});
    TestBed.configureTestingModule({
      imports: [MaterialModule, BrowserAnimationsModule],
      declarations: [ CourseListComponent ],
      providers: [{provide: CourseService, useValue: mockCourseService},
        {provide: Router, useValue: mockRouter}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    mockRouter = jasmine.createSpyObj('router', ['navigate']);
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
