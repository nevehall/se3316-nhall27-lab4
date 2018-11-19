import { Component, OnInit } from '@angular/core';
import { ShowPostService } from './show-post.service';
import { Post } from '../models/post.model';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  providers: [ ShowPostService ]
})
export class ShowPostComponent implements OnInit {

  public posts : any [];

  constructor(private showPostService: ShowPostService, private commonService: CommonService) {
  	
  }

  ngOnInit(){
  	this.getAllPost();

    this.commonService.postAdded_Observable.subscribe(res => {
      this.getAllPost();
    });
  }



  getAllPost(){
  	this.showPostService.getAllPost().subscribe(result => {
  		console.log('result is ', result);
  		this.posts = result['data'];
  	});
  }

}