import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../features/blog/blogSlice";
import blogsReducer from "../features/blogs/blogsSlice";
import relatedBlogsReducer from "../features/relatedBlogs/relatedBlogsSlice";
import tagsReducer from "../features/tags/tagsSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    tags: tagsReducer,
    blog: blogReducer,
    relatedBlogs: relatedBlogsReducer,
  },
});
