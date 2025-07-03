import React from "react";
import NewChatIcon from "../../assets/svg/NewChatIcon";
import MenuIcon from "../../assets/svg/MenuIcon";
import Search from "../Search/Search";
import ArchievedIcon from "../../assets/svg/ArchievedIcon";
import ChatByPerson from "../ChatByPerson/ChatByPerson";
import "./Chat.css";
import newChatDrawerStore from "../../ZustandStore/NewChatDrawerStore/NewChatDrawerStore";
import NewChatDrawer from "../NewChatDrawer/NewChatDrawer";

const Chat = ({ setSelectedPerson }) => {
  const [selectedIcon, setSelectedIcon] = React.useState("");
  const [selectedButton, setSelectedButton] = React.useState("All");
  const [searchPlaceHolder, setSearchPlaceHolder] = React.useState("Search");
  const { open } = newChatDrawerStore();
  const buttons = ["All", "Unreads", "Favorites", "Groups"];
  return (
    <div className="h-screen overflow-hidden border-r-[1px] border-[#23282b]">
      {open === true ? (
        <NewChatDrawer />
      ) : (
        <div className="container h-full w-full flex flex-col bg-[#161717] text-[#E9EDEF] pr-[2px]">
          <div className="px-4 pt-4 pb-2">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0">
              <h1 className="font-bold text-xl sm:text-2xl">WhatsApp</h1>
              <div className="flex gap-3 sm:gap-5 items-center">
                <div
                  onClick={() => setSelectedIcon("newChat")}
                  className={`flex items-center justify-center rounded-full h-9 w-9 cursor-pointer transition-colors ${
                    selectedIcon === "newChat"
                      ? "bg-[#374248] text-[#AEBAC1]"
                      : "text-[#AEBAC1]"
                  }`}
                >
                  <NewChatIcon />
                </div>
                <div
                  onClick={() => setSelectedIcon("menu")}
                  className={`flex items-center justify-center rounded-full h-9 w-9 cursor-pointer transition-colors ${
                    selectedIcon === "menu"
                      ? "bg-[#374248] text-[#AEBAC1]"
                      : "text-[#AEBAC1]"
                  }`}
                >
                  <MenuIcon />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Search placeHolder={searchPlaceHolder} />
            </div>
            <div className="flex gap-2 mt-3">
              {buttons.map((btn, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setSearchPlaceHolder(
                      btn === "All" ? "Search" : `Search ${btn} chats`
                    );
                    setSelectedButton(btn);
                  }}
                  className={`rounded-2xl px-3 py-1.5 text-sm font-medium transition-colors ${
                    selectedButton === btn
                      ? "bg-[#005C4B] text-[#8696A0]"
                      : "bg-[#161717] text-[#8696A0] border border-[#343636]"
                  }`}
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>
          <div className="overflow-y-auto px-4 pt-2 custom-scrollbar">
            <div className="flex items-center gap-2 mb-5 mt-2 ml-3">
              <ArchievedIcon />
              <h2 className="text-base font-semibold ml-2">Archived</h2>
            </div>
            <ChatByPerson setSelectedPerson={setSelectedPerson} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
