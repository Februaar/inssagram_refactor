import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import fileReducer from "./fileSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    file: fileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
