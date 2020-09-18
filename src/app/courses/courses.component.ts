import { Component, OnInit } from '@angular/core';
import {Course} from './course';
import {courses} from './course_data';
import {CourseService} from '../course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [courses]
})
export class CoursesComponent implements OnInit {
  constructor(
    private _courseService: CourseService
  ) {
  }

  public courses = this._courseService.getCourses();
  public selectedCourse: Course;

  onSelect(course: Course): void{
    this.selectedCourse = course;
  }

  ngOnInit(): void {
  }
}
