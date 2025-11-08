
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllPosts, selectPostById, selectPostCount } from '../store/post/posts.seletors';
import { Observable } from 'rxjs';
import { Post } from '../store/post/post.state';
import { CommonModule } from '@angular/common';
import { findPostById } from '../store/post/posts.actions';

@Component({
  selector: 'app-posts',
  imports: [CommonModule],
  templateUrl: './posts.html',
  styleUrl: './posts.scss',
})
export class Posts {
  posts$: Observable<Post[]>;
  selectedPost$!: Observable<Post | undefined>;
  postsCount$!: Observable<number>;

  constructor(private store: Store) {
    this.posts$ = this.store.select(selectAllPosts);
  }

  findPostById(id: number) {
    this.store.dispatch(findPostById(id));
    this.selectedPost$ = this.store.select(selectPostById(id));
  }

}
