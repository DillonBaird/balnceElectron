import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SplashScreen() {
  const navigate = useNavigate();
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = [
    "Connecting Crypto...",
    "Decentralizing Nodes...",
    "Waking Up AI Agents...",
    "Loading User Data...",
    "Initializing Systems...",
  ];

  useEffect(() => {
    const changeMessage = () => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
      const randomDelay = Math.random() * 1000 + 500; // Random delay between 500ms and 1500ms
      setTimeout(changeMessage, randomDelay);
    };

    const initialTimeout = setTimeout(
      changeMessage,
      Math.random() * 1000 + 500,
    ); // Initial random delay

    const navigationTimer = setTimeout(() => {
      navigate("/network"); // Navigate to the network/dashboard page after 5 seconds
    }, 5000);

    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(navigationTimer);
    };
  }, [messages.length, navigate]);

  return (
    <div className="fadeOut flex flex-col justify-center items-center h-screen bg-black bg-opacity-60">
      <div className="block fadeIn2 text-5xl text-white mb-4 font-semibold">
        Balnce Ai
      </div>
      <hr className="progress-bar w-[70vw] mb-3" />
      <div className="block fadeIn2 text-base text-white">
        {messages[messageIndex]}
      </div>
    </div>
  );
}

export default SplashScreen;
