import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService{
  getCourses() : string[]{
    return ["Course1", "Course2", "Course3"];
  }
  
  saveCourse() : string[]{
    
  }
  constructor() { }
}
