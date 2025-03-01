import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// api
import { searchBooks } from "../api/booksApi";

export const fetchSearchBooks = createAsyncThunk(
  "searchBooks/fetchSearchBooks",
  async (query) => {
    const data = await searchBooks(query);
    return data;
  }
);

export const searchBookSlice = createSlice({
  name: "searchBooks",
  initialState: {
    searchBooks: [],
    status: "idle",
    error: null,
  },
  reducers: {
    setSearchBooks: (state, action) => {
      state.searchBooks = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSearchBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.searchBooks = action.payload;
      })
      .addCase(fetchSearchBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setSearchBooks } = searchBookSlice.actions;
export const selectSearchBooks = (state) => state.searchBooks.searchBooks;
