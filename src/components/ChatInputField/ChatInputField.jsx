import React from "react";
import AttachmentMenu from "../AttachmentMenu/AttachmentMenu";
import EmojiIcon from "../../assets/svg/EmojiIcon";
import AudioMessageIcon from "../../assets/svg/AudioMessageIcon";
import SendMessageIcon from "../../assets/svg/SendMessageIcon";
import EmojiPicker from "emoji-picker-react";
import "./ChatInputField.css";
const ChatInput = () => {
  const [message, setMessage] = React.useState("");
  const [attachedFile, setAttachedFile] = React.useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = React.useState(false);
  const emojiPickerRef = React.useRef(null);

  const handleSend = () => {
    const trimmed = message.trim();
    if (trimmed === "" && !attachedFile) return;
    if (trimmed && attachedFile) {
      console.log("Message and file sent:", trimmed, attachedFile);
    } else if (trimmed) {
      console.log("Message sent:", trimmed);
    } else if (attachedFile) {
      console.log("File sent:", attachedFile);
    }
    setMessage("");
    setAttachedFile(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target)
      ) {
        setShowEmojiPicker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleAttachmentInsert = (file, label) => {
    if (file) {
      setAttachedFile({ file, label });
    } else {
      setMessage((prev) => `${label} attached \n ${prev}`);
    }
  };
  const handleEmojiClick = (emojiData) => {
    setMessage((prev) => prev + emojiData.emoji);
  };
  return (
    <div className="flex items-center px-3 mb-2 gap-3 md:gap-2 h-13 rounded-4xl bg-[#242626] mx-3 w-full sm:w-[85%] md:w-[95%] lg:w-[96%] xl:w-[98%] min-h-[48px]">
      <div className="relative flex gap-3">
        <AttachmentMenu onAttach={handleAttachmentInsert} />
        <div className="relative">
          <button
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="p-2 rounded-[50%] hover:bg-[#4d4e4e]"
          >
            <EmojiIcon />
          </button>
          {showEmojiPicker && (
            <div
              className="absolute bottom-14 left-0 z-50 md:left-[calc(100%-6rem)]"
              ref={emojiPickerRef}
            >
              <EmojiPicker
                onEmojiClick={handleEmojiClick}
                theme="dark"
                className="custom-emoji-scrollbar"
              />
            </div>
          )}
        </div>
      </div>
      <textarea
        rows={1}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message"
        className="flex-1 resize-none text-white p-2 rounded-xl outline-none overflow-y-auto hide-scrollbar"
      />

      {attachedFile && (
        <div className="text-sm text-white max-w-[150px]">
          {attachedFile.file.name}
        </div>
      )}

      {message.trim() === "" && !attachedFile ? (
        <button className="hover:bg-[#21C063] hover:rounded-full p-2">
          <AudioMessageIcon />
        </button>
      ) : (
        <button onClick={handleSend} className="bg-[#21C063] rounded-full p-2">
          <SendMessageIcon />
        </button>
      )}
    </div>
  );
};
export default ChatInput;
