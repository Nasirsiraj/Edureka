import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../courses/course';

@Component({
  selector: 'app-c-details',
  templateUrl: './c-details.component.html',
  styleUrls: ['./c-details.component.css']
})
export class CDetailsComponent implements OnInit {
  constructor() { }
  @Input() course: Course;
  ngOnInit(): void {
  }

}
