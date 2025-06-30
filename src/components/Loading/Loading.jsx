// LoadingScreen.jsx
import React from "react";
import "./Loading.css";
const LoadingScreen = () => {
  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center">
      <div className="spninner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
