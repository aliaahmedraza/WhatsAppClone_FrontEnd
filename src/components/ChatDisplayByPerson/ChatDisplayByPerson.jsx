import React from "react";
import WhatsAppWebIcon from "../../assets/svg/WhatsAppWebIcon";
import LockIcon from "../../assets/svg/LockIcon";
const ChatDisplayByPerson = () => {
  return (
    <div className="flex flex-col items-center h-full">
      <div className="flex flex-col gap-4 justify-center items-center h-full">
        <WhatsAppWebIcon />
        <div className="text-[#E9EDEF] text-3xl mt-6 font-light">WhatsApp Web</div>
        <div className="text-[#8D9599] flex flex-col items-center text-sm">
          <h1>Sends and receive messages without keeping your phone online.</h1>
          <h1>
            Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-2 pb-8 text-sm">
        <LockIcon />
        <h1 className="text-[#667781]">
          Your personal messages are enet-to-end encrypted
        </h1>
      </div>
    </div>
  );
};

export default ChatDisplayByPerson;
