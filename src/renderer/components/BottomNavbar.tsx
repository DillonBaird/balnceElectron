import React, { useState } from "react";
import { Link } from "react-router-dom";
import shareIcon from "../../../assets/shareIcon.png";
import appsIcon from "../../../assets/appsIcon.png";

interface BottomNavbarProps {
  onSendMessage?: (message: string) => void;
  disableIcons?: boolean;
}

const BottomNavbar: React.FC<BottomNavbarProps> = ({
  onSendMessage,
  disableIcons = false,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleSendClick = () => {
    if (onSendMessage) {
      onSendMessage(inputValue);
      setInputValue("")
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter'){
      handleSendClick()
    }
  }

  return (
    <div className="animate-in fade-in sticky bottom-0 w-full mx-4 bg-gradient-to-t from-black bg-transparent h-64 pointer-events-none">
      <div className="fadeIn nodrag pointer-events-auto w-full max-w-md mx-auto rounded-full mt-44 bg-gradient-to-t to-black bg-blue-900 p-px shadow-black shadow-2xl">
        <div className="w-full flex items-center h-16 pt-6 pb-6 rounded-full justify-between bg-black">
          {!disableIcons && (
            <Link
              to="/network"
              className="flex flex-col items-center text-white nodrag"
            >
              <span className="bg-blue-900 bg-opacity-50 rounded-full p-3">
                <img
                  draggable="false"
                  src={shareIcon}
                  className="saturate-0 contrast-0 brightness-200 w-6 h-6"
                />
              </span>
            </Link>
          )}

          {!disableIcons && (
            <Link
              to="/ai"
              className={`relative scaleDown z-40 flex flex-col items-center relative -top-7 nodrag ${
                disableIcons ? "w-full" : ""
              }`}
            >
              <div className="rainbow-container cursor-pointer bg-gradient-to-tr from-gray-900 bg-blue-900 hover:border-2 animate transition-all duration-100">
                <div className="green" />
                <div className="pink" />
                <div className="blue" />
              </div>
              <input
                type="text"
                placeholder={`${
                  disableIcons
                    ? "Reply or ask a question"
                    : "Ask me anything, I'm here to assist"
                }`}
                className={`fadeIn fadeInActive text-gray-300 text-sm mt-2 ${
                  disableIcons ? "w-full py-5" : "w-64"
                } text-center bg-transparent outline-none`}
              />
            </Link>
          )}

          {disableIcons && (
            <>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={`${
                  disableIcons
                    ? "Reply or ask a question"
                    : "Ask me anything, I'm here to assist"
                }`}
                className={`fadeIn fadeInActive text-gray-300 text-sm px-8 ${
                  disableIcons ? "w-full py-5" : "w-64"
                } text-left bg-transparent outline-none`}
              />
              <div className="flex flex-col items-center text-white nodrag mr-2">
                <button onClick={handleSendClick} className="p-4 text-xs tracking-wider">
                  SEND
                </button>
              </div>
            </>
          )}

          {!disableIcons && (
            <Link
              to="/apps"
              className="flex flex-col items-center text-white nodrag"
            >
              <span className="bg-blue-900 bg-opacity-50 rounded-full p-3">
                <img
                  draggable="false"
                  src={appsIcon}
                  className="saturate-0 contrast-0 brightness-200 w-6 h-6"
                />
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
