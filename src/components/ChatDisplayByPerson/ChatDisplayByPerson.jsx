import React from "react";
import WhatsAppWebIcon from "../../assets/svg/WhatsAppWebIcon";
import LockIcon from "../../assets/svg/LockIcon";
import MenuIcon from "../../assets/svg/MenuIcon";
import SearchIcon from "../../assets/svg/SearchIcon";
import "../Chat/Chat.css";
import ChatInput from "../ChatInputField/ChatInputField";
const ChatDisplayByPerson = ({ selectedPerson }) => {
  const messages = [
    { text: "Hi", isMe: true, time: "12:00 AM" },
    { text: "Hello", isMe: false, time: "12:00 AM" },
    {
      text: "How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you?",
      isMe: true,
      time: "12:00 AM",
    },
    { text: "I'm fine, thanks!", isMe: false, time: "12:00 AM" },
    { text: "What's up?", isMe: true, time: "12:00 AM" },
    { text: "Hi", isMe: true, time: "12:00 AM" },
    { text: "Hello", isMe: false, time: "12:00 AM" },
    {
      text: "How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you?",
      isMe: true,
      time: "12:00 AM",
    },
    { text: "I'm fine, thanks!", isMe: false, time: "12:00 AM" },
    { text: "What's up?", isMe: true, time: "12:00 AM" },
    { text: "Hi", isMe: true, time: "12:00 AM" },
    { text: "Hello", isMe: false, time: "12:00 AM" },
    {
      text: "How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you?",
      isMe: true,
      time: "12:00 AM",
    },
    { text: "I'm fine, thanks!", isMe: false, time: "12:00 AM" },
    { text: "What's up?", isMe: true, time: "12:00 AM" },
    { text: "Hi", isMe: true, time: "12:00 AM" },
    { text: "Hello", isMe: false, time: "12:00 AM" },
    {
      text: "How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you?",
      isMe: true,
      time: "12:00 AM",
    },
    { text: "I'm fine, thanks!", isMe: false, time: "12:00 AM" },
    { text: "What's up?", isMe: true, time: "12:00 AM" },
  ];
  return (
    <div className=" h-[100vh]">
      {selectedPerson ? (
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between px-3 py-2 min-h-[56px]">
            <div className="flex items-center gap-2 sm:gap-3">
              <img
                src={selectedPerson?.src}
                alt="Profile"
                className="h-9 w-9 sm:h-11 sm:w-11 rounded-full object-cover"
              />
              <h1 className="text-white text-sm sm:text-base font-medium truncate max-w-[150px] sm:max-w-[200px]">
                {selectedPerson?.name}
              </h1>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 text-white">
              <SearchIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              <MenuIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          </div>
          <div className="bg-[url('/bg.webp')] bg-cover w-full h-[100vh] flex flex-col opacity-80 overflow-hidden">
            <div className="flex-1 overflow-y-auto custom-scrollbar mr-[2px] p-4 flex flex-col ">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`w-fit max-w-[70%] p-3 rounded-lg text-[#E9EDEF] ${
                    msg.isMe
                      ? "bg-[#124D38] self-end rounded-br-none m-1"
                      : "bg-[#242626] self-start rounded-bl-none m-1"
                  }`}
                >
                  {msg.text}
                  <p className="text-[10px] flex justify-end">{msg.time}</p>
                </div>
              ))}
            </div>
            <ChatInput />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center h-full">
          <div className="flex flex-col gap-4 justify-center items-center h-full">
            <WhatsAppWebIcon />
            <div className="text-[#E9EDEF] text-3xl mt-6 font-light">
              WhatsApp Web
            </div>
            <div className="text-[#8D9599] flex flex-col items-center text-sm md:flex-wrap">
              <h1>
                Sends and receive messages without keeping your phone online.
              </h1>
              <h1>
                Use WhatsApp on up to 4 linked devices and 1 phone at the same
                time.
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-2 pb-8 text-sm">
            <LockIcon />
            <h1 className="text-[#667781]">
              Your personal messages are end-to-end encrypted
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatDisplayByPerson;
