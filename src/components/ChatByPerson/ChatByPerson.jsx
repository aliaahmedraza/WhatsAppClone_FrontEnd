import React from "react";

const ChatByPerson = () => {
  const personChatDetail = [
    { src: "/profile.png", name: "Ali", message: "Hi", time: "12 AM" },
    { src: "/profile.png", name: "Ali", message: "Hi", time: "12 AM" },
    { src: "/profile.png", name: "Ali", message: "Hi", time: "12 AM" },
    { src: "/profile.png", name: "Ali", message: "Hi", time: "12 AM" },
    { src: "/profile.png", name: "Ali", message: "Hi", time: "12 AM" },
    { src: "/profile.png", name: "Ali", message: "Hi", time: "12 AM" },
    { src: "/profile.png", name: "Ali", message: "Hi", time: "12 AM" },
    { src: "/profile.png", name: "Ali", message: "Hi", time: "12 AM" },
    { src: "/profile.png", name: "Ali", message: "Hi", time: "12 AM" },
    { src: "/profile.png", name: "Ali", message: "Hi", time: "12 AM" },
    { src: "/profile.png", name: "Ali", message: "Hi", time: "12 AM" },
    { src: "/profile.png", name: "Ali", message: "Hi", time: "12 AM" },
    { src: "/profile.png", name: "Ali", message: "Hi", time: "12 AM" },
    { src: "/profile.png", name: "Ali", message: "Hi", time: "12 AM" },
    { src: "/profile.png", name: "Ali", message: "Hi", time: "12 AM" },
    { src: "/profile.png", name: "Ali", message: "Hi", time: "12 AM" },
    { src: "/profile.png", name: "Ali", message: "Hi", time: "12 AM" },
    { src: "/profile.png", name: "Ali", message: "Hi", time: "12 AM" },
    { src: "/profile.png", name: "Ali", message: "Hi", time: "12 AM" },
    { src: "/profile.png", name: "Ali", message: "Hi", time: "12 AM" },
  ];
  return (
    <div className="h-full w-full mt-2">
      {personChatDetail.map((details, i) => (
        <div key={i} className="flex mx-3 items-center h-18">
          <div className="pb-3">
            <img src={details.src} className="h-10 w-11 rounded-[50%]" />
          </div>
          <div className="flex flex-col gap-1 border-b-[#374248] border-b-1 w-full justify-center pb-2 ml-4">
            <div className="flex justify-between items-center">
              <h1 className="text-[#E9EDEF]">{details.name}</h1>
              <p className="text-[#8696A0] pr-3 text-sm">{details.time}</p>
            </div>
            <div className="text-[#8696A0] text-sm">{details.message}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatByPerson;
