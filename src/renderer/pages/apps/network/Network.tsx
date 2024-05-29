/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";

import userIcon from "../../../../../assets/userIcon.png";
import notificationsIcon from "../../../../../assets/notificationsIcon.png";
import walletIcon from "../../../../../assets/walletIcon.png";
import appleIcon from "../../../../../assets/apple.jpg";
import netflixIcon from "../../../../../assets/netflixIcon.png";
import doordashLogo from "../../../../../assets/doordashLogo.png";
import amazonLogo from "../../../../../assets/amazonLogo.jpg";
import share from "../../../../../assets/share.png";
import mappinIcon from "../../../../../assets/mappinIcon.png";

const data = {
  links: [
    {
      to: "/profile",
      icon: "userIcon",
    },
    {
      to: "/wallets",
      icon: "walletIcon",
    },
    {
      to: "/messaging",
      icon: "notificationsIcon",
    },
  ],
  notifications: [
    {
      time: "34m ago",
      imgSrc:
        "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
      name: "Katheryn Murphy",
      message:
        "OMG Dillon, you have to check out the new Somi Somi challenge, so cute and free ice cream!",
    },
  ],
  contracts: [
    {
      company: "Apple Inc",
      imgSrc: "appleIcon",
      title: "10K steps data fitness challenge",
      description:
        "Apple's steppin it up with the 10K paid challenge. Connect your Apple Watch or FitBit, get moving and start earning. Unlock content and sharing bonuses too!",
      bgImg:
        "https://www.apple.com/newsroom/images/tile-images/apple_today-at-apple-art_campaign_073019.jpg.news_app_ed.jpg",
      tags: ["Megacorp", "Shareholder Owned"],
    },
    {
      company: "Amazon",
      imgSrc: "amazonLogo",
      title: "Whole Foods nutritional data subscription request",
      description:
        "Prime delivery and Whole Foods wants to identify the healthiest foods our customers love. Subscribers get free delivery and $150 in groceries each month.",
      bgImg:
        "https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/storepages/seo/stores-og.png",
      tags: ["Megacorp", "Sustainable Oriented"],
    },
    {
      company: "Netflix",
      imgSrc: "netflixIcon",
      title: "Calling all movie watchers and data labelers",
      description:
        "Earn free subscriptions, download credits, NTFX crypto or cash for watching movies and telling us what you think. What could be better than that?",
      bgImg:
        "https://wallpapers.com/images/hd/netflix-background-6eijmcazwfrb9u6w.jpg",
      tags: ["Streaming", "Content platform"],
    },
    {
      company: "Netflix",
      imgSrc: "netflixIcon",
      title: "Movie creator challenge: Historical People Series",
      description:
        "We're seeking creators willing to join us in building a 20 part mini-series to generatively tell us, and the world, their family stories from the past, present and future.",
      bgImg:
        "https://e1.pxfuel.com/desktop-wallpaper/749/497/desktop-wallpaper-lights-background-color-rainbow-red-logo-texture-blue-lines-фон-background-netflix-netflix-effect-colors-effect-lights-section-текстуры-netflix-2021.jpg",
      tags: ["Streaming", "Content platform", "Generative"],
    },
    {
      company: "DoorDash",
      imgSrc: "doordashLogo",
      title: "Refer a friend, Earn a Free Meal",
      description:
        "Apple's steppin it up with the 10K paid challenge. Connect your Apple Watch or FitBit, get moving and start earning. Unlock content and sharing bonuses too!",
      bgImg:
        "https://maidsailors.com/wp-content/uploads/2019/05/DoorDash-Tipping-Guide-Maid-Sailors-848x480.png",
      tags: ["Megacorp", "Shareholder Owned"],
    },
  ],
  goals: [
    {
      progress: "1/4",
      title: "Make $500 today",
      deadline: "Ends 06.28.24",
      category: "personal",
      message:
        "Hey Dillon, it's June 27th. You have 24 hours to achieve your goal. Time to hustle. I have some suggestions, let's go!",
      bgImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMWhBdoRK01TXcaZcNX1bYgK-Lpw0iesEzvG-6lMn15A&s",
    },
    {
      progress: "3/7",
      title: "Learn ML & Web Coding",
      deadline: "Ends 07.31.24",
      category: "professional",
      message:
        "Python and Large Language Models (LLM) start tomorrow. I bet you're not prepared, but no worries, I'm here.",
      bgImg:
        "https://www.turingtaco.com/content/images/size/w1200/2024/03/H2O-Python-1-1.jpeg",
    },
    {
      progress: "2/6",
      title: "Learn Rock Climbing & Get Fit",
      deadline: "Ends 08.30.24",
      category: "personal",
      message:
        "We need to work on hanging arm and finger strength. Each have very different exercises and nutrition requirements. Ready for gains?",
      bgImg:
        "https://static.vecteezy.com/system/resources/thumbnails/024/769/333/small_2x/silhouette-of-a-male-climber-climbing-a-cliff-at-sunset-with-ai-generated-free-photo.jpg",
    },
  ],
  opportunities: [
    {
      title: "Wood Fire Pizza & Grill",
      description: "We're looking for shares and local video testimonials",
      offer: "Free Cheese Slices",
      bgImg:
        "https://fornopiombo.com/cdn/shop/articles/The-Best-Pizza-Dough-Recipe-for-A-Wood-Fired-Pizza-Oven.jpg?v=1650287947",
    },
    {
      title: "Sushi Ono",
      description:
        "High quality sushi photos and videos with local hashtags #sushionorocks",
      offer: "One Tuna Roll per person",
      bgImg:
        "https://www.kikkoman.eu/fileadmin/_processed_/4/2/csm_sushi-kakkoii_08ea1bf063.webp",
    },
    {
      title: "That Shwarma Fire",
      description: "Google and Yelp reviews with photos",
      offer: "1 Free Kebab",
      bgImg:
        "https://img.freepik.com/premium-photo/traditional-shawarma-authentic-turkish-doner-kebab-rolling-street-food-market_37778-1109.jpg",
    },
  ],
  connections: [
    {
      name: "Adam McCoy",
      location: "San Francisco, CA",
      role: "creator",
      imgSrc:
        "https://play-lh.googleusercontent.com/hJGHtbYSQ0nCnoEsK6AGojonjELeAh_Huxg361mVrPmzdwm8Ots-JzEH5488IS2nojI=w240-h480-rw",
    },
  ],
};

