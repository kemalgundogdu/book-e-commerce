import React, { useEffect, useState } from "react";
// components
import Header from "../components/Header";
import Footer from "../components/Footer";
// slugify
import slugify from "react-slugify";
// router
import { Link } from "react-router";
// icons
import { IoClose } from "react-icons/io5";

function Home() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCart(JSON.parse(cart));
    }
  }, []);

  // total price
  const calculateTotalPrice = () => {
    const total = cart.reduce((sum, item) => {
      const price = Number(String(item.price).replace(",", ".")) || 0;
      const quantity = Number(String(item.quantity).replace(",", ".")) || 0;
      return sum + price * quantity;
    }, 0);
    return total.toFixed(2);
  };

  // price formatted
  const formattedPrice = (price) => {
    // price'ı sayıya çevir, geçersizse 0 kullan
    const numericPrice = Number(price) || 0;
    return numericPrice.toLocaleString("tr-TR", {
      minimumFractionDigits: 2, // En az 2 ondalık basamak
      maximumFractionDigits: 2, // En fazla 2 ondalık basamak
    });
  };

  // total price
  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
  }, [cart]);

  // remove from cart
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto py-8 font-sans min-h-[80vh]">
        <div className="flex items-start gap-10">
          <div className="w-full md:w-4/6 p-7 rounded-2xl border border-[#E6E6E6]">
            <h2 className="font-semibold text-xl mb-4">Cart Items</h2>
            {cart.length === 0 && (
              <p className="text-[#6B7280] text-sm -mt-4">
                There are no products in your cart <br />
                <Link to="/" className="text-[#FF4C29]">
                  Continue Shopping
                </Link>
              </p>
            )}
            {/* cart list */}
            {cart.map((cartItem) => (
              <div
                key={cartItem._id}
                className="flex justify-between items-center py-3"
              >
                <div className="flex items-center">
                  <button
                    onClick={() => removeFromCart(cartItem._id)}
                    className="text-[#2b2727] cursor-pointer p-3"
                  >
                    <IoClose size={16} />
                  </button>
                  <Link
                    to={"/book/" + slugify(cartItem.slug)}
                    className="flex items-center gap-4"
                  >
                    <img
                      src={cartItem.image}
                      alt="product"
                      className="w-20 object-contain"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{cartItem.name}</h3>
                      <p className="text-[#6B7280]">
                        <span className="opacity-60">by</span> {cartItem.author}
                      </p>
                    </div>
                  </Link>
                </div>
                <div>
                  <p className="font-semibold text-lg">
                    ${cartItem.price}{" "}
                    <span className="opacity-50 font-light text-sm">
                      x {cartItem.quantity}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          {cart.length !== 0 && (
            <div className="w-full md:w-2/6 p-7 rounded-2xl border border-[#E6E6E6]">
              <div className="flex justify-between items-center py-3 pr-6 pl-10">
                <p className="font-semibold text-lg">Total</p>
                <p className="font-semibold text-lg">
                  ${formattedPrice(totalPrice)}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
