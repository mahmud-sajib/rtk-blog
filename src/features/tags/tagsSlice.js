const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { getTags } = require("./tagsApi");

// initial state
const initialState = {
  tags: [],
  isLoading: false,
  isError: false,
  error: "",
};

// thunk function
export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  const tags = await getTags();
  return tags;
});

// slice
const tagsSlice = createSlice({
  name: "tags",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.isLoading = false;
        state.tags = [];
        state.isError = true;
        state.error = action.error?.message; // won't crash even if the `message` property is missing in `error` object
      });
  },
});

export default tagsSlice.reducer;
