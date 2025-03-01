import React, { useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router";

// pages
import Home from "./pages/Home";
import Category from "./pages/Category";
import BookDetail from "./pages/BookDetail";
import Search from "./pages/Search";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
