const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { getBlog } = require("./blogApi");

// initial state
const initialState = {
  blog: {},
  isLoading: false,
  isError: false,
  error: "",
};

// thunk function
export const fetchBlog = createAsyncThunk("blog/fetchBlog", async (id) => {
  const blog = await getBlog(id);
  return blog;
});

// slice
const blogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlog.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blog = action.payload;
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.blog = {};
        state.isError = true;
        state.error = action.error?.message; // won't crash even if the `message` property is missing in `error` object
      });
  },
});

export default blogSlice.reducer;
