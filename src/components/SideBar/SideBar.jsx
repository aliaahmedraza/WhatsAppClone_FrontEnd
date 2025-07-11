import React from "react";
import NavIcon from "../../assets/svg/SideBarIconWrapper";
import MessageIcon from "../../assets/svg/MessageIcon";
import WhatsAppChannelIcon from "../../assets/svg/WhatsAppChannelIcon";
import WhatsAppGroupIcon from "../../assets/svg/WhatsAppGroupIcon";
import WhatsAppStatusIcon from "../../assets/svg/WhatsAppStatusIcon";
import MetaAiIcon from "../../assets/svg/MetaAiIcon";
import SettingIcon from "../../assets/svg/SettingIcon";
import ProfileIcon from "../../assets/svg/ProfileIcon";
import { useNavigate } from "react-router-dom";
import AuthStore from "../../ZustandStore/AuthStore/AuthStore";

const SideBar = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();
  const { logout } = AuthStore();

  return (
    <div className="h-svh flex flex-col justify-between pt-3 pb-5">
      <div className="flex flex-col gap-5 items-center">
        <NavIcon
          icon={MessageIcon}
          label="Chats"
          selected={activeTab === "chats"}
          onClick={() => setActiveTab("chats")}
        />
        <NavIcon
          icon={WhatsAppStatusIcon}
          label="Status"
          selected={activeTab === "status"}
          onClick={() => setActiveTab("status")}
        />
        <NavIcon
          icon={WhatsAppChannelIcon}
          label="Channels"
          selected={activeTab === "channels"}
          onClick={() => setActiveTab("channels")}
        />
        <NavIcon
          icon={WhatsAppGroupIcon}
          label="Groups"
          selected={activeTab === "groups"}
          onClick={() => setActiveTab("groups")}
        />
        <NavIcon
          icon={MetaAiIcon}
          label="Meta AI"
          selected={activeTab === "ai"}
          onClick={() => setActiveTab("ai")}
        />
      </div>
      <div className="flex flex-col gap-5 items-center">
        <div>
          <button
            onClick={() => {
              logout();
              navigate("/");
            }}
            className="text-white font-semibold text-sm"
          >
            LogOut
          </button>
        </div>
        <NavIcon
          icon={SettingIcon}
          label="Settings"
          selected={activeTab === "settings"}
          onClick={() => setActiveTab("settings")}
        />
        <NavIcon
          icon={ProfileIcon}
          label="Profile"
          selected={activeTab === "profile"}
          onClick={() => setActiveTab("profile")}
        />
      </div>
    </div>
  );
};

export default SideBar;
