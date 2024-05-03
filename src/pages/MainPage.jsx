import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../services/operations/authAPI";
import { useNavigate } from "react-router-dom";

const MainPage = () => {

    const {user} = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout(navigate));
      };

  return (
    <div className="flex flex-col items-center justify-center bg-black h-screen">
      <h1 className="text-3xl text-white font-bold mb-4">
        Welcome, {user?.firstName} {user?.lastName}!
      </h1>
      <p className="text-lg text-white">
        This is your main page after successful login.
      </p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-6"
        onClick={handleLogout}
        style={{
              background: "linear-gradient(to right, #667EEA, #764BA2)",
              backgroundSize: "200% auto",
              backgroundPosition: "right center",
            }}
            onMouseEnter={(e) => e.target.style.backgroundPosition = "right center"}
            onMouseLeave={(e) => e.target.style.backgroundPosition = "left center"}
      >
        Logout
      </button>
    </div>
  );
};

export default MainPage;