const icons: { [key: string]: string } = {
  userIcon,
  notificationsIcon,
  walletIcon,
  appleIcon,
  netflixIcon,
  doordashLogo,
  amazonLogo,
  share,
  mappinIcon,
};

const LinkItem: React.FC<{ to: string; icon: string }> = ({ to, icon }) => (
  <Link
    to={to}
    className="flex items-center justify-center h-14 w-14 p-3 bg-gray-800 rounded-full m-1 nodrag"
  >
    <img draggable="false" src={icons[icon]} alt="" />
  </Link>
);

const NotificationItem: React.FC<{
  time: string;
  imgSrc: string;
  name: string;
  message: string;
}> = ({ time, imgSrc, name, message }) => (
  <div className="tile animated inline-block px-3 ml-8 cursor-pointer">
    <div className="w-11/12 md:w-96 ml-4 mt-2 overflow-hidden rounded-3xl hover:shadow-blue-900 shadow-md mb-6 bg-gray-800 transition-shadow duration-300 ease-in-out">
      <span className="float-right text-xs text-gray-600 relative top-5 mr-4">
        {time}
      </span>
      <div className="p-4 pt-0 flex w-full">
        <div className="w-1/6">
          <img
            draggable="false"
            src={imgSrc}
            className="mr-2 mt-2 w-12 h-12 rounded-full"
            alt=""
          />
        </div>
        <div className="w-5/6 font-semibold">
          {name}
          <span className="block text-xs leading-5 font-medium">{message}</span>
        </div>
      </div>
    </div>
  </div>
);

const getColorForTag = (tag: string) => {
  switch (tag.toLowerCase()) {
    case "megacorp":
      return "blue-900";
    case "streaming":
      return "purple-900";
    case "sustainable oriented":
      return "green-700";
    case "generative":
      return "orange-800";
    default:
      return "blue-600";
  }
};

