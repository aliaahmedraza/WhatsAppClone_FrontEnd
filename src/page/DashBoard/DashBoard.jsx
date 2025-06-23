import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import Chat from "../../components/Chat/Chat";
import Status from "../../components/Status/Status";
import Channel from "../../components/Channels/Channel";
import Groups from "../../components/Groups/Groups";
import MetaAi from "../../components/MetaAi/MetaAi";
import Setting from "../../components/Settings/Setting";
import Profile from "../../components/Profile/Profile";
import ChatDisplayByPerson from "../../components/ChatDisplayByPerson/ChatDisplayByPerson";


const DashBoard = ({ }) => {
  const [activeTab, setActiveTab] = React.useState("chats");
  const [selectedPerson, setSelectedPerson] = React.useState(null);
  const renderComponent = () => {
    switch (activeTab) {
      case "chats":
        return <Chat setSelectedPerson={setSelectedPerson} />;
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
    <div className="h-100vh">
      <div className="flex flex-row md:flex-row h-[100vh]">
        <div className="border-r-2 border-r-[#374248] w-full md:w-18 h-1/2 md:h-full lg:w-18 flex items-center justify-center bg-[#1D1F1F]">
          <SideBar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="bg-[#161717] w-full md:w-1/3 lg:w-2/7 h-1/2 md:h-full">
          {renderComponent()}
        </div>
        <div className="bg-[#161717] w-full md:w-2/3 lg:w-3/4 h-1/2 md:h-full">
          <ChatDisplayByPerson selectedPerson={selectedPerson} />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
