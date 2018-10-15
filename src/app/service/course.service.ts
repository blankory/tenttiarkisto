import { Injectable } from '@angular/core';


import { Course } from '../model/course.model';
import {HttpClient} from '@angular/common/http';

import { BehaviorSubject, Observable, of } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class CourseService {
  private _selectedCourse: BehaviorSubject<Course | null>;
  private courseData: Course[];

  constructor(
    private http: HttpClient,
  ) {
    this._selectedCourse = new BehaviorSubject<Course|null>(null);
    this.loadInitialData();
  }

  getCourses(): Observable<{data: Course[]}>  {
    if(this.courseData) return of({data:this.courseData});
    else return this.loadInitialData();
  }

  selectCourse(course: Course | null) {
    this._selectedCourse.next(course);
  }

  getCourseByCode(code: string): Observable<Course | null> {
    return this.getCourses().pipe(map(courses => {
      const foundCourse = courses['data'].find((course) => {
        return course.code === code;
      });
      this.selectCourse(foundCourse);
      return foundCourse;
    }));
  }

  loadInitialData(): Observable<{data: Course[]}>  {
    const obs: Observable<{data: Course[]}> = this.http.get<{data: Course[]}>('assets/courses.json');
    obs.subscribe(
      res => {
        this._selectedCourse.next(null);
        this.courseData = res.data;
      },
      err => {
        console.log('Error retwieving courses');
      }
    );
    return obs;
  }
}
