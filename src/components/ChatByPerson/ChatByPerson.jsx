import React from "react";
import personStore from "../../ZustandStore/PersonStore/PersonStore";
const ChatByPerson = () => {
  const [activeChat, setActiveChat] = React.useState(null);
  const { setPerson } = personStore();
  const personChatDetail = [
    {
      src: "/profile.png",
      name: "Ali",
      message: "Hi ali how are you? Whats up today?",
      time: "12:00 AM",
    },
    {
      src: "/profile.png",
      name: "Ahmed",
      message: "Hi ali how are you Whats up today?",
      time: "12:00 AM",
    },
    {
      src: "/profile.png",
      name: "Raza",
      message: "Hi ali how are you Whats up today?",
      time: "12:00 AM",
    },
    {
      src: "/profile.png",
      name: "Ali",
      message: "Hi ali how are you Whats up today?",
      time: "12:00 AM",
    },
    {
      src: "/profile.png",
      name: "Ali",
      message: "Hi ali how are you Whats up today?",
      time: "12:00 AM",
    },
    {
      src: "/profile.png",
      name: "Ali",
      message: "Hi ali how are you Whats up today?",
      time: "12:00 AM",
    },
    {
      src: "/profile.png",
      name: "Ali",
      message: "Hi ali how are you Whats up today?",
      time: "12:00 AM",
    },
    {
      src: "/profile.png",
      name: "Ali",
      message: "Hi ali how are you Whats up today?",
      time: "12:00 AM",
    },
    {
      src: "/profile.png",
      name: "Ali",
      message: "Hi ali how are you Whats up today?",
      time: "12:00 AM",
    },
    {
      src: "/profile.png",
      name: "Ali",
      message: "Hi ali how are you Whats up today?",
      time: "12:00 AM",
    },
    {
      src: "/profile.png",
      name: "Ali",
      message: "Hi ali how are you Whats up today?",
      time: "12:00 AM",
    },
    {
      src: "/profile.png",
      name: "Ali",
      message: "Hi ali how are you Whats up today?",
      time: "12:00 AM",
    },
    {
      src: "/profile.png",
      name: "Ali",
      message: "Hi ali how are you Whats up today?",
      time: "12:00 AM",
    },
    {
      src: "/profile.png",
      name: "Ali",
      message: "Hi ali how are you Whats up today?",
      time: "12:00 AM",
    },
    {
      src: "/profile.png",
      name: "Ali",
      message: "Hi ali how are you Whats up today?",
      time: "12:00 AM",
    },
    {
      src: "/profile.png",
      name: "Ali",
      message: "Hi ali how are you Whats up today?",
      time: "12:00 AM",
    },
    {
      src: "/profile.png",
      name: "Ali",
      message: "Hi ali how are you Whats up today?",
      time: "12:00 AM",
    },
    {
      src: "/profile.png",
      name: "Ali",
      message: "Hi ali how are you Whats up today?",
      time: "12:00 AM",
    },
    {
      src: "/profile.png",
      name: "Ali",
      message: "Hi ali how are you Whats up today?",
      time: "12:00 AM",
    },
    {
      src: "/profile.png",
      name: "Ali",
      message: "Hi ali how are you Whats up today?",
      time: "12:00 AM",
    },
  ];

  return (
    <div className="h-[100vh] w-full mt-2">
      {personChatDetail.map((details, i) => (
        <div
          key={i}
          className={`${
            activeChat === i
              ? "bg-[#2E2F2F] flex items-center h-18 rounded-lg"
              : "flex items-center h-18 hover:bg-[#232424] hover:rounded-lg"
          } `}
          onClick={() => {
            setPerson(details);
            setActiveChat(i);
          }}
        >
          <div className=" pb-3">
            <img src={details.src} className="h-10 w-11 rounded-[50%]" />
          </div>
          <div className="flex flex-col gap-1 w-full justify-center pb-2 ml-4">
            <div className="flex justify-between items-center">
              <h1 className="text-[#E9EDEF]">{details.name}</h1>
              <p className="text-[#8696A0] pr-3 text-[12px]">{details.time}</p>
            </div>
            <div className="text-[#8696A0] text-sm">{details.message}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatByPerson;
