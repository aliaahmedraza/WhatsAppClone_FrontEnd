import { useEffect, useState, useRef } from "react";
import React from "react";
import "./OtpForm.css";
import axios from "axios";
import NewPassword from "../NewPassword/NewPassword";
import OtpResendTimer from "../ResendOTPCounter/ResendOTPCounter";

const OtpForm = ({ recipient  }) => {
  const [otpVefified, setOtpVefified] = React.useState(false);
  const Otp_Digit_Count = 4;
  const [inputArray, setInputArray] = useState(
    new Array(Otp_Digit_Count).fill("")
  );
  const refArray = useRef([]);
  useEffect(() => {
    refArray.current[0]?.focus();
    refArray.current[0]?.select();
  }, []);
  const handleOnChange = (value, index) => {
    if (isNaN(value)) return;
    const newArray = [...inputArray];
    const newValue = value.trim();
    newArray[index] = newValue.slice(-1);
    setInputArray(newArray);
    newValue && refArray.current[index + 1]?.focus();
  };
  const handleOnKeyDown = (e, index) => {
    if (!e.target.value && e.key === "Backspace" && index !== 0) {
      refArray.current[index - 1]?.focus();
    }
  };
  console.log("Sending OTP:", inputArray.join(""), "to", recipient);
  const resetForm = () => {
    setInputArray(new Array(Otp_Digit_Count).fill(""));
    refArray.current[0]?.focus();
    refArray.current[0]?.select();
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("http://localhost:4005/verify-otp", {
        recipient: recipient,
        otp: inputArray.join(""),
      });
      if (response.data.success) {
        alert(response.data.message || "OTP verified successfully");
        setOtpVefified(true);
        resetForm();
      } else {
        alert(response.data.message || "OTP verification failed");
        resetForm();
      }
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "An error occurred during OTP verification."
      );
    }
  };
  return (
    <div>
      {otpVefified ? (
        <NewPassword phoneNumber={recipient} />
      ) : (
        <div className="otp-container flex flex-col justify-center items-center h-[20vh] bg-white p-8 rounded-xl w-[100%] shadow-md">
          <div>
            {inputArray.map((input, index) => {
              return (
                <input
                  className="otp-input"
                  typye="text"
                  key={index}
                  value={inputArray[index]}
                  onChange={(e) => handleOnChange(e.target.value, index)}
                  ref={(input) => (refArray.current[index] = input)}
                  onKeyDown={(e) => handleOnKeyDown(e, index)}
                />
              );
            })}
          </div>
          <button
            onClick={handleSubmit}
            className="mt-4 px-6 py-2 rounded-md transition duration-300 bg-blue-500 hover:bg-blue-600 text-white"
          >
            OTP Verification
            </button>
            <OtpResendTimer initialTime={10}/>
        </div>
      )}
    </div>
  );
};

export default OtpForm;
