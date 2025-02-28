import { Route, BrowserRouter as Router, Routes } from "react-router";

import Home from "./pages/Home";
import Category from "./pages/Category";
import BookDetail from "./pages/BookDetail";

function App() {
  return (
    <div className="font-mono">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:name" element={<BookDetail />} />
          <Route path="/category/:category" element={<Category />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
