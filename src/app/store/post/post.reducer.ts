import { createReducer, on }  from "@ngrx/store";
import { initialState } from "./post.state";
import { findAllPosts, findPostById } from "./posts.actions";

export const postReducer = createReducer(
  initialState,
  on(findAllPosts, (state) => ({
    ...state,
    posts: [...state.posts]
  })),
  on(findPostById, (state, { id }) => ({
    ...state,
    posts: [...state.posts.filter(post => post.id === id)]
  }))
);
