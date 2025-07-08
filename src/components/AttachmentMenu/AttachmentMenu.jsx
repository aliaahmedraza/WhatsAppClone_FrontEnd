import React, { useRef, useState, useEffect } from "react";
import PlusSignIcon from "../../assets/svg/PlusSignIcon";
import CrossSymbol from "../../assets/svg/CrossSymbol";
import FileIcon from "../../assets/svg/FileIcon";
import PhotoAndVideoIcon from "../../assets/svg/PhotoAndVideoIcon";
import CameraIcon from "../../assets/svg/CameraIcon";
import AudioIcon from "../../assets/svg/AudioIcon";
import ContactIcon from "../../assets/svg/ContactIcon";
import PollIcon from "../../assets/svg/PollIcon";
import EventIcon from "../../assets/svg/EventIcon";
import NewStickerIcon from "../../assets/svg/NewStickerIcon";

const AttachmentMenu = ({ onAttach }) => {
  const [showMenu, setShowMenu] = useState(false);
  const containerRef = React.useRef(null);
  const fileRef = useRef();
  const imageRef = useRef();
  const audioRef = useRef();
  const stickerRef = useRef();
  const toggleMenu = () => setShowMenu(!showMenu);

  const menuOptions = [
    { icon: <FileIcon />, label: "Document", ref: fileRef },
    { icon: <PhotoAndVideoIcon />, label: "Photos & Videos", ref: imageRef },
    { icon: <CameraIcon />, label: "Camera" },
    { icon: <AudioIcon />, label: "Audio", ref: audioRef },
    { icon: <ContactIcon />, label: "Contact" },
    { icon: <PollIcon />, label: "Poll" },
    { icon: <EventIcon />, label: "Event" },
    { icon: <NewStickerIcon />, label: "New Sticker", ref: stickerRef },
  ];

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const label = event.target.getAttribute("data-label");
    if (file && onAttach) {
      onAttach(file, label);
    }
  };

  const handleOptionClick = (inputRef, label) => {
    if (inputRef && inputRef.current) {
      inputRef.current.setAttribute("data-label", label);
      inputRef.current.click();
    } else {
      if (onAttach) onAttach(null, label);
    }
    setShowMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleMenu}
        className="p-2 rounded-full hover:bg-[#4d4e4e] focus:outline-none"
      >
        {showMenu ? <CrossSymbol /> : <PlusSignIcon />}
      </button>

      {showMenu && (
        <div
          className="absolute bottom-14 w-52 bg-[#1D1F1F] text-white rounded-xl shadow-lg z-50 p-2 space-y-2"
          ref={containerRef}
        >
          {menuOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option.ref, option.label)}
              className="flex items-center gap-3 w-full px-3 py-1 hover:bg-[#3c4145] rounded-md text-sm"
            >
              {option.icon}
              {option.label}
            </button>
          ))}
        </div>
      )}
      <input
        ref={fileRef}
        type="file"
        accept=".pdf,.doc,.docx"
        className="hidden"
        onChange={handleFileChange}
      />
      <input
        ref={imageRef}
        type="file"
        accept="image/*,video/*"
        className="hidden"
        onChange={handleFileChange}
      />
      <input
        ref={audioRef}
        type="file"
        accept="audio/*"
        className="hidden"
        onChange={handleFileChange}
      />
      <input
        ref={stickerRef}
        type="file"
        accept=".webp,.png,.jpg"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default AttachmentMenu;

