import React, { useState, useEffect } from "react";
// components
import Header from "../components/Header";
import Product from "../components/Products/Product";
import Footer from "../components/Footer";
import Loading from "../components/Loading/index.jsx";
// router
import { useParams } from "react-router";
// redux
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSearchBooks,
  selectSearchBooks,
  setSearchBooks,
} from "../stores/SearchBooks.jsx";

function Search() {
  const { query } = useParams();

  // Clear search results when component mounts
  useEffect(() => {
    setSearchBooks([]);
  }, []);

  // Redux
  const dispatch = useDispatch();
  const books = useSelector(selectSearchBooks);
  const status = useSelector((state) => state.searchBooks.status);
  const error = useSelector((state) => state.searchBooks.error);

  useEffect(() => {
    dispatch(fetchSearchBooks(query));
  }, [dispatch, query]);

  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto py-8 font-sans min-h-[80vh]">
        <h1 className="font-semibold text-3xl mb-6 capitalize">
          Search Books ({query})
        </h1>
        {/* loading and books */}
        {status === "loading" ? (
          <Loading />
        ) : (
          <>
            {books.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {books.map((book) => (
                  <Product key={book._id} book={book} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600">
                  No books found for "{query}"
                </p>
                <p className="text-gray-500 mt-2">
                  Try a different search term
                </p>
              </div>
            )}
          </>
        )}

        {/* errors */}
        {status === "failed" && (
          <div className="text-center py-16 text-red-500">
            <p>Error: {error}</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Search;
