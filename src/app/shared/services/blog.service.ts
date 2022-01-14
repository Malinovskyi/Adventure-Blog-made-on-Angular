import { Post } from './../models/types/post.model';
import { posts } from './../../mocks/posts.mocks';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  posts = posts;

  posts$ = new BehaviorSubject<any[]>(posts);

  addMember(post: Post): void {
    this.posts$.next([
      ...this.posts$.getValue(),
      { ...post, id: this.getId() },
    ]);
  }
  getId(): string {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  editMember(id: string, post: any) {
    const index = this.posts$.getValue().findIndex((user) => user.id === id);
    const members = [...this.posts$.getValue()];
    members[index] = { ...members[index], ...post };
    this.posts$.next(members);
  }

  getPost(id: string) {
    return this.posts$.getValue().find((post) => post.id === id);
  }

  removePost(id: string) {
    const deletedPosts = this.posts$
      .getValue()
      .filter((item) => item.id !== id);
    this.posts$.next(deletedPosts);
  }

  constructor() {}
}
