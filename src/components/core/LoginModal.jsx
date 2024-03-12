import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../../services/operations/authAPI";
import { useNavigate } from "react-router-dom";

const LoginModal = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    // Handle login logic here
    dispatch(login(data.email, data.password, navigate));
  };

  return (
    <div
      className={isOpen ? "block" : "hidden"}
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: "999",
        overflow: "auto",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          margin: "10% auto",
          padding: "20px",
          borderRadius: "5px",
          maxWidth: "400px",
        }}
      >
        <span
          style={{
            cursor: "pointer",
            float: "right",
            fontSize: "20px",
            fontWeight: "bold",
          }}
          onClick={onClose}
        >
          &times;
        </span>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Email"
            className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
            className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {errors.password && (
            <span className="text-red-500">Password is required</span>
          )}
          <button
            type="submit"
            className="w-full px-4 py-2 mb-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
