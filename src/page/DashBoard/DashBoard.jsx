import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import Chat from "../../components/Chat/Chat";
import Status from "../../components/Status/Status";
import Channel from "../../components/Channels/Channel";
import Groups from "../../components/Groups/Groups";
import MetaAi from "../../components/MetaAi/MetaAi";
import Setting from "../../components/Settings/Setting";
import Profile from "../../components/Profile/Profile";

const DashBoard = () => {
  const [activeTab, setActiveTab] = React.useState("");
  const renderComponent = () => {
    switch (activeTab) {
      case "chats":
        return <Chat />;
      case "status":
        return <Status />;
      case "channels":
        return <Channel />;
      case "groups":
        return <Groups />;
      case "ai":
        return <MetaAi />;
      case "settings":
        return <Setting />;
      case "profile":
        return <Profile />;
    }
  };
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-5">
      <div className="flex flex-row md:flex-row h-[900px]">
        <div className="border-r-2 border-r-[#374248] w-full md:w-18 h-1/2 md:h-full lg:w-18 flex items-center justify-center bg-[#202C33]">
          <SideBar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="bg-[#111B21] w-full md:w-1/3 lg:w-2/5 h-1/2 md:h-full flex items-center justify-center">
          {renderComponent()}
        </div>
        <div className="bg-[#202C33] w-full md:w-2/3 lg:w-3/4 h-1/2 md:h-full flex items-center justify-center">
          Raza
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
