import React, { useState, useEffect, useRef } from "react";
import ResendOTPStore from "../../ZustandStore/ResendOTP/ResendOTP";

const OtpResendTimer = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const resendOTP = ResendOTPStore((state) => state.resendOTP);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isTimerRunning && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timerRef.current);
      setIsTimerRunning(false);
    }

    return () => clearInterval(timerRef.current);
  }, [timeLeft, isTimerRunning]);

  const handleResendClick = () => {
    if (!isTimerRunning) {
      if (resendOTP) {
        resendOTP();
      } else {
        console.warn("Resend OTP function not available");
      }
      setTimeLeft(initialTime);
      setIsTimerRunning(true);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div>
      {isTimerRunning ? (
        <p className="text-blue-500 hover:text-blue-700 hover:underline">
          Resend OTP in: {formatTime(timeLeft)}
        </p>
      ) : (
        <button
          onClick={handleResendClick}
          className="mt-4 px-4 py-2 rounded-md transition duration-300 bg-blue-500 hover:bg-blue-600 text-white"
        >
          Resend OTP
        </button>
      )}
    </div>
  );
};

export default OtpResendTimer;
