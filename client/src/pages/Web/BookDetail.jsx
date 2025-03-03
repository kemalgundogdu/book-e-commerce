import React, { useEffect, useState } from "react";
// components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// icons
import { BsCart2 } from "react-icons/bs";
// router
import { Link, useParams } from "react-router";
// api
import { getBook } from "../../api/booksApi";
// redux
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategoryBooks,
  selectCategoryBooks,
} from "../../stores/CategoryBooks.jsx";
import Product from "../../components/Products/Product.jsx";

function Home() {
  const [quantity, setQuantity] = useState(1);
  const [book, setBook] = useState({});
  // params
  const { name } = useParams();

  useEffect(() => {
    getBook(name)
      .then((res) => {
        setBook(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [name]);

  // redux
  // explore more books
  // category books
  const dispatch = useDispatch();
  const books = useSelector(selectCategoryBooks);
  useEffect(() => {
    dispatch(fetchCategoryBooks(book.category));
  }, [dispatch, book.category]);

  // add to cart
  const handleCart = (book, quantity) => {
    // get cart from local storage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    // check if book already exists in cart
    const bookIndex = cart.findIndex((item) => item._id === book._id);
    if (bookIndex !== -1) {
      // update quantity
      cart[bookIndex].quantity += quantity;
    } else {
      // add book to cart
      cart.push({ ...book, quantity });
    }
    // save cart to local storage
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto py-8 font-sans">
        {/* book detail page */}
        <div className="flex gap-5 w-full items-strech justify-between">
          <div className="p-7 w-full md:w-2/6 rounded-2xl border border-[#E6E6E6]">
            <img
              src={book.image}
              alt="book"
              className="w-full h-full max-h-[400px] object-contain"
            />
          </div>
          <div className="p-7 w-full md:w-4/6 rounded-2xl border border-[#E6E6E6]">
            <div className="border-b border-[#E6E6E6] pb-5">
              <h1 className="font-semibold text-2xl">{book.name}</h1>
              <div className="flex items-center gap-5">
                <p className="text-sm text-[#666666]">
                  <span className="opacity-60">by</span> {book.author}
                </p>
                <p className="text-sm text-[#666666]">
                  <span className="opacity-60">SKU:</span> {book.sku}
                </p>
              </div>
            </div>
            <div className="py-5">
              {/* price */}
              <p className="text-3xl font-semibold text-[#FF4C29] mb-4">
                ${book.price}
              </p>
              <p className="text-sm text-[#666666]">{book.shortDescription}</p>
            </div>
            <div className="flex items-center gap-5">
              {/* quantity */}
              <div className="flex items-start">
                <div className="flex justify-start flex-col gap-1">
                  <p className="text-sm text-[#666666] opacity-60">Quantity</p>
                  <div className="flex items-center gap-5 border border-[#E6E6E6] rounded-3xl">
                    <button
                      className="cursor-pointer px-5 py-3 hover:bg-[#FF4C29] hover:text-white rounded-l-3xl"
                      onClick={() => setQuantity(quantity - 1)}
                    >
                      -
                    </button>
                    <p className="text-sm w-6 text-center font-bold">
                      {quantity}
                    </p>
                    <button
                      className="cursor-pointer px-5 py-3 hover:bg-[#FF4C29] hover:text-white rounded-r-3xl"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              {/* add to cart */}
              <button
                onClick={() => handleCart(book, quantity)}
                className="bg-[#FF4C29] text-white py-3 px-5 rounded-3xl mt-5 flex items-center gap-3 cursor-pointer border border-transparent hover:bg-[#ff2a00] hover:border-[#333333] transition-colors"
              >
                <BsCart2 size="20" />
                Add to Cart
              </button>
            </div>
            <p className="text-sm mt-5">
              <span className="opacity-60 text-[#666666]">Category: </span>{" "}
              <Link
                to={"/category/" + book.category}
                className="text-[#333333] font-semibold capitalize"
              >
                {book.category}
              </Link>
            </p>
          </div>
        </div>
        {/* explore */}
        <div className="mt-10">
          <h1 className="text-2xl font-semibold">Explore More</h1>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-5">
            {/* explore items */}
            {books.map((explore) => (
              <Product key={explore._id} book={explore} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
