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
import NotFound from "./pages/404";
// admin pages
import AdminHome from "./pages/Admin";
import Products from "./pages/Admin/Products";
import ProductEdit from "./pages/Admin/ProductEdit";
import Users from "./pages/Admin/Users";

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
          {/* admin pages */}
          <Route path="/admin/" element={<AdminHome />} />
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/productedit/:slug" element={<ProductEdit />} />
          <Route path="/admin/users" element={<Users />} />
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
