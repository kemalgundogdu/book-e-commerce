import React, { useState } from "react";
// components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// router
import { Link, useNavigate } from "react-router-dom";
// formik
import { Formik, Form, Field } from "formik";
// api
import { login, getCurrentUser } from "../../api/userApi";

function Login() {
  const [error, setError] = useState(null);
  const Navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      setSubmitting(true);
      await login(values);
      resetForm();
      setError(null);
      Navigate("/");
    } catch (error) {
      setError(error.response?.data?.message);
      console.log("error", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="w-full min-h-screen flex items-start pt-30 justify-center">
        <div className="w-96 p-5 bg-white shadow-lg rounded-2xl">
          <div className="-mt-10">
            <h1 className="text-2xl font-bold text-gray-800">Login</h1>
            <p className="text-sm text-gray-400 mt-2">Login to your account</p>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              {({ isSbumitting }) => (
                <Form className="mt-5">
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="off"
                      className="w-full px-4 py-3 mt-2 text-sm text-gray-700 bg-gray-100 rounded outline-none border border-transparent focus:border-[#fc5c50]"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Password
                    </label>
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      className="w-full px-4 py-3 mt-2 text-sm text-gray-700 bg-gray-100 rounded outline-none border border-transparent focus:border-[#fc5c50]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-3 text-md text-[#333333] font-semibold bg-transparent border border-[#fc5c50] rounded cursor-pointer hover:bg-[#fc5c50] hover:text-white transition duration-200"
                  >
                    Login
                  </button>
                </Form>
              )}
            </Formik>
            <p className="text-sm text-gray-400 mt-2">
              Don't have an account?{" "}
              <Link to="/register" className="text-[#fc5c50]">
                Register
              </Link>
            </p>
            {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
