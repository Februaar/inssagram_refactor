import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import imageReducer from "./imageSlice";
import postReducer from "./postSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    image: imageReducer,
    post: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
