export interface Post {
  id: number;
  title: string;
  description: string;
}

export interface PostState {
  posts: Post[];
  selectedPostId?: number;
}

export const initialState: PostState = {
  posts: [
    { id: 1, title: 'First Post', description: 'This is the first post' },
    { id: 2, title: 'Second Post', description: 'This is the second post' }
  ],
  selectedPostId: undefined
};
