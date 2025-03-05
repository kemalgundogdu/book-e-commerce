import React, { useEffect, useState } from "react";
// components
import HeaderUp from "../../components/Header/HeaderUp";
import Footer from "../../components/Footer";
// redux
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../stores/Auth.jsx";
import { selectBooks, fetchBooks } from "../../stores/Books.jsx";
// router
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Admin/Navbar.jsx";
// icons
import { RxPencil2 } from "react-icons/rx";
import { AiFillDelete } from "react-icons/ai";
// router
import { Link } from "react-router-dom";
// api
import { deleteBook } from "../../api/booksApi";

function AdminHome() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reduxUser = useSelector(selectUser);
  const reduxBooks = useSelector(selectBooks);

  const [user, setUser] = useState({});
  const [books, setBooks] = useState([]);

  // admin control
  useEffect(() => {
    if (reduxUser && reduxUser.role !== "admin") {
      navigate("/");
    }
    setUser(reduxUser);
  }, [reduxUser]);

  useEffect(() => {
    dispatch(fetchBooks());

    setBooks(reduxBooks);
  }, [dispatch, reduxBooks]);

  const handleDelete = async (id) => {
    const response = await deleteBook(id);
    if (response) {
      dispatch(fetchBooks());
    }
  };
  return (
    <div>
      <HeaderUp />
      <div className="max-w-7xl mx-auto py-8 font-sans min-h-[90vh]">
        {/* navbar */}
        <Navbar user={user} />
        {/* content */}
        <div>
          <div className="flex items-center justify-between w-full mb-10 mt-5">
            <div>
              <h1 className="text-2xl font-bold">Products</h1>
              <p>
                On this page you can edit, delete products and share a new one.
              </p>
            </div>
            <Link
              to={"/admin/newProduct/"}
              className="bg-green-400 text-sm border border-transparent text-white px-4 py-2 rounded inline-block hover:bg-transparent hover:border-green-400 hover:text-green-400 transition-colors"
            >
              New Product
            </Link>
          </div>

          {/* books table */}
          <table className="w-full mt-4 text-xs">
            <thead>
              <tr>
                <th className="border border-[#E6E6E6] px-4 py-2">Name</th>
                <th className="border border-[#E6E6E6] px-4 py-2">Author</th>
                <th className="border border-[#E6E6E6] px-4 py-2">Price</th>
                <th className="border border-[#E6E6E6] px-4 py-2">Category</th>
                <th className="border border-[#E6E6E6] px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book._id}>
                  <td className="border border-[#E6E6E6] px-4 py-2 text-[15px] font-semibold">
                    {book.name}
                  </td>
                  <td className="border border-[#E6E6E6] px-4 py-2">
                    {book.author}
                  </td>
                  <td className="border border-[#E6E6E6] px-4 py-2">
                    {book.price}
                  </td>
                  <td className="border border-[#E6E6E6] px-4 py-2 capitalize font-semibold">
                    {book.category}
                  </td>
                  <td className="border border-[#E6E6E6] py-2 text-lg flex items-center justify-center gap-2">
                    <Link
                      to={`/admin/productedit/${book.slug}`}
                      className="p-2 rounded-full cursor-pointer hover:bg-gray-200 transition-colors"
                    >
                      <RxPencil2 />
                    </Link>
                    <button
                      onClick={() => handleDelete(book._id)}
                      className="p-2 rounded-full cursor-pointer hover:bg-gray-200 transition-colors"
                    >
                      <AiFillDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminHome;
