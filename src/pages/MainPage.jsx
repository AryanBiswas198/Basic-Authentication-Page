import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../services/operations/authAPI";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  // Fetch user data from the auth slice
    const {user} = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout(navigate));
      };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">
        Welcome, {user?.firstName} {user?.lastName}!
      </h1>
      <p className="text-lg">
        This is your main page after successful login.
      </p>
      {/* Add more content or components as needed */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default MainPage;
