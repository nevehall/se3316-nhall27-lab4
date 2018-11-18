import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable()
export class ShowPostService {
 
    constructor(private http: HttpClient){
 
    }
 
}