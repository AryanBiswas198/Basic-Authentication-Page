import React, { useState } from 'react';
import LoginModal from "../components/core/LoginModal";
import SignupModal from "../components/core/SignupModal";

const Home = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  const openSignupModal = () => {
    setShowSignupModal(true);
  };

  const closeSignupModal = () => {
    setShowSignupModal(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg px-6 py-8 bg-white shadow-md rounded-md">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to My Website</h1>
        <div className="flex justify-center space-x-4">
          <button
            onClick={openLoginModal}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
          <button
            onClick={openSignupModal}
            className="px-6 py-3 bg-yellow-100 text-white font-semibold rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Signup
          </button>
        </div>
        <LoginModal isOpen={showLoginModal} onClose={closeLoginModal} />
        <SignupModal isOpen={showSignupModal} onClose={closeSignupModal} />
      </div>
    </div>
  );
};

export default Home;