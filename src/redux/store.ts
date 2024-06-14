import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/authSlice"
import themeReducer from "./slices/themeSlice"
import menuReducer from "./slices/menuSlices"

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    menu: menuReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootStore = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch