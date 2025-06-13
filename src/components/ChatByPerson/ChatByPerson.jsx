import React from "react";

const ChatByPerson = () => {
  const personChatDetail = [
    { src: "/profile.png", name: "Ali", message: "Hi", time: "12am" },
    { src: "/profile.png", name: "Ali", message: "Hi", time: "12am" },
    { src: "/profile.png", name: "Ali", message: "Hi", time: "12am" },
    { src: "/profile.png", name: "Ali", message: "Hi", time: "12am" },
    { src: "/profile.png", name: "Ali", message: "Hi", time: "12am" },
  ];
  return (
    <div className="h-full w-full">
      {personChatDetail.map((details, i) => (
        <div key={i} className="flex mx-3 gap-2 items-center h-24">
          <div>
            <img src={details.src} className="h-10 w-11 rounded-[50%]" />
          </div>
          <div className="flex flex-col gap-1 border-t-[#374248] border-t-1 w-full mr-2">
            <div className="flex justify-between">
              <h1>{details.name}</h1>
              <p>{details.time}</p>
            </div>
            <div>{details.message}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatByPerson;
