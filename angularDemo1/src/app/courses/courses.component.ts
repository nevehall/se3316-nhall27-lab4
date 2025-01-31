import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { AutoGrowDirective } from '../auto-grow.directive';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CoursesService]
})
export class CoursesComponent implements OnInit {
  title = "Courses";
  courses;
  
  constructor(coursesService: CoursesService) { 
    this.courses = coursesService.getCourses();
  }
  
  CoursesService courseSer = new CoursesService;
  
  saveCourse(){
   this.courseSer.saveCourse(document.getElementById("courseInput").value);
  }

  
  ngOnInit() {
  }
  
}
