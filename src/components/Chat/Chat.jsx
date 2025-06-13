import React from "react";
import NewChatIcon from "../../assets/svg/NewChatIcon";
import MenuIcon from "../../assets/svg/MenuIcon";
import Search from "../Search/Search";
import ArchievedIcon from "../../assets/svg/ArchievedIcon";
// import ChatByPerson from "../ChatByPerson/ChatByPerson";

const Chat = () => {
  const [selectedIcon, setSelectedIcon] = React.useState("");
  const [selectedButton, setSelectedButton]= React.useState("All")
  const buttons = ["All", "Unreads", "Favorites", "Groups"];
  return (
    <div className="container h-full w-full">
      <div className="h-1/6">
        <div className="flex justify-between items-center h-1/3 mx-3">
          <div className="text-[#E9EDEF]">
            <h1 className="font-bold text-2xl">Chats</h1>
          </div>
          <div className="flex gap-5 items-center">
            <div
              onClick={() => setSelectedIcon("newChat")}
              onDoubleClick={() => setSelectedIcon("")}
              className={`flex items-center justify-center rounded-[50%] h-9 w-9 cursor-pointer transition-colors ${
                selectedIcon === "newChat"
                  ? "bg-[#374248] text-[#AEBAC1]"
                  : "text-[#AEBAC1] "
              }`}
            >
              <NewChatIcon />
            </div>
            <div
              onClick={() => setSelectedIcon("menu")}
              onDoubleClick={() => setSelectedIcon("")}
              className={`flex items-center justify-center rounded-[50%] h-9 w-9 cursor-pointer transition-colors ${
                selectedIcon === "menu"
                  ? "bg-[#374248] text-[#AEBAC1]"
                  : "text-[#AEBAC1] "
              }`}
            >
              <MenuIcon />
            </div>
          </div>
        </div>
        <div>
          <Search placeHolder="Search" />
        </div>
        <div className="flex gap-2.5 h-1/3 mx-3 items-center">
          {buttons.map((btn, i) => (
            <div key={i}>
              <button
                onClick={() => setSelectedButton(btn)}
                className={`rounded-2xl h-9 p-2  text-sm flex items-center justify-center ${
                  selectedButton === btn
                    ? "bg-[#005C4B] text-[#8696A0]"
                    : "bg-[#202C33] text-[#8696A0]"
                }`}
              >
                {btn}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-x-auto mt-4">
        <div className="flex mx-5 gap-4">
          <ArchievedIcon />
          <h1 className="text-[#E9EDEF] border-b-[#374248] border-b-1 w-full pb-5">
            Archieved
          </h1>
        </div>
        <div>
          {/* <ChatByPerson/> */}
        </div>
      </div>
    </div>
  );
};

export default Chat;
