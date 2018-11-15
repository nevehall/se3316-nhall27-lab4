import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  providers: [AuthorsService]
})
export class AuthorsComponent implements OnInit {
  title = "Authors";
  authors;

  constructor(authorsService: AuthorsService) { 
    this.authors = authorsService.getAuthors();
  }
  ngOnInit() {
  }

}
