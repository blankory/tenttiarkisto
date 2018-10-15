import { Injectable } from '@angular/core';


import { Course } from '../model/course.model';
import {HttpClient} from '@angular/common/http';

import { BehaviorSubject, Observable, of } from 'rxjs';

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
