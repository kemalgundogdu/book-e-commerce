import React, { useEffect, useState } from "react";
import HeaderUp from "../../components/Header/HeaderUp";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router";
// redux
import { useDispatch, useSelector } from "react-redux";
import { logoutAsync, selectUser } from "../../stores/Auth.jsx";

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  
  // get user from redux
  const userRedux = useSelector(selectUser);
  useEffect(() => {
    if (userRedux) {
      setUser(userRedux);
    }
  }, [userRedux]);

  // logout
  const handleLogout = () => {
    dispatch(logoutAsync());
    navigate("/login");
  };
  return (
    <div>
      <HeaderUp />
      <div className="max-w-7xl mx-auto py-8 font-sans min-h-[90vh]">
        <div>
          <h1 className="text-2xl font-bold">Profil Sayfası</h1>

          <div className="mt-4">
            <p>
              <span className="font-semibold">Adınız:</span> {user.name}
            </p>
            <p>
              <span className="font-semibold">E-posta:</span> {user.email}
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors cursor-pointer"
          >
            Çıkış Yap
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
