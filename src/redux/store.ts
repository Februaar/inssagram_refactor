import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import imageReducer from "./imageSlice";
import postReducer from "./postSlice";
import commentReducer from "./commentSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    image: imageReducer,
    post: postReducer,
    comment: commentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