const ContractItem: React.FC<{
  company: string;
  imgSrc: string;
  title: string;
  description: string;
  bgImg: string;
  tags: string[];
  index: number; // Added index prop
}> = ({ company, imgSrc, title, description, bgImg, tags, index }) => (
  <div className={`tile animated inline-block px-3 group cursor-pointer ${index === 0 ? 'ml-8' : ''}`}>
    <div className="w-80 md:w-96 ml-4 mt-2 min-h-64 overflow-hidden rounded-3xl hover:shadow-blue-900 shadow-md mb-6 bg-gray-800 transition-shadow duration-300 ease-in-out">
      <div className="p-4">
        <div className="flex">
          <img
            draggable="false"
            src={icons[imgSrc]}
            className="mr-2 -mt-1 w-8 h-8 rounded-full"
            alt=""
          />
          {company}
        </div>
        <img
          draggable="false"
          src={icons.share}
          className="float-right relative -top-8 w-9 h-8"
          alt=""
        />
      </div>
      <div className="px-4">
        <h3 className="text-2xl mb-4 font-semibold">{title}</h3>
        <span className="text-sm text-gray-200">{description}</span>
        <button className="bg-blue-600 rounded-3xl block w-full my-4 py-3 font-bold text-sm">
          Start contract
        </button>
      </div>
      <div
        className="p-4 text-xs bg-center bg-local w-full brightness-90 group-hover:brightness-100 transition-all rounded-b-3xl bg-cover h-36"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {tags.map((tag, index) => (
          <div
            key={index}
            className={`bg-${getColorForTag(tag)} py-1 px-2 rounded-lg inline-block ml-2`}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  </div>
);


const GoalItem: React.FC<{
  progress: string;
  title: string;
  deadline: string;
  category: string;
  message: string;
  bgImg: string;
  index: number;
}> = ({ progress, title, deadline, category, message, bgImg, index }) => (
  <div className={`tile animated inline-block px-3 ${index === 0 ? 'ml-8' : ''}`}>
    <div className="w-80 group cursor-pointer pt-4 md:w-96 ml-4 mt-2 min-h-64 overflow-hidden rounded-3xl hover:shadow-blue-900 shadow-md mb-6 bg-gray-800 transition-shadow duration-300 ease-in-out">
      <div className="px-4">
        <div className="flex">
          <div className="w-1/6">
            <span className="px-2 pt-4 text-sm inline-block">{progress}</span>
          </div>
          <div className="w-5/6 text-sm text-gray-200 mb-1">
            <h3 className="text-xl font-medium">{title}</h3>
            <h4 className="text-xs text-gray-500 mb-1 font-semibold">
              {deadline}
            </h4>
            <div
              className={`bg-${
                category === "personal" ? "blue" : "purple"
              }-600 py-1 px-2 text-xs rounded-lg inline-block`}
            >
              {category}
            </div>
            <br />
            <br />
          </div>
        </div>
        <div className="flex">
          <div className="w-1/6">
            <img
              draggable="false"
              src="https://play-lh.googleusercontent.com/hJGHtbYSQ0nCnoEsK6AGojonjELeAh_Huxg361mVrPmzdwm8Ots-JzEH5488IS2nojI=w240-h480-rw"
              className="w-10 h-10 rounded-full inline-block"
              alt=""
            />
          </div>
          <span className="w-5/6 text-sm text-gray-300 mb-1">{message}</span>
        </div>
      </div>
      <div
        className="p-4 mt-2 text-xs bg-center bg-local w-full brightness-90 group-hover:brightness-100 transition-all rounded-b-3xl bg-cover h-44"
        style={{ backgroundImage: `url(${bgImg})` }}
      />
    </div>
  </div>
);

const OpportunityItem: React.FC<{
  title: string;
  description: string;
  offer: string;
  bgImg: string;
  index: number;
}> = ({ title, description, offer, bgImg, index }) => (
  <div className={`tile animated inline-block px-3 group cursor-pointer ${index === 0 ? 'ml-8' : ''}`}>
    <div className="w-80 pt-4 md:w-96 ml-4 mt-2 min-h-64 overflow-hidden rounded-3xl mb-6 transition-shadow duration-300 ease-in-out">
      <div
        className="p-4 mb-2 text-xs bg-center bg-local w-full rounded-3xl bg-cover group-hover:shadow-blue-900 shadow-md brightness-90 group-hover:brightness-100 transition-all h-56"
        style={{ backgroundImage: `url(${bgImg})` }}
      />
      <div className="px-4">
        <h3 className="text-base font-semibold">{title}</h3>
        <span className="w-5/6 text-sm text-gray-300 mb-1">{description}</span>
        <a href="/network" className="m-0 text-sm">
          {offer}
        </a>
      </div>
    </div>
  </div>
);

const ConnectionItem: React.FC<{
  name: string;
  location: string;
  role: string;
  imgSrc: string;
  index: number;
}> = ({ name, location, role, imgSrc, index }) => (
  <div className={`tile animated inline-block px-3 ${index === 0 ? 'ml-8' : ''}`}>
    <div className="p-4 w-96 ml-4 mt-2 overflow-hidden rounded-3xl hover:shadow-blue-900 shadow-md mb-6 bg-gray-900 transition-shadow duration-300 ease-in-out">
      <div className="px-4">
        <div className="flex mt-4">
          <div className="w-3/8">
            <div className="rounded-lg w-32 h-36 border p-px">
              <img
                draggable="false"
                src={imgSrc}
                className="rounded-lg w-32 h-36 inline-block relative -top-3 -left-2"
                alt=""
              />
            </div>
          </div>
          <div className="w-5/8 text-sm text-gray-200 mb-1 ml-4">
            <h3 className="text-lg font-semibold">{name}</h3>
            <h4 className="text-xs mb-1">
              <div className="rounded-full w-3 inline-block h-3 m-0 mr-1 mt-0">
                <img
                  draggable="false"
                  className=""
                  src={icons.mappinIcon}
                  alt=""
                />
              </div>
              {location}
            </h4>
            <div>
              <div className="bg-red-200 text-black py-1 inline-block mt-4 px-2 text-xs rounded-lg">
                {role}
              </div>
              <Link
                to="/network"
                className="float-right items-center mt-2 justify-center h-10 w-10 p-4 pt-2 bg-gray-800 rounded-2xl m-0 nodrag"
              >
                +
              </Link>
            </div>
            <br />
            <br />
            <div className="flex justify-end space-x-2 -mt-4">
              {data.links.map((link, index) => (
                <Link
                  key={index}
                  to="/network"
                  className="flex items-center justify-center h-10 w-10 p-3 bg-gray-800 rounded-full m-0 nodrag"
                >
                  <img draggable="false" src={icons[link.icon]} alt="" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

function NetworkPage() {
  return (
    <div className="select-none h-screen overflow-y-auto pb-40">
      <div className="mx-auto mt-2 w-full relative">
        <div className="fadeIn flex justify-end space-x-2 mt-10 mr-4">
          {data.links.map((link, index) => (
            <LinkItem key={index} to={link.to} icon={link.icon} />
          ))}
          <div className="fadeIn bg-red-500 pt-1 pl-2 rounded-full w-6 h-6 relative -left-5 text-xs font-medium">
            3
          </div>
        </div>
        <h1 className="text-4xl font-bold pl-16 fadeIn">Network</h1>
        <div className="py-1 nodrag">
          <h2 className="text-xl pl-16 font-medium mt-4 fadeIn">
            Notifications
          </h2>
          <Link
            to="/contracts"
            className="float-right -mt-4 text-xs pr-6 fadeIn mr-8"
          >
            View All
          </Link>
          <div className="flex overflow-x-scroll pb-2 hide-scroll-bar w-full">
            <div className="flex flex-nowrap">
              {data.notifications.map((notification, index) => (
                <NotificationItem key={index} {...notification} />
              ))}
            </div>
          </div>
        </div>
        <div className="py-1 nodrag">
          <h2 className="text-xl pl-16 font-medium mt-4 fadeIn">Contracts</h2>
          <Link
            to="/contracts"
            className="float-right -mt-4 text-xs pr-6 fadeIn mr-8"
          >
            View All
          </Link>
          <div className="flex overflow-x-scroll pb-2 hide-scroll-bar w-full">
            <div className="flex flex-nowrap">
              {data.contracts.map((contract, index) => (
                <ContractItem key={index} {...contract} index={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="py-1 nodrag">
          <h2 className="scrollInBig text-xl pl-16 font-medium mt-4">Goals</h2>
          <Link
            to="/contracts"
            className="scrollInBig float-right -mt-4 text-xs pr-6 fadeIn mr-8"
          >
            View All
          </Link>
          <div className="scrollInBig flex overflow-x-scroll pb-2 hide-scroll-bar w-full">
            <div className="flex flex-nowrap">
              {data.goals.map((goal, index) => (
                <GoalItem key={index} {...goal} index={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="py-1 nodrag">
          <h2 className="scrollInBig text-xl pl-16 font-medium mt-4">
            Local Opportunities
          </h2>
          <div className="scrollInBig mx-6 rounded-3xl block bg-gradient-to-r from-gray-500 bg-gray-700 p-px my-6 ml-14">
            <div className="flex rounded-3xl p-6 bg-gradient-to-l from-slate-900 bg-gray-800 text-sm leading-6">
              <div className="border rounded-full p-2 w-10 h-10 m-0 mr-4 mt-1 border-px border-gray-500">
                <img
                  draggable="false"
                  className=""
                  src={icons.mappinIcon}
                  alt=""
                />
              </div>
              <div>
                San Francisco, CA
                <br />
                <div className="text-xs">
                  Carrier: Verizon Networks | IP: 99.000.123.45
                </div>
              </div>
            </div>
          </div>
          <div className="scrollInBig flex overflow-x-scroll pb-2 hide-scroll-bar w-full">
            <div className="flex flex-nowrap">
              {data.opportunities.map((opportunity, index) => (
                <OpportunityItem key={index} {...opportunity} index={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="py-1 nodrag">
          <h2 className="scrollInBig text-xl pl-16 font-medium mt-4">Connections</h2>
          <div className="scrollInBig flex overflow-x-scroll pb-2 hide-scroll-bar w-full">
            <div className="flex flex-nowrap">
              {data.connections.map((connection, index) => (
                <ConnectionItem key={index} {...connection} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NetworkPage;
