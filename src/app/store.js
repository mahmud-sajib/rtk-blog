import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../features/blogs/blogsSlice";
import tagsReducer from "../features/tags/tagsSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    tags: tagsReducer,
  },
});
