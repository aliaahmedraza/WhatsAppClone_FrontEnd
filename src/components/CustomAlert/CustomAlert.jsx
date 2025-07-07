// components/CustomAlert.jsx
import React, { useEffect, useState } from "react";
import { Alert } from "antd";

const CustomAlert = ({
  type = "success",
  message = "Success",
  description = "",
  showIcon = true,
  closable = true,
  duration = 3000,
  onClose = () => {},
  className = "",
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setVisible(false);
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <Alert
      type={type}
      message={message}
      description={description}
      showIcon={showIcon}
      closable={closable}
      onClose={() => {
        setVisible(false);
        onClose();
      }}
      className={className}
    />
  );
};

export default CustomAlert;
