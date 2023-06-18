const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { getBlogs } = require("./blogsApi");

// initial state
const initialState = {
  blogs: [],
  isLoading: false,
  isError: false,
  error: "",
};

// thunk function
export const fetchBlogs = createAsyncThunk(
  "blogs/fetchBlogs",
  async ({ tags, search }) => {
    const blogs = await getBlogs({ tags, search });
    return blogs;
  }
);

// slice
const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.blogs = [];
        state.isError = true;
        state.error = action.error?.message; // won't crash even if the `message` property is missing in `error` object
      });
  },
});

export default blogsSlice.reducer;
