import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center bg-black justify-center bg-gray-100">
      <div className="max-w-lg px-6 py-8 bg-black shadow-md rounded-md">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Welcome to My Website</h1>
        <div className="flex justify-center space-x-10">
          <Link
            to={"/loginPage"}
            className="px-6 py-3 text-white font-semibold rounded focus:outline-none"
            style={{
              background: "linear-gradient(to right, #667EEA, #764BA2)",
              backgroundSize: "200% auto",
              backgroundPosition: "right center",
            }}
            onMouseEnter={(e) => e.target.style.backgroundPosition = "right center"}
            onMouseLeave={(e) => e.target.style.backgroundPosition = "left center"}
          >
            Login
          </Link>
          <Link
            to={"/signupPage"}
            className="px-6 py-3 text-white font-semibold rounded focus:outline-none"
            style={{
              background: "linear-gradient(to right, #667EEA, #764BA2)",
              backgroundSize: "200% auto",
              backgroundPosition: "right center",
            }}
            onMouseEnter={(e) => e.target.style.backgroundPosition = "right center"}
            onMouseLeave={(e) => e.target.style.backgroundPosition = "left center"}
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;