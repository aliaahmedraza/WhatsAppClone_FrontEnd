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
// import LoadingScreen from "../../components/Loading/Loading";
const DashBoard = ({}) => {
  const [activeTab, setActiveTab] = React.useState("chats");
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
    <div className="h-screen">
      <div className="flex h-full">
        <div className="border-b-2 md:border-b-0 md:border-r-2 border-[#374248] md:w-[8%] lg:w-[6%] xl:w-[4%] 2xl:w-[4%] flex items-center justify-center bg-[#1D1F1F]">
          <SideBar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="bg-[#161717] w-[80%] md:w-[50%] lg:w-[45%] xl:w-[30%] h-[100vh] md:h-full overflow-y-auto">
          {renderComponent()}
        </div>
        <div className="bg-[#161717] w-full 2xl:w-[75%] md:w-[57%] lg:w-[64%] xl:w-[71%] h-[100vh] md:h-full overflow-y-auto">
          <ChatDisplayByPerson />
        </div>
      </div>
    </div>
    // <LoadingScreen/>
  );
};

export default DashBoard;
