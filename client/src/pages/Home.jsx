import React from "react";
// components
import Header from "../components/Header";
import Slider from "../components/Header/Slider";
import Product from "../components/Products/Product";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <div className="max-w-7xl mx-auto py-8 font-sans">
        <h1 className="font-semibold text-3xl mb-6">Latest Books</h1>
        <div className="grid grid-cols-5 gap-8">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
