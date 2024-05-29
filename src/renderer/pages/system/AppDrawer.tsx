/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import messagingIcon from "../../../../assets/notificationsIcon.png";
import walletIcon from "../../../../assets/walletIcon.png";
import twinIcon from "../../../../assets/twin.png";
import devicesIcon from "../../../../assets/devices.png";
import storageIcon from "../../../../assets/storage.png";
import aiIcon from "../../../../assets/ai.png";
import profileIcon from "../../../../assets/profile.png";
import lockIcon from "../../../../assets/lock.png";
import gamification from "../../../../assets/gamification.png";
import commerce from "../../../../assets/commerce.png";
import contracts from "../../../../assets/contracts.png";
import goals from "../../../../assets/goals.png";
import payments from "../../../../assets/payments.png";
import graph from "../../../../assets/graph.png";
import group from "../../../../assets/group.png";
import security from "../../../../assets/security.png";

interface AppDataItem {
  to: string;
  src: string;
  label: string;
}

interface AppData {
  [key: string]: AppDataItem[];
}

const appData: AppData = {
  Communicate: [
    { to: "/messaging", src: messagingIcon, label: "Messaging" },
    { to: "/apps", src: graph, label: "Personal Graph" },
    { to: "/apps", src: group, label: "Contacts & Groups" },
    { to: "/apps", src: security, label: "Security & Protection" },
  ],
  Thrive: [
    { to: "/apps", src: commerce, label: "Commerce" },
    { to: "/apps", src: contracts, label: "Contracts" },
    { to: "/apps", src: goals, label: "Goals" },
    { to: "/apps", src: gamification, label: "Gamification & Earning" },
    { to: "/apps", src: payments, label: "Payments" },
  ],
  Self: [
    { to: "/apps", src: twinIcon, label: "My Digital Twin (ai)" },
    { to: "/wallets", src: walletIcon, label: "Wallets" },
    { to: "/apps", src: devicesIcon, label: "Integrations & Devices" },
    { to: "/apps", src: storageIcon, label: "Media & Storage" },
    { to: "/apps", src: aiIcon, label: "AI Exchange" },
    { to: "/profile", src: profileIcon, label: "Profile / Domain" },
    { to: "/settings", src: lockIcon, label: "Settings" },
  ],
  Beta: [
    { to: "/chat", src: messagingIcon, label: "Example Chat" },
  ],
};

interface NavigationSectionProps {
  title: string;
  items: AppDataItem[];
  bgClass: string;
}

function NavigationSection({ title, items, bgClass }: NavigationSectionProps) {
  return (
    <div className="mb-8">
      <h2 className="fadeIn text-xl mb-4">{title}</h2>
      <div className="scrollIn grid grid-cols-4 lg:grid-cols-7 gap-3">
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className="tile animated text-center text-sm text-gray-300 max-w-20"
          >
            <button
              className={`icon-container w-20 h-20 bg-gradient-to-b from-gray-800 ${bgClass} bg-opacity-50 hover:bg-opacity-80 cursor-pointer mx-auto p-4 rounded-lg mb-2`}
            >
              <img draggable="false" src={item.src} />
            </button>
            <p>{item.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="text-white min-h-screen p-6">
      <div className="nodrag block pb-48 overflow-y-auto h-screen container mx-auto p-4">
        <h1 className="text-4xl pt-4 font-bold mb-8 fadeIn">Navigation</h1>
        <NavigationSection
          title="Communicate"
          items={appData.Communicate}
          bgClass="bg-blue-900"
        />
        <NavigationSection
          title="Thrive"
          items={appData.Thrive}
          bgClass="bg-yellow-900"
        />
        <NavigationSection
          title="Self"
          items={appData.Self}
          bgClass="bg-green-900"
        />
        <NavigationSection
          title="Beta"
          items={appData.Beta}
          bgClass="bg-red-900"
        />
      </div>
    </div>
  );
}

export default Navigation;
