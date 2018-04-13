import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import {CourseComponent} from './course/course.component';

const routes: Routes = [
  {path: 'courses', component: CourseListComponent},
  {path: 'courses/:id', component: CourseComponent},
  {path: '', redirectTo: 'courses', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
