import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { CourseService } from '../service/course.service';
import { Course } from '../model/course.model';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Exam} from '../model/exam.model';
import {ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, AfterViewInit {
  course: Course | null;

  // Table data
  columns: string[];
  dataSource: MatTableDataSource<Exam>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute
  ) {
    this.course = null;
    this.columns = ['date', 'type', 'file'];
    this.dataSource = new MatTableDataSource<Exam>();
  }

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('id');
    const obs = this.getCourseByCode(id);
    console.log('HEY COUrse obs IS:', obs, id);
    console.log('obs.subscripe:', obs.subscribe);
    obs.subscribe(
      res => {
        console.log('HEY COUER RES:', res);
        this.course = res;
        if (this.course != null) {
          this.dataSource.data = this.course.exam;
        } else {
          this.dataSource.data = [];
        }
      }
    );
  }

  getCourseByCode(code: string): Observable<Course | null> {
    return this.courseService.getCourses().pipe(map(courses => {
      const foundCourse = courses['data'].find((course) => {
        return course.code === code;
      });
      this.courseService.selectCourse(foundCourse);
      return foundCourse;
    }));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
