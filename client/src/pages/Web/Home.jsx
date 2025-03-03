import React, { useEffect } from "react";
// components
import Header from "../../components/Header";
import Slider from "../../components/Header/Slider";
import Product from "../../components/Products/Product";
import Footer from "../../components/Footer";
// redux
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks, selectBooks } from "../../stores/Books.jsx";

function Home() {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Slider />
      <div className="max-w-7xl mx-auto py-8 font-sans">
        <h1 className="font-semibold text-3xl mb-6">Latest Books</h1>
        <div className="grid grid-cols-5 gap-8">
          {/* books */}
          {books.map((book) => (
            <Product key={book._id} book={book} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
