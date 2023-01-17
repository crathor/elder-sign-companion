import { configureStore } from "@reduxjs/toolkit";
import investigatorReducer from "./investigators";
import { listenerMiddleware } from "./investigatorListener";

export const store = configureStore({
    reducer: {
        investigators: investigatorReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
