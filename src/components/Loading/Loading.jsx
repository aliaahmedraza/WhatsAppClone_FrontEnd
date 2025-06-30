// LoadingScreen.jsx
import React from "react";
import "./Loading.css";
const LoadingScreen = () => {
  return (
    // <div className="h-screen w-screen flex flex-col items-center justify-center bg-[#0d1117] text-white">
    //   <div className="text-6xl animate-bounce mb-4">🐱</div>
    //   <p className="text-sm opacity-70">One moment please...</p>
    // </div>
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
