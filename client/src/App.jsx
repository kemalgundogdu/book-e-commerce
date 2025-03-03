import React, { useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router";

// pages
import Home from "./pages/Web/Home";
import Category from "./pages/Web/Category";
import BookDetail from "./pages/Web/BookDetail";
import Search from "./pages/Web/Search";
import Cart from "./pages/Web/Cart";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

// scroll to top
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="font-mono">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:name" element={<BookDetail />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/s/:query" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
