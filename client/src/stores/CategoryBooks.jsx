import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// api
import { getCategoryBooks } from "../api/booksApi";

export const fetchCategoryBooks = createAsyncThunk(
  "categoryBooks/fetchCategoryBooks",
  async (category) => {
    const data = await getCategoryBooks(category);
    return data;
  }
);
 
export const categoryBooksSlice = createSlice({
  name: "categoryBooks",
  initialState: {
    categoryBooks: [],
    status: "idle",
    error: null,
  },
  reducers: {
    setCategoryBooks: (state, action) => {
      state.categoryBooks = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategoryBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categoryBooks = action.payload;
      })
      .addCase(fetchCategoryBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setCategoryBooks } = categoryBooksSlice.actions;
export const selectCategoryBooks = (state) => state.categoryBooks.categoryBooks;