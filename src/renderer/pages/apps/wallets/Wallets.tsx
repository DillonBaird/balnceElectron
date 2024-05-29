/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import backIcon from "../../../../../assets/backIcon.png";
import walletIcon from "../../../../../assets/walletIcon.png";
import metamaskIcon from "../../../../../assets/MetaMask_Fox.png";
import coinbaseIcon from "../../../../../assets/coinbaseIcon.png";
import mastercardIcon from "../../../../../assets/mastercard.png";
import cryptoBank from "../../../../../assets/cryptoBank.png";
import credit from "../../../../../assets/credit.png";
import identity from "../../../../../assets/identity.png";
import keycard from "../../../../../assets/keycard.png";

const wallets = [
  {
    id: 1,
    name: "Mastercard",
    number: "•••• 4532",
    icon: mastercardIcon,
    type: "debit-credit",
  },
  {
    id: 2,
    name: "Metamask",
    number: "0xA52...4b29",
    icon: metamaskIcon,
    type: "banking-crypto",
  },
  {
    id: 3,
    name: "Coinbase",
    number: "Jx0G2...s8F2",
    icon: coinbaseIcon,
    type: "banking-crypto",
  },
  // Add more wallets as needed
];

function WalletPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();

  const renderWallets = (type: string) => {
    return wallets
      .filter((wallet) => type === "overview" || wallet.type === type)
      .map((wallet) => (
        <div
          key={wallet.id}
          className={`scrollIn items-center justify-between p-6 mb-6 bg-gray-800 rounded-3xl bg-gradient-to-tr from-gray-700 bg-opacity-50 ${
            wallet.type === "mastercard" ? "bg-yellow-300" : ""
          }${wallet.type === "metamask" ? "bg-orange-600" : ""}`}
        >
          <div className="flex items-center">
            <img draggable="false" src={walletIcon} className="w-12 h-12 mr-4" />
            <div>
              <p className="text-white font-medium">{wallet.name} manager</p>
            </div>
          </div>
          <p className="text-gray-100 block text-sm tracking-widest mt-8">
            {wallet.number}
          </p>
          <img draggable="false"
            src={wallet.icon}
            alt={wallet.name}
            className="h-14 -mt-12 float-right"
          />
        </div>
      ));
  };

  const renderContent = () => {
    if (activeTab === "overview") {
      return (
        <div className="p-4 nodrag">
          <h2 className="fadeIn text-3xl font-bold mb-4">Ai wallet</h2>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="tile animated p-6 pr-8 bg-gradient-to-l from-orange-300 to-red-400 rounded-3xl">
              <p className="text-white text-3xl font-bold">41,117.28</p>
              <p className="text-gray-100 opacity-40 font-medium">BLC</p>
              <p className="text-white mt-32 text-xl font-semibold">
                Current balance
              </p>
            </div>
            <div className="tile animated p-6 bg-gradient-to-bl from-purple-700 via-black to-black rounded-3xl border border-gray-600">
              <p className="text-white text-xl font-bold">1,285.44</p>
              <p className="text-gray-100 opacity-40 font-semibold">BLC</p>
              <p className="text-white mt-32 text-xl font-semibold">Received</p>
            </div>
          </div>
          <h2 className="fadeIn text-3xl font-bold mb-4">Wallets</h2>
          {renderWallets("overview")}
        </div>
      );
    }
    if (activeTab === "identity") {
      return (
        <div className="p-4 nodrag">
          <h2 className="fadeIn text-3xl font-bold mb-4">Identity Wallet</h2>
          {/* Add content for Identity Wallet */}
        </div>
      );
    }
    if (activeTab === "physical-credentials") {
      return (
        <div className="p-4 nodrag">
          <h2 className="fadeIn text-3xl font-bold mb-4">
            Physical Credentials
          </h2>
          {/* Add content for Physical Credentials */}
        </div>
      );
    }
    if (activeTab === "debit-credit") {
      return (
        <div className="p-4 nodrag">
          <h2 className="fadeIn text-3xl font-bold mb-4">
            Debit & Credit Cards
          </h2>
          {renderWallets("debit-credit")}
        </div>
      );
    }
    if (activeTab === "banking-crypto") {
      return (
        <div className="p-4 nodrag">
          <h2 className="fadeIn text-3xl font-bold mb-4">Banking & Crypto</h2>
          {renderWallets("banking-crypto")}
        </div>
      );
    }
  };

  return (
    <div className="nodrag text-white min-h-screen p-6 bg-gray-900">
      <div className="block pb-48 overflow-y-auto h-screen container mx-auto p-4">
        {/* Header */}
        <div className="fadeIn flex items-center justify-between mb-4">
          <div
            onClick={() => navigate(-1)}
            className="nodrag rounded-full border border-gray-600 hover:border-gray-500 hover:bg-gray-800 transition-all w-10 h-10 mx-0 p-3 inline-block fadeIn cursor-pointer"
          >
            <img draggable="false" src={backIcon} className="" alt="Back" />
          </div>
          <Link
            to="/wallets"
            className="nodrag rounded-full border text-2xl border-gray-600 hover:border-gray-500 hover:bg-gray-800 transition-all w-10 h-10 mx-0 p-3 pt-px inline-block fadeIn"
          >
            +
          </Link>
        </div>
        <h1 className="text-4xl font-bold mb-4 fadeIn">Wallets</h1>
        {/* Wallet Icons */}
        <div className="fadeIn flex justify-center mb-2 space-x-4">
          <div
            onClick={() => setActiveTab("overview")}
            className={`p-2 ${
              activeTab === "overview" ? "bg-gray-700" : "bg-transparent"
            } border border-gray-700 rounded-full cursor-pointer`}
          >
            <img draggable="false" src={walletIcon} alt="Overview" className="w-10" />
          </div>
          <div
            onClick={() => setActiveTab("identity")}
            className={`p-2 ${
              activeTab === "identity" ? "bg-gray-700" : "bg-transparent"
            } border border-gray-700 rounded-full cursor-pointer`}
          >
            <img draggable="false" src={identity} alt="Identity" className="w-10" />
          </div>
          <div
            onClick={() => setActiveTab("physical-credentials")}
            className={`p-2 ${
              activeTab === "physical-credentials"
                ? "bg-gray-700"
                : "bg-transparent"
            } border border-gray-700 rounded-full cursor-pointer`}
          >
            <img draggable="false" src={keycard} alt="Physical Credentials" className="w-10" />
          </div>
          <div
            onClick={() => setActiveTab("debit-credit")}
            className={`p-2 ${
              activeTab === "debit-credit" ? "bg-gray-700" : "bg-transparent"
            } border border-gray-700 rounded-full cursor-pointer`}
          >
            <img draggable="false" src={credit} alt="Debit & Credit" className="w-10" />
          </div>
          <div
            onClick={() => setActiveTab("banking-crypto")}
            className={`p-2 ${
              activeTab === "banking-crypto" ? "bg-gray-700" : "bg-transparent"
            } border border-gray-700 rounded-full cursor-pointer`}
          >
            <img draggable="false" src={cryptoBank} alt="Banking & Crypto" className="w-10" />
          </div>
        </div>
        {/* Content */}
        {renderContent()}
      </div>
    </div>
  );
}

export default WalletPage;
