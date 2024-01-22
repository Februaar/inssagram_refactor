import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommentData } from "@/types/PostTypes";

interface CommentState {
  comments: CommentData[];
}

const initialState: CommentState = {
  comments: [],
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    setComments: (state, action: PayloadAction<CommentData[]>) => {
      state.comments = action.payload;
    },
    addComment: (state, action: PayloadAction<CommentData>) => {
      state.comments.push(action.payload);
    },
    removeComment: (state, action: PayloadAction<number>) => {
      state.comments = state.comments.filter(
        (comment) => comment.commentId !== action.payload
      );
    },
  },
});

export const { setComments, addComment, removeComment } = commentSlice.actions;
export default commentSlice.reducer;
