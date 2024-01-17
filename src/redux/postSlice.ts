import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostContentData } from "@/types/PostTypes";

interface PostState {
  posts: PostContentData[];
}

const initialState: PostState = {
  posts: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<PostContentData[]>) => {
      state.posts = action.payload;
    },
    setDeletedPost: (state, action: PayloadAction<number>) => {
      state.posts = state.posts.filter(
        (post) => post.postId !== action.payload
      );
    },
  },
});

export const { setPosts, setDeletedPost } = postSlice.actions;
export default postSlice.reducer;
