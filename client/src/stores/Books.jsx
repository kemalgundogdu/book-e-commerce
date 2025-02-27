import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// api
import { getBooks } from "../api/booksApi";

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const data = await getBooks();
  return data;
});
 
export const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    status: "idle",
    error: null,
  },
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setBooks } = booksSlice.actions;
export const selectBooks = (state) => state.books.books;