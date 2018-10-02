import { Injectable } from '@angular/core';


import { Course } from '../model/course.model';
import {HttpClient} from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class CourseService {
  private _courses: BehaviorSubject<Course[]>;
  private _selectedCourse: BehaviorSubject<Course | null>;

  constructor(
    private http: HttpClient,
  ) {
    this._courses = new BehaviorSubject<Course[]>([]);
    this._selectedCourse = new BehaviorSubject<Course|null>(null);
    this.loadInitialData();
  }

  get courses(): Observable<Course[]> {
    return this._courses.asObservable();
  }

  get selectedCourse(): Observable<Course | null> {
    return this._selectedCourse.asObservable();
  }

  selectCourse(course: Course | null) {
    this._selectedCourse.next(course);
  }

  getCourseByCode(code: string): Observable<Course | null> {
    const foundCourse = this._courses.getValue().find((course) => {
      return course.code === code;
    });
    this.selectCourse(foundCourse);
    return this._selectedCourse.asObservable();
  }

  loadInitialData(): void {
    const obs: Observable<{data: Course[]}> = this.http.get<{data: Course[]}>('assets/courses.json');
    obs.subscribe(
      res => {
        this._courses.next(res.data);
        this._selectedCourse.next(null);
      },
      err => {
        console.log('Error retwieving courses');
      }
    );
  }
}
