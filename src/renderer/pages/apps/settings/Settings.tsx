/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import backIcon from "../../../../../assets/backIcon.png";
import { useAuth } from "../../../context/AuthContext";

interface ILLMAgent {
  name: string;
  status: string;
  lastUpdated: string;
}

interface ICryptoWallet {
  balance: string;
  lastTransactionDate: string;
}

interface IAppInfo {
  version: string;
  llmAgents: ILLMAgent[];
  cryptoWallet: ICryptoWallet;
  nodeIdentifier: string;
}

const getAppInfo = (): IAppInfo => ({
  version: "1.0.2",
  llmAgents: [
    { name: "Agent GPT-4", status: "Running", lastUpdated: "2023-05-16" },
    { name: "Agent GPT-3.5", status: "Stopped", lastUpdated: "2023-04-30" },
    { name: "Agent Custom", status: "Running", lastUpdated: "2023-05-01" },
  ],
  cryptoWallet: { balance: "0.45 BTC", lastTransactionDate: "2023-05-15" },
  nodeIdentifier: "0x91b...a1cf2",
});

function Settings() {
  const [appInfo, setAppInfo] = useState<IAppInfo>({
    version: "",
    llmAgents: [],
    cryptoWallet: { balance: "", lastTransactionDate: "" },
    nodeIdentifier: "",
  });
  const [clickCount, setClickCount] = useState(0);
  const [showAdminInfo, setShowAdminInfo] = useState(true); // TODO: default to false before launch

  const navigate = useNavigate();

  useEffect(() => {
    setAppInfo(getAppInfo());
  }, []);

  const handleVersionClick = () => {
    setClickCount((prev) => prev + 1);
    if (clickCount + 1 === 10) {
      setShowAdminInfo(true);
    }
  };

  const { user, logout } = useAuth();

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
        </div>
        {/* Settings */}
        <div className="nodrag fadeIn w-full select-none flex flex-col items-center justify-center text-white">
          <div className="w-full space-y-5">
            <h1 className="text-4xl font-bold">Settings</h1>
            <div
              className="nodrag text-lg mb-4 cursor-pointer"
              onClick={handleVersionClick}
            >
              App Version: {appInfo.version}
            </div>

            {showAdminInfo && (
              <>
                <section className="fadeIn bg-gray-700 p-4 rounded-lg shadow">
                  <h2 className="text-xl font-semibold mb-3">
                    LLM Agents Status
                  </h2>
                  {appInfo.llmAgents.map((agent) => (
                    <div
                      key={agent.name}
                      className="p-2 border-b border-gray-600 text-sm last:border-b-0"
                    >
                      {agent.name}:{" "}
                      <span className="font-medium">{agent.status}</span> - Last
                      Updated: {agent.lastUpdated}
                    </div>
                  ))}
                </section>

                <section className="fadeIn bg-gray-700 p-4 rounded-lg shadow">
                  <h2 className="text-xl font-semibold mb-3">
                    Crypto Wallet Information
                  </h2>
                  <div className="p-2 text-sm">
                    Wallet Balance:{" "}
                    <span className="font-medium">
                      {appInfo.cryptoWallet.balance}
                    </span>
                  </div>
                  <div className="p-2 text-sm">
                    Last Transaction: {appInfo.cryptoWallet.lastTransactionDate}
                  </div>
                </section>

                <section className="fadeIn bg-gray-700 p-4 rounded-lg shadow">
                  <h2 className="text-xl font-semibold mb-3">
                    Decentralized Web Node
                  </h2>
                  <div className="p-2 text-sm">
                    Node Identifier: {appInfo.nodeIdentifier}
                  </div>
                </section>
              </>
            )}

            {/* Non-admin user settings */}
            <section className="bg-blue-700 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-3">User Preferences</h2>
              <div className="p-2">
                Notification Settings:{" "}
                <span className="font-medium">Enabled</span>
              </div>
              <div className="p-2">
                Language: <span className="font-medium">English</span>
              </div>
              <div className="p-2">
                Wallet Address: <span className="font-medium">{user}</span>
              </div>
            </section>
            <button
              onClick={logout}
              className="px-4 py-2 mt-4 text-white bg-red-500 rounded-md hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
