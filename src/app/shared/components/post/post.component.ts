import { BlogService } from './../../services/blog.service';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/types/post.model';
import { posts } from 'src/app/mocks/posts.mocks';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  posts = posts;

  id: string;
  post$ = new BehaviorSubject<any[]>(null);

  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    const post = this.blogService.getPost(this.id);
    this.post$.next([post]);
  }
}
