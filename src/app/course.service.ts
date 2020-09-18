import { Injectable } from '@angular/core';
import {Course} from './courses/course';
import {courses} from './courses/course_data';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor() { }

  getCourses(): Course[]{
    return courses;
  }
}
