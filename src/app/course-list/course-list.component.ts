import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {Course} from '../model/course.model';
import {CourseService} from '../service/course.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, AfterViewInit {
  private courses: Course[] | null;

  // Table data
  columns: string[];
  dataSource: MatTableDataSource<Course>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private courseService: CourseService,
    public router: Router
  ) {
    this.courses = null;

    this.columns = ['code', 'name'];
    this.dataSource = new MatTableDataSource<Course>(this.courses);
  }

  ngOnInit() {
    console.log('INITING');
    console.log('mockCourseService', this.courseService);
    this.courseService.courses.subscribe(
      res => {
        this.courses = res;
        this.dataSource.data = this.courses;
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onSelectRow(course: Course): void {
    this.courseService.selectCourse(course);
    this.router.navigate(['./courses/' + course.code]);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
