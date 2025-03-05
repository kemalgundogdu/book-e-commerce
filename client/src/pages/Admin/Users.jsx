import React, { use, useEffect, useState } from "react";
// components
import HeaderUp from "../../components/Header/HeaderUp";
import Footer from "../../components/Footer";
// redux
import { useSelector, useDispatch } from "react-redux";
import { selectUser, selectUsers, allUsersAsync } from "../../stores/Auth.jsx";
// router
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Admin/Navbar.jsx";

function Users() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reduxUser = useSelector(selectUser);
  const reduxUsers = useSelector(selectUsers);

  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);

  // admin control
  useEffect(() => {
    if (reduxUser && reduxUser.role !== "admin") {
      navigate("/");
    }
    setUser(reduxUser);
  }, [reduxUser]);

  useEffect(() => {
    dispatch(allUsersAsync());
  }, [dispatch]);

  useEffect(() => {
    setUsers(reduxUsers);
  }, [reduxUsers]);

  return (
    <div>
      <HeaderUp />
      <div className="max-w-7xl mx-auto py-8 font-sans min-h-[90vh]">
        {/* navbar */}
        <Navbar user={user} />
        {/* content */}
        <div>
          <h1 className="text-2xl font-bold">Users</h1>
          <p>User list</p>
          <div className="mt-4">
            <table className="w-full mt-4 text-xs">
              <thead>
                <tr>
                  <th className="border border-[#E6E6E6] px-4 py-2">Name</th>
                  <th className="border border-[#E6E6E6] px-4 py-2">Email</th>
                  <th className="border border-[#E6E6E6] px-4 py-2">role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td className="border border-[#E6E6E6] px-4 py-2 text-[15px] font-semibold">
                      {user.name}
                    </td>
                    <td className="border border-[#E6E6E6] px-4 py-2">
                      {user.email}
                    </td>
                    <td className="border border-[#E6E6E6] px-4 py-2">
                      {user.role === "admin" ? (<span className="text-red-500 font-semibold">Admin</span>) : (<span className="text-green-500">User</span>)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Users;
