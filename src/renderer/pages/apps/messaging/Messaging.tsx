/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, createRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import backIcon from "../../../../../assets/backIcon.png";

// Sample JSON object for messages
const messages = [
  {
    id: 1,
    type: "notifications",
    name: "Balnce Ai",
    message: "Learn and improve your skills...",
    time: "9:23",
    avatar: "https://i.pravatar.cc/80?img=1",
  },
  {
    id: 2,
    type: "people",
    name: "Bessie Cooper",
    message: "Hello there?",
    time: "8:45",
    avatar: "https://i.pravatar.cc/80?img=2",
  },
  {
    id: 3,
    type: "people",
    name: "Darlene Robertson",
    message: "What's shakin'?",
    time: "7:45",
    avatar: "https://i.pravatar.cc/80?img=3",
    notifications: 2,
  },
  {
    id: 4,
    type: "devices",
    name: "AirPods Pro",
    message: "Low battery",
    time: "6:17",
    avatar: "https://i.pravatar.cc/80?img=4",
  },
  {
    id: 5,
    type: "people",
    name: "@chloe.grien_en",
    message: "No code testing across all de...",
    time: "6:00",
    avatar: "https://i.pravatar.cc/80?img=5",
  },
  {
    id: 6,
    type: "people",
    name: "Arlene McCoy",
    message: "Okey thank you robbert",
    time: "Yesterday",
    avatar: "https://i.pravatar.cc/80?img=6",
    notifications: 4,
  },
  {
    id: 7,
    type: "brands",
    name: "@marry247",
    message: "Thank u so much",
    time: "May 13",
    avatar: "https://i.pravatar.cc/80?img=7",
  },
  {
    id: 8,
    type: "brands",
    name: "Annette Black",
    message: "Manage all versions and track...",
    time: "Apr 29",
    avatar: "https://i.pravatar.cc/80?img=8",
  },
  {
    id: 9,
    type: "all",
    name: "@alex_sol",
    message: "Welcome aboard",
    time: "Apr 28",
    avatar: "https://i.pravatar.cc/80?img=9",
  },
];

interface MessageRefs {
  [key: number]: React.RefObject<HTMLDivElement>;
}

function Navigation() {
  const [filter, setFilter] = useState("all");
  const [messageRefs] = useState<MessageRefs>(() => {
    const initialRefs: MessageRefs = {};
    messages.forEach((msg) => {
      initialRefs[msg.id] = createRef();
    });
    return initialRefs;
  });

  const filteredMessages = messages.filter(
    (msg) => filter === "all" || msg.type === filter,
  );
  const navigate = useNavigate();

  return (
    <div className="selectable-no text-white min-h-screen p-6">
      <div className="block pb-48 overflow-y-auto h-screen container mx-auto p-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div
            onClick={() => navigate(-1)}
            className="nodrag rounded-full border border-gray-600 hover:border-gray-500 hover:bg-gray-800 transition-all w-10 h-10 mx-0 p-3 inline-block fadeIn cursor-pointer"
          >
            <img draggable="false" src={backIcon} className="" alt="Back" />
          </div>
          <Link
            to="/messaging"
            className="nodrag rounded-full border text-2xl border-gray-600 hover:border-gray-500 hover:bg-gray-800 transition-all w-10 h-10 mx-0 p-3 pt-px inline-block fadeIn"
          >
            +
          </Link>
        </div>
        <h1 className="text-4xl pt-4 font-bold mb-8 fadeIn">Messaging</h1>
        {/* Tabs */}
        <div className="nodrag fadeIn flex overflow-x-auto space-x-4 mb-8">
          <button
            onClick={() => setFilter("all")}
            className={`py-1 px-4 rounded-full ${
              filter === "all"
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("people")}
            className={`py-1 px-4 rounded-full ${
              filter === "people"
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            People
          </button>
          <button
            onClick={() => setFilter("brands")}
            className={`py-1 px-4 rounded-full ${
              filter === "brands"
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            Brands
          </button>
          <button
            onClick={() => setFilter("notifications")}
            className={`py-1 px-4 rounded-full ${
              filter === "notifications"
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            Notifications
          </button>
          <button
            onClick={() => setFilter("devices")}
            className={`py-1 px-4 rounded-full ${
              filter === "devices"
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            Devices
          </button>
        </div>
        {/* Message List */}
        <div className="nodrag fadeIn">
          <TransitionGroup>
            {filteredMessages.map((msg) => (
              <CSSTransition
                key={msg.id}
                nodeRef={messageRefs[msg.id]}
                timeout={500}
                classNames="fade"
              >
                <div
                  ref={messageRefs[msg.id]}
                  className="flex items-center space-x-4 mb-4 hover:bg-gray-900 py-2 px-3 rounded-2xl cursor-pointer"
                >
                  <img draggable="false"
                    src={msg.avatar}
                    alt={msg.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <h2 className="text-lg font-bold">
                      {msg.name}{" "}
                      {msg.type === "brands" && (
                        <span className="text-blue-500 border-blue-500 border bg-transparent text-xs rounded-full px-2 py-1">
                          brand
                        </span>
                      )}
                    </h2>
                    <p className="text-gray-400">{msg.message}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-gray-400 text-sm">{msg.time}</span>
                    {msg.notifications && (
                      <span className="bg-red-600 text-white text-xs rounded-full px-2 py-1">
                        {msg.notifications}
                      </span>
                    )}
                  </div>
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
