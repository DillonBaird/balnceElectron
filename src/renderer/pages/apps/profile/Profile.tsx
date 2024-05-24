/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable consistent-return */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import backIcon from "../../../../../assets/backIcon.png";
import userIcon from "../../../../../assets/userIcon.png";
import notificationsIcon from "../../../../../assets/notificationsIcon.png";
import walletIcon from "../../../../../assets/walletIcon.png";
import contractsIcon from "../../../../../assets/contracts.png";
import devicesIcon from "../../../../../assets/gamification.png";
import postsIcon from "../../../../../assets/posts.png";
import productsIcon from "../../../../../assets/products.png";
import nftIcon from "../../../../../assets/nft.png";
import qrIcon from "../../../../../assets/qr.png";
import laserIcon from "../../../../../assets/laser.png";

function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();

  const renderContent = () => {
    if (activeTab === "overview") {
      return (
        <div className="p-4 nodrag max-w-xl mx-auto">
          <div className="flex justify-center">
            <img draggable="false"
              src="https://play-lh.googleusercontent.com/hJGHtbYSQ0nCnoEsK6AGojonjELeAh_Huxg361mVrPmzdwm8Ots-JzEH5488IS2nojI=w240-h480-rw"
              alt="Profile Picture"
              className="rounded-xl w-80 h-96 object-cover"
            />
          </div>
          <div className="text-center mt-6">
            <h1 className="text-3xl font-bold">
              Analog/digital creator.
              <br />
              VFX artist.
            </h1>
            <p className="text-gray-400 mt-2">
              Transmitting my energy through creativity
            </p>
            <div className="flex justify-center mt-6 space-x-4">
              <button className="w-16 h-12 bg-gradient-to-t from-yellow-800 to-yellow-900 rounded-full flex items-center justify-center px-4">
                <span className="text-3xl text-orange-400">+</span>
              </button>
              <button className="w-16 h-12 bg-gradient-to-t from-blue-800 to-blue-900 rounded-full flex items-center justify-center px-4">
                <img draggable="false" src={notificationsIcon} />
              </button>
              <button className="w-16 h-12 bg-gradient-to-t from-green-800 to-green-900 rounded-full flex items-center justify-center px-4">
                <img draggable="false" src={walletIcon} />
              </button>
            </div>
          </div>
          <div className="mt-8 p-6 bg-gray-800 rounded-3xl">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Jennifer McCoy</h2>
                <p className="text-gray-400">San Francisco, CA</p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="h-8 bg-white rounded-full flex items-center justify-center p-3">
                  <img draggable="false" src={qrIcon} className="w-6" />
                </button>
                <button className="h-8 bg-white rounded-full flex items-center justify-center p-3">
                  <img draggable="false" src={laserIcon} className="w-6" />
                </button>
              </div>
            </div>
            <div className="flex items-center mt-4 space-x-2">
              <span className="bg-blue-900 text-white text-sm font-semibold px-2 py-1 rounded-full">
                Minority Owned
              </span>
              <span className="bg-blue-900 text-white text-sm font-semibold px-2 py-1 rounded-full">
                BCorp
              </span>
            </div>
            <div className="mt-6">
              <button className="w-full bg-blue-600 text-white text-lg font-bold py-3 rounded-full">
                Follow
              </button>
            </div>
            <p className="text-gray-400 text-center mt-4 text-sm">
              member since 2022
            </p>
          </div>
        </div>
      );
    }
    if (activeTab === "products") {
      return (
        <div className="p-4 nodrag">
          <h2 className="fadeIn text-3xl font-bold mb-4">Products</h2>
        </div>
      );
    }
    if (activeTab === "nft") {
      return (
        <div className="p-4 nodrag">
          <h2 className="fadeIn text-3xl font-bold mb-4">NFT</h2>
        </div>
      );
    }
    if (activeTab === "devices") {
      return (
        <div className="p-4 nodrag">
          <h2 className="fadeIn text-3xl font-bold mb-4">Connected Devices</h2>
        </div>
      );
    }
    if (activeTab === "contracts") {
      return (
        <div className="p-4 nodrag">
          <h2 className="fadeIn text-3xl font-bold mb-4">Contracts</h2>
        </div>
      );
    }
    if (activeTab === "posts") {
      return (
        <div className="p-4 nodrag">
          <h2 className="fadeIn text-3xl font-bold mb-4">Posts</h2>
        </div>
      );
    }
  };

  return (
    <div className="selectable-no text-white min-h-screen p-6 bg-gray-900">
      <div className="block pb-48 overflow-y-auto h-screen container mx-auto p-4">
        {/* Header */}
        <div className="fadeIn flex items-center justify-between mb-4">
          <div
            onClick={() => navigate(-1)}
            className="nodrag rounded-full border border-gray-600 hover:border-gray-500 hover:bg-gray-800 transition-all w-10 h-10 mx-0 p-3 inline-block fadeIn cursor-pointer"
          >
            <img draggable="false" src={backIcon} className="" alt="Back" />
          </div>
          <div className="flex gap-2">
            <Link
              to="/profile"
              className="nodrag rounded-full border text-2xl border-gray-600 hover:border-gray-500 hover:bg-gray-800 transition-all w-10 h-10 mx-0 p-3 pt-px inline-block fadeIn"
            >
              +
            </Link>
            <Link
              to="/profile"
              className="nodrag rounded-full border text-2xl border-gray-600 hover:border-gray-500 hover:bg-gray-800 transition-all w-10 h-10 mx-0 p-3 pt-px inline-block fadeIn"
            >
              +
            </Link>
            <Link
              to="/profile"
              className="nodrag rounded-full border text-2xl border-gray-600 hover:border-gray-500 hover:bg-gray-800 transition-all w-10 h-10 mx-0 p-3 pt-px inline-block fadeIn"
            >
              +
            </Link>
          </div>
        </div>
        {/* Wallet Icons */}
        <div className="nodrag fadeIn flex justify-center mb-2 space-x-4">
          <div
            onClick={() => setActiveTab("overview")}
            className={`p-3 ${
              activeTab === "overview" ? "bg-gray-700" : "bg-transparent"
            } border border-gray-700 rounded-full cursor-pointer nodrag`}
          >
            <img draggable="false" src={userIcon} alt="Overview" className="w-8" />
          </div>
          <div
            onClick={() => setActiveTab("products")}
            className={`p-3 ${
              activeTab === "products" ? "bg-gray-700" : "bg-transparent"
            } border border-gray-700 rounded-full cursor-pointer nodrag`}
          >
            <img draggable="false" src={productsIcon} alt="Products" className="w-8" />
          </div>
          <div
            onClick={() => setActiveTab("nft")}
            className={`p-3 ${
              activeTab === "nft" ? "bg-gray-700" : "bg-transparent"
            } border border-gray-700 rounded-full cursor-pointer nodrag`}
          >
            <img draggable="false" src={nftIcon} alt="NFT" className="w-8" />
          </div>
          <div
            onClick={() => setActiveTab("devices")}
            className={`p-3 ${
              activeTab === "devices" ? "bg-gray-700" : "bg-transparent"
            } border border-gray-700 rounded-full cursor-pointer nodrag`}
          >
            <img draggable="false" src={devicesIcon} alt="Devices" className="w-8" />
          </div>
          <div
            onClick={() => setActiveTab("contracts")}
            className={`p-3 ${
              activeTab === "contracts" ? "bg-gray-700" : "bg-transparent"
            } border border-gray-700 rounded-full cursor-pointer nodrag`}
          >
            <img draggable="false" src={contractsIcon} alt="Contracts" className="w-8" />
          </div>
          <div
            onClick={() => setActiveTab("posts")}
            className={`p-3 ${
              activeTab === "posts" ? "bg-gray-700" : "bg-transparent"
            } border border-gray-700 rounded-full cursor-pointer nodrag`}
          >
            <img draggable="false" src={postsIcon} alt="Posts" className="w-8" />
          </div>
        </div>
        {/* Content */}
        {renderContent()}
      </div>
    </div>
  );
}

export default ProfilePage;
