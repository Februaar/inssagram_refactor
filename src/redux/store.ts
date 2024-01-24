import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import profileReducer from "./profileSlice";
import imageReducer from "./imageSlice";
import postReducer from "./postSlice";
import commentReducer from "./commentSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    image: imageReducer,
    post: postReducer,
    comment: commentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
