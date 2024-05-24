/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from "react";
import WelcomeSignUp from "./WelcomeSignUp";
import Modal from "./Modal";
import { useAuth } from "../../../context/AuthContext";
import demoQR from "../../../../../assets/demoQR.png";
import web3Logos from "../../../../../assets/web3.png";

function Login() {
  const [showModal, setShowModal] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showLoginUI, setShowLoginUI] = useState(false);
  const [recentAccount, setRecentAccount] = useState(null);

  const { login } = useAuth();

  useEffect(() => {
    const hideWelcomeModal = localStorage.getItem("hideWelcomeModal");
    setShowModal(hideWelcomeModal !== "true");
  }, []);

  useEffect(() => {
    // Load recent account from localStorage or other persistent storage
    const recent = localStorage.getItem("recentAccount");
    if (recent) {
      setRecentAccount(JSON.parse(recent));
    }
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (!showModal) {
      const timer = setTimeout(() => setContentVisible(true), 300); // Match the modal fade out duration
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  const handleStepChange = (step: number) => {
    setCurrentStep(step);
  };

  const handleLoginClick = () => {
    setShowLoginUI(true);
  };

  const handleWeb3Login = () => {
    login();
  };

  const handleGoBack = () => {
    setShowLoginUI(false);
  };

  const truncate = (string: string) => {

    let newstring = string.substring(0, ((string.length / 2)-11)) + '.....' + string.substring(((string.length / 2)+11), string.length)

    return newstring;
  };


  const handleRecentAccountLogin = () => {
    // Logic to relogin the recent account if session is not expired
    login();
    console.log(recentAccount);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {contentVisible && !showLoginUI && <WelcomeSignUp onStepChange={handleStepChange} />}
      {!showLoginUI && (
        <button
          onClick={handleLoginClick}
          className={`nodrag fadeIn text-white bg-transparent text-sm tracking-wider absolute bottom-8 ${
            currentStep > 6 ? "hidden" : ""
          }`}
        >
          Log Into Existing Balnce Account
        </button>
      )}
      {showLoginUI && (
        <div className="fadeInUp login-ui bg-black bg-opacity-30 w-[80vw] h-[90vh] mx-auto rounded-3xl p-8">
        <div className="flex flex-col h-full">
          <h1 className="text-center text-4xl mt-4 font-medium">Balnce Ai</h1>
          <div className="flex flex-grow flex-col sm:flex-row items-center py-6">
            <div className="sm:w-1/2 flex flex-col items-center justify-center">
            <img src={web3Logos} alt="QR Code" className="h-36 mb-4 sm:mb-8 sm:mt-10" />
              <button
                onClick={handleWeb3Login}
                className="nodrag bg-gradient-to-tl from-gray-900 bg-blue-900 text-white py-2 px-4 rounded mb-8"
              >
                Connect Wallet
              </button>
            </div>
            <div className="sm:w-1/2 flex flex-col items-center justify-center">
              <div className="bg-white p-1 rounded-lg mb-4">
                <img src={demoQR} alt="QR Code" className="w-48 h-48" />
              </div>
              <p className="text-gray-400 text-xs">Scan the QR code to login with your device</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-1">
            {recentAccount && (
              <>
              <button
                className="nodrag bg-gray-900 text-white p-4 rounded-lg cursor-pointer px-10 text-center mb-4"
                  onClick={handleRecentAccountLogin}
              >
              <h2 className="text-sm mb-2">Login With Recent Account</h2>
                {`${truncate(recentAccount)}`}
              </button>
              </>
            )}
          </div>
          <button
            onClick={handleGoBack}
            className="nodrag bg-transparent text-white py-3 px-4 mt-6 mb-2 self-start w-full"
          >
            Go Back
          </button>
        </div>
      </div>
      )}
      <Modal show={showModal} onClose={handleCloseModal} />
    </div>
  );
}

export default Login;
