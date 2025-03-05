import React, { useState, useEffect } from "react";
// components
import HeaderUp from "../../components/Header/HeaderUp";
import Footer from "../../components/Footer";
// formik
import { Formik, Form, Field } from "formik";
// router
import { useParams, useNavigate } from "react-router-dom";
// toast
import { toast } from "react-toastify";
// redux
import { useSelector } from "react-redux";
import { selectUser } from "../../stores/Auth.jsx";
// api
import { addBook } from "../../api/booksApi.jsx";

function ProductAdd() {
  const [book, setBook] = useState({});
  const { slug } = useParams();

  const navigate = useNavigate();
  const reduxUser = useSelector(selectUser);

  // admin control
  useEffect(() => {
    if (reduxUser && reduxUser.role !== "admin") {
      navigate("/");
    }
  }, [reduxUser]);

  const handleSubmit = async (values) => {
    try {
      await addBook(values);
      toast.success("Product added successfully");
      navigate("/admin/products");
    } catch (error) {
      toast.error("Product not added");
    }
  };

  return (
    <div>
      <HeaderUp />
      <div className="max-w-7xl mx-auto py-8 font-sans min-h-[90vh]">
        <h1 className="text-2xl font-bold text-center w-full block border-b border-[#E6E6E6] pb-3 mb-6">
          Product Add
        </h1>
        <Formik
          initialValues={{
            name: "",
            author: "",
            price: "",
            category: "",
            sku: "",
            shortDescription: "",
            longDescription: "",
            image: "",
          }}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
          enableReinitialize
        >
          {({ isSubmitting }) => (
            <Form className="mt-4">
              <div className="flex gap-4 w-full items-center justify-center flex-wrap">
                <Field
                  type="text"
                  name="image"
                  placeholder="Image URL"
                  className="border border-[#E6E6E6] outline-none px-4 py-2 w-full"
                />
                <Field
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="border border-[#E6E6E6] outline-none px-4 py-2 w-1/2"
                />
                <Field
                  type="text"
                  name="author"
                  placeholder="Author"
                  className="border border-[#E6E6E6] outline-none px-4 py-2 flex-1"
                />
                <Field
                  type="text"
                  name="price"
                  placeholder="Price"
                  className="border border-[#E6E6E6] outline-none px-4 py-2 w-1/2"
                />
                <Field
                  type="text"
                  name="category"
                  placeholder="Category"
                  className="border border-[#E6E6E6] outline-none px-4 py-2 flex-1"
                />
                <Field
                  type="text"
                  name="sku"
                  placeholder="SKU"
                  className="border border-[#E6E6E6] outline-none px-4 py-2 flex-1"
                />
                <Field
                  type="text"
                  name="shortDescription"
                  placeholder="Short Description"
                  className="border border-[#E6E6E6] outline-none px-4 py-2 w-full"
                />
                <Field
                  type="text"
                  name="longDescription"
                  placeholder="Long Description"
                  className="border border-[#E6E6E6] outline-none px-4 py-2 w-full"
                  rows="4"
                  as="textarea"
                />
                <div className="w-full flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-green-500 text-white px-8 py-2 cursor-pointer rounded border border-transparent hover:bg-white hover:text-green-500 hover:border-green-500 transition-colors"
                  >
                    Save
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <Footer />
    </div>
  );
}

export default ProductAdd;
