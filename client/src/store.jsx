import { configureStore } from "@reduxjs/toolkit";
// stores
import { booksSlice } from "./stores/Books";
import { categoryBooksSlice } from "./stores/CategoryBooks";
import { searchBookSlice } from "./stores/SearchBooks";

export default configureStore({
  reducer: {
    books: booksSlice.reducer,
    categoryBooks: categoryBooksSlice.reducer,
    searchBooks: searchBookSlice.reducer
  },
});
