import { AuthService } from './../../../../shared/services/auth.service';
import { BlogService } from './../../../../shared/services/blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  searchStr = '';

  constructor(
    public blogService: BlogService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {}

  removePost(id: string) {
    this.blogService.removePost(id);
  }
}
