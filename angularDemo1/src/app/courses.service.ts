import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

var courseArr = [];

export class CoursesService{
  getCourses() : string[]{
    return courseArr;
  }
  
  saveCourse(courseSave : string){
    console.log(courseSave);
    courseArr.push(courseSave);
  }
  constructor() { }
}
