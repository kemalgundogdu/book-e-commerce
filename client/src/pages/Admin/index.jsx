import React, { useEffect, useState } from "react";
// components
import HeaderUp from "../../components/Header/HeaderUp";
import Footer from "../../components/Footer";
// redux
import { useSelector } from "react-redux";
import { selectUser } from "../../stores/Auth.jsx";
// router
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Admin/Navbar.jsx";

function AdminHome() {
  const navigate = useNavigate();
  const reduxUser = useSelector(selectUser);

  const [user, setUser] = useState({});

  // admin control
  useEffect(() => {
    if (reduxUser && reduxUser.role !== "admin") {
      navigate("/");
    }
    setUser(reduxUser);
  }, [reduxUser]);
  return (
    <div>
      <HeaderUp />
      <div className="max-w-7xl mx-auto py-8 font-sans min-h-[90vh]">
        {/* navbar */}
        <Navbar />
        {/* content */}
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p>Statistics</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminHome;
