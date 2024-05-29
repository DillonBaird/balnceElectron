/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useNavigate } from "react-router-dom";

import calendarIcon from "../../../../../assets/calendarIcon.png";
import arrowIcon from "../../../../../assets/arrowIcon.png";
import alignleftIcon from "../../../../../assets/alignleftIcon.png";
import backIcon from "../../../../../assets/backIcon.png";

const data = {
  tiles: [
    {
      type: "calendar",
      bgColor: "bg-blue-900",
      icon: "calendarIcon",
      label1: "DAY",
      label2: "DAY_NUMBER",
      label3: "MONTH",
      label4: "No events today",
    },
    {
      type: "chatHistories",
      bgColor: "bg-gradient-to-bl from-indigo-500 via-black to-black hover:from-indigo-500",
      icon: "alignleftIcon",
      label1: "7",
      title: "Ai Chat Histories",
      description:
        "Imagine what happens when you save every conversation you've ever had with yourself.",
    },
    {
      type: "contracts",
      bgColor: "bg-gradient-to-bl from-purple-700 via-black to-black hover:from-purple-700",
      icon: "arrowIcon",
      label1: "5",
      title: "Contracts & Monetization",
      description:
        "Brands directly ask you for data, engagement and sharing. They pay you.",
    },
    {
      type: "goals",
      bgColor: "bg-gradient-to-bl from-blue-700 via-black to-black hover:from-blue-700",
      icon: "arrowIcon",
      label1: "3/5",
      title: "Goals & Achievements",
      description:
        "Envision and become your best self while learning, learning, and growing.",
    },
    {
      type: "connections",
      bgColor: "bg-gradient-to-bl from-red-500 via-black to-black hover:from-red-500",
      icon: "arrowIcon",
      label1: "1,235",
      title: "Connections",
      description:
        "It's your network, and always has been. Every connection and relationship is precious, authentic and real. No fakes here!",
    },
    {
      type: "challenges",
      bgColor: "bg-gradient-to-bl from-yellow-700 via-black to-black hover:from-yellow-700",
      icon: "arrowIcon",
      label1: "25",
      title: "Challenges",
      description:
        "Never stop growing, always be doing good, and pushing to become better. Challenges help you become the change you want to see.",
    },
    {
      type: "imaginationZone",
      bgColor: "bg-gradient-to-bl from-blue-700 via-black to-black hover:from-blue-700",
      icon: "arrowIcon",
      label1: "5",
      title: "Imagination Zone",
      description:
        "Use the most powerful too you have, your mind, to imagine content and have it come to life.",
    },
    {
      type: "networksCompute",
      bgColor: "bg-gradient-to-bl from-purple-700 via-black to-black hover:from-purple-700",
      icon: "arrowIcon",
      label1: "7",
      title: "Networks & Compute",
      description:
        "Your GPU and compute potential transformed into a network of storage, personal LLM and monetization.",
    },
    {
      type: "personalDevices",
      bgColor: "bg-gradient-to-bl from-blue-700 via-black to-black hover:from-blue-700",
      icon: "arrowIcon",
      label1: "5",
      title: "Personal Devices & IOT",
      description:
        "Data is your product, privacy is your lock. Connect devices to create more opportunity for you and your AI.",
    },
    {
      type: "digitalWallets",
      bgColor: "bg-gradient-to-bl from-green-800 via-black to-black hover:from-green-800",
      icon: "arrowIcon",
      label1: "1,235",
      title: "Digital Wallets",
      description:
        "Identity, physical credentials, passports, crypto, digital currencies, rewards, banking. Everything should be protected, connected, and controlled by you.",
    },
  ],
};

const icons: { [key: string]: string } = {
  calendarIcon,
  arrowIcon,
  alignleftIcon,
  backIcon,
};

interface TileData {
  type: string;
  bgColor: string;
  icon: string;
  label1?: string;
  label2?: string;
  label3?: string;
  label4?: string;
  title?: string;
  description?: string;
}

function Ai() {
  const today = new Date();
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayName = dayNames[today.getDay()];
  const dayNumber = today.getDate();
  const monthName = monthNames[today.getMonth()];

  const navigate = useNavigate();

  return (
    <div className="bg-black bg-opacity-80 px-6 select-none h-screen overflow-y-auto">
      <div className="mx-auto mt-12 w-full relative">
        <div
          onClick={() => navigate(-1)}
          className="nodrag rounded-full border border-gray-600 hover:border-gray-500 hover:bg-gray-800 transition-all w-10 h-10 mb-3 mx-0 p-3 inline-block fadeIn cursor-pointer"
        >
          <img draggable="false" src={backIcon} className="" alt="Back" />
        </div>
        <div className="fadeIn flex items-center mb-4">
          <div className="relative">
            <img
              draggable="false"
              src="https://play-lh.googleusercontent.com/hJGHtbYSQ0nCnoEsK6AGojonjELeAh_Huxg361mVrPmzdwm8Ots-JzEH5488IS2nojI=w240-h480-rw"
              alt="Avatar"
              className="w-16 h-16 rounded-full shadow-yellow-400 shadow"
            />
          </div>
          <h1 className="text-4xl font-bold ml-4">Hey Dillon</h1>
        </div>
        <h2 className="fadeIn text-3xl mb-6">
          What are we going to accomplish today?
        </h2>
        <div className="nodrag grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-36">
          {data.tiles.map((tile: TileData, index: number) => {
            const iconSrc = icons[tile.icon];
            return (
              <div
                key={index}
                className={`scrollInBig tile animated ${tile.bgColor} p-6 rounded-3xl transition-all group ease-in-out cursor-pointer border-px border border-black hover:border-gray-700 hover:transform`}
              >
                {tile.type === "calendar" ? (
                  <>
                    <img
                      draggable="false"
                      src={iconSrc}
                      className="w-6 h-6 mb-1"
                    />
                    <p className="text-base my-2">{dayName.toUpperCase()}</p>
                    <p className="text-4xl font-bold">{dayNumber}</p>
                    <p className="text-base my-1">{monthName}</p>
                    <p className="text-base mt-4">{tile.label4}</p>
                  </>
                ) : (
                  <>
                    <label className="text-gray-300 text-sm my-2 inline-block">
                      {tile.label1}
                    </label>
                    <img
                      draggable="false"
                      src={arrowIcon}
                      className="mt-2 float-right"
                    />
                    {tile.icon !== "arrowIcon" && (
                      <img
                        draggable="false"
                        src={iconSrc}
                        className="w-6 h-6 my-4"
                      />
                    )}
                    <h3 className="text-xl font-bold my-2">{tile.title}</h3>
                    <p className="text-xs leading-4 text-gray-300 group-hover:text-gray-100">{tile.description}</p>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Ai;
