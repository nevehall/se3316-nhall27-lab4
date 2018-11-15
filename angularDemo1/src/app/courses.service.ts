import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

var courseArr = ["Course1", "Course2", "Course3"];

export class CoursesService{
  getCourses() : string[]{
    return courseArr;//["Course1", "Course2", "Course3"];
  }
  
  saveCourse(courseSave : string){
    console.log(courseSave);
    courseArr.push(courseSave);
  }
  constructor() { }
}
