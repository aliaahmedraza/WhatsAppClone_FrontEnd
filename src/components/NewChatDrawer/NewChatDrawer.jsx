import React from "react";
import { Drawer } from "antd";
import newChatDrawerStore from "../../ZustandStore/NewChatDrawerStore/NewChatDrawerStore";
import "./NewChatDrawer.css";
import Search from "../Search/Search";
import NewGroup from "../../assets/svg/NewGroup";
import NewCommunity from "../../assets/svg/NewCommunity";

const NewChatDrawer = () => {
  const { open, setOpen } = newChatDrawerStore();
  const [isClosing, setIsClosing] = React.useState(false);

  const onClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const BackArrowIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="text-white hover:bg-[#374248] rounded-[50%] hover:cursor-pointer "
    >
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
  const personDetail = [
    {
      src: "/profile.png",
      name: "Ali",
      about: "I'm busy",
    },
    {
      src: "/profile.png",
      name: "Ahmed",
      about: "I'm busy",
    },
    {
      src: "/profile.png",
      name: "Raza",
      about: "I'm busy",
    },
    {
      src: "/profile.png",
      name: "Ali",
      about: "I'm busy",
    },
    {
      src: "/profile.png",
      name: "Ali",
      about: "I'm busy",
    },
    {
      src: "/profile.png",
      name: "Ali",
      about: "I'm busy",
    },
    {
      src: "/profile.png",
      name: "Ali",
      about: "I'm busy",
    },
    {
      src: "/profile.png",
      name: "Ali",
      about: "I'm busy",
    },
    {
      src: "/profile.png",
      name: "Ali",
      about: "I'm busy",
    },
    {
      src: "/profile.png",
      name: "Ali",
      about: "I'm busy",
    },
    {
      src: "/profile.png",
      name: "Ali",
      about: "I'm busy",
    },
  ];
  return (
    <div className="relative h-full w-full overflow-hidden">
      {open && (
        <Drawer
          key={open ? "open" : "closed"}
          title={
            <div
              style={{
                color: "#fafafa",
                fontSize: "15px",
                marginLeft: "11px",
                fontWeight: "400px",
              }}
            >
              New Chat
            </div>
          }
          placement="left"
          closable={true}
          onClose={onClose}
          open={open}
          getContainer={false}
          width={"100%"}
          closeIcon={<BackArrowIcon />}
          style={{
            backgroundColor: "#161717",
          }}
          bodyStyle={{
            padding: "0px",
          }}
          headerStyle={{
            padding: "20px",
            overflow: "hidden",
            marginTop: "20px",
          }}
          className={isClosing ? "drawer-slide-left-close" : ""}
        >
          <div className="h-full overflow-y-auto custom-scrollbar">
            <div className="mx-[20px]">
              <Search placeHolder={"Search name or number"} />
            </div>
            <div className="mx-[12px]">
              <div>
                <div
                  className={`bg-[#161717] flex items-center h-18 rounded-lg px-[8px]`}
                >
                  <div className="h-12 w-12 rounded-[50%] p-3 bg-green-400">
                    <NewGroup />
                  </div>
                  <div className="flex justify-center items-center ml-4">
                    <h1 className="text-[#E9EDEF] text-lg">New Group</h1>
                  </div>
                </div>
                <div
                  className={`bg-[#161717] flex items-center h-18 rounded-lg px-[8px]`}
                >
                  <div className="h-12 w-12 rounded-[50%] p-3 bg-green-400">
                    <NewCommunity />
                  </div>
                  <div className="flex justify-center items-center ml-4">
                    <h1 className="text-[#E9EDEF] text-lg">New Community</h1>
                  </div>
                </div>
                <div
                  className={`bg-[#161717] flex items-center h-18 rounded-lg px-[8px]`}
                >
                  <div className="flex justify-center items-center">
                    <h1 className="text-[#A2A2A2] text-lg font-bold">
                      Contacts on WhatsApp
                    </h1>
                  </div>
                </div>
                <div
                  className={`bg-[#161717] flex items-center h-18 rounded-lg px-[8px]`}
                >
                  <div className="pb-2">
                    <img
                      src={"/profile.png"}
                      className="h-10 w-11 rounded-[50%]"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5 w-full justify-center pb-2 ml-4">
                    <div className="flex justify-between items-center">
                      <h1 className="text-[#E9EDEF] font-bold text-md">
                        Ali Ahmed(you)
                      </h1>
                    </div>
                    <div className="text-[#8696A0] text-md">
                      Message youself
                    </div>
                  </div>
                </div>
                <div
                  className={`bg-[#161717] flex items-center h-18 rounded-lg px-[8px]`}
                >
                  <div className="flex justify-center items-center">
                    <h1 className="text-[#A2A2A2] text-lg font-bold">#</h1>
                  </div>
                </div>
              </div>
              <div className="h-[100vh] px-[8px]">
                {personDetail.map((details, i) => (
                  <div
                    key={i}
                    className={`bg-[#161717] flex items-center h-18 rounded-lg`}
                  >
                    <div className=" pb-2">
                      <img
                        src={details.src}
                        className="h-10 w-11 rounded-[50%]"
                      />
                    </div>
                    <div className="flex flex-col gap-0.5 w-full justify-center pb-2 ml-4">
                      <div className="flex justify-between items-center">
                        <h1 className="text-[#E9EDEF] font-bold text-md">
                          {details.name}
                        </h1>
                      </div>
                      <div className="text-[#8696A0] text-md">
                        {details.about}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Drawer>
      )}
    </div>
  );
};

export default NewChatDrawer;
