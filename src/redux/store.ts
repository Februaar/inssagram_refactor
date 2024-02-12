import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./userSlice";
import profileReducer from "./profileSlice";
import imageReducer from "./imageSlice";
import postReducer from "./postSlice";
import commentReducer from "./commentSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const reducers = combineReducers({
  user: userReducer,
  profile: profileReducer,
  image: imageReducer,
  post: postReducer,
  comment: commentReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // ignore these action types
        ignoredActions: ["persist/PERSIST"],
        // ignore these field paths in all actions
        ignoredActionPaths: ["payload.register", "payload.rehydrate"],
      },
    }),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
