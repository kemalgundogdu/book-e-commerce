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
import Profile from "./pages/Web/Profile";

// components
// login control
import ProtectedRoute from "./components/ProtectedRoute";

// user thunk & redux
import { fetchUser } from "./stores/Auth";
import { useDispatch } from "react-redux";

// toast
import { ToastContainer } from "react-toastify";

// scroll to top
function ScrollToTop() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

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
          <Route
            path="/login"
            element={
              <ProtectedRoute restrictAuthenticated>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <ProtectedRoute restrictAuthenticated>
                <Register />
              </ProtectedRoute>
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
