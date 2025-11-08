import { createAction } from "@ngrx/store";

export const findAllPosts = createAction("[Posts] Find All Posts");
export const postTitles = createAction("[Posts] Post Titles");
export const postCount = createAction("[Posts] Post Count");
export const findPostById = createAction("[Posts] Find Post By Id", (id: number) => ({ id }));
