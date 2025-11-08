import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Post, PostState } from './post.state';

export const selectPostState = createFeatureSelector<PostState>('posts');

export const selectAllPosts = createSelector(
  selectPostState,
  (state: PostState) => state.posts
);

// Uso encadenado del selector selectAllPosts {posts: Post[]}
export const selectPostCount = createSelector(
  selectAllPosts,
  (posts: Post[]) => posts.length
);

export const selectPostTitles = createSelector(
  selectAllPosts,
  (posts: Post[]) => posts.map(post => post.title)
);

/* export const selectPostById = createSelector(
  selectAllPosts,
  (posts: Post[], props: { id: number }) => posts.find(post => post.id === props.id)
); */
export const selectPostById = (id: number) => createSelector(
  selectAllPosts,
  (posts: Post[]) => posts.find(post => post.id === id)
);


