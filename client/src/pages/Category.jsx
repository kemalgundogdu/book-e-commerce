import React, { use, useEffect } from "react";
// components
import Header from "../components/Header";
import Product from "../components/Products/Product";
import Footer from "../components/Footer";
import Loading from "../components/Loading/index.jsx";
// redux
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategoryBooks,
  selectCategoryBooks,
  setCategoryBooks,
} from "../stores/CategoryBooks.jsx";
// router
import { useParams } from "react-router";

function Home() {
  const { category } = useParams();
  useEffect(() => {
    setCategoryBooks([]);
  }, []);

  const dispatch = useDispatch();
  const books = useSelector(selectCategoryBooks);
  const status = useSelector((state) => state.categoryBooks.status);
  const error = useSelector((state) => state.categoryBooks.error);
  useEffect(() => {
    dispatch(fetchCategoryBooks(category));
  }, [dispatch, category]);

  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto py-8 font-sans">
        <h1 className="font-semibold text-3xl mb-6 capitalize">
          {category} Books
        </h1>
        {/* loading and books */}
        {status === "loading" ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-5 gap-8">
            {books.map((book) => (
              <Product key={book._id} book={book} />
            ))}
          </div>
        )}
        {/* errors */}
        {status === "failed" && <p>{error}</p>}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
