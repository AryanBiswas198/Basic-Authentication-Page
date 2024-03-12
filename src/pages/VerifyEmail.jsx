import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp, signUp } from "../services/operations/authAPI";
import { Link, useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const { signupData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOtpChange = (otp) => {
    setOtp(otp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { firstName, lastName, email, password, confirmPassword } =
      signupData;

    dispatch(
      signUp(
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        navigate
      )
    );
  };

  const handleResend = () => {
    // Function to resend verification email
    dispatch(sendOtp(signupData.email, navigate));
  };

  const handleBackToSignup = () => {
    // Function to navigate back to signup page
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-6">
        A verification email has been sent to you, please check and enter the
        code below
      </h2>
      <form onSubmit={handleSubmit}>
        <OTPInput
          value={otp}
          onChange={handleOtpChange}
          numInputs={6} // Number of OTP input fields
          renderInput={(props) => (
            <input
              {...props}
              placeholder="-"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-[48px] lg:w-[60px] border-0 bg-richblack-800 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
            />
          )}
          containerStyle={{
            justifyContent: "space-between",
            gap: "0 6px",
          }}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mr-2"
        >
          Verify Email
        </button>
      </form>
      {/* <div className="flex justify-between mt-4">
        <Link to="/">
          <p className="text-blue-500 hover:underline focus:outline-none">
            Back To Signup
          </p>
        </Link>
      </div>
      <button
        // className="bg-gray-500 text-white px-4 py-2 rounded-md mt-4"
        className="text-gray-600 hover:underline focus:outline-none"
        onClick={handleResend}
      >
        Resend Email
      </button> */}


      <div className="flex justify-end mt-4">
        <button
          className="text-blue-500 hover:underline mr-4 focus:outline-none"
          onClick={handleResend}
        >
          Resend Email
        </button>
        <Link to="/">
          <button className="text-blue-500 hover:underline focus:outline-none">
            Back To Signup
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VerifyEmail;
