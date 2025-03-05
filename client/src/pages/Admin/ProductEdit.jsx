import React, { useState, useEffect } from "react";
// components
import HeaderUp from "../../components/Header/HeaderUp";
import Footer from "../../components/Footer";
// formik
import { Formik, Form, Field } from "formik";
// router
import { useParams } from "react-router-dom";
// api
import { getBook, updateBook } from "../../api/booksApi";
// toast
import { toast } from "react-toastify";

function ProductEdit() {
  const [book, setBook] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      const fetchedBook = await getBook(slug);
      setBook(fetchedBook || {}); // Fetched data yoksa boş obje
    };
    fetchBook();
  }, [slug]);

  const handleUpdateBook = async (values) => {
    const updatedBook = {
      ...book,
      ...values,
    };
    await updateBook(updatedBook);
    setBook(updatedBook);
    toast.success("Book updated successfully");
  };

  return (
    <div>
      <HeaderUp />
      <div className="max-w-7xl mx-auto py-8 font-sans min-h-[90vh]">
        <h1 className="text-2xl font-bold text-center w-full block border-b border-[#E6E6E6] pb-3 mb-6">Edit Book: <span className="text-sm opacity-60 font-light">{book.name}</span></h1>
        <Formik
          initialValues={{
            name: book.name || "",
            author: book.author || "",
            price: book.price || "",
            category: book.category || "",
            sku: book.sku || "",
            shortDescription: book.shortDescription || "",
            longDescription: book.longDescription || "",
            image: book.image || "",
          }}
          onSubmit={(values) => {
            handleUpdateBook(values);
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

export default ProductEdit;
