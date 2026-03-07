import profileImg from "../assets/profileImg.jpg";
import home from "../assets/home.png";
import bill from "../assets/bill.png";
import userManegment from "../assets/user-ranking.png";
import webinars from "../assets/webinars.png";
import setting from "../assets/setting.png";
import { useState } from "react";

export const ParentSideBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen">
      <div
        className={`
              bg-white shadow-lg
              transition-all duration-300 ease-in-out
              ${sidebarOpen ? "w-64" : "w-14"}
              overflow-hidden
            `}
      >
        {sidebarOpen ? <OpenSide /> : <CloseSide />}
      </div>
      <div className="flex-1 flex flex-col">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="m-4 w-10 h-10 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition cursor-pointer"
        >
          {sidebarOpen ? "←" : "→"}
        </button>
      </div>
    </div>
  );
};

export const OpenSide = () => {
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <Navigation name="Home" iconLink={home} />
      <Navigation name="webinars" iconLink={webinars} />
      <Navigation name="bill" iconLink={bill} />
      <Navigation name="user-Manegment" iconLink={userManegment} />
      <Navigation name="setting" iconLink={setting} />
    </div>
  );
};

export const CloseSide = () => {
  return (
    <div className=" text-center">
      <div className="border-b mb-10 p-2 pt-4 pb-4">
        <img
          src={profileImg}
          alt="profile-img"
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-10 items-center">
        <img
          src={home}
          alt="icon"
          className="h-7 w-7 cursor-pointer hover:bg-gray-200"
        />
        <img
          src={webinars}
          alt="icon"
          className="h-7 w-7 cursor-pointer hover:bg-gray-200"
        />
        <img
          src={bill}
          alt="icon"
          className="h-7 w-7 cursor-pointer hover:bg-gray-200"
        />
        <img
          src={userManegment}
          alt="icon"
          className="h-7 w-7 cursor-pointer hover:bg-gray-200"
        />
        <img
          src={setting}
          alt="icon"
          className="h-7 w-7 cursor-pointer hover:bg-gray-200"
        />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <p className="font-bold text-lg whitespace-nowrap">Webinar</p>
      <img
        src={profileImg}
        alt="profile-img"
        className="h-10 w-10 rounded-full object-cover"
      />
    </div>
  );
};

const Navigation = ({ name, iconLink }) => {
  return (
    <div className="flex justify-between w-55 m-auto hover:bg-gray-200 rounded px-2 py-1 cursor-pointer">
      <p className="text-md text-grey-200">{name}</p>
      <img src={iconLink} alt="icon" className="h-7 w-7" />
    </div>
  );
};
