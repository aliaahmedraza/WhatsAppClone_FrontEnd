import { useEffect, useState, useRef } from "react";
import React from "react";
import "./OtpForm.css";
import axios from "axios";
import NewPassword from "../NewPassword/NewPassword";
import OtpResendTimer from "../ResendOTPCounter/ResendOTPCounter";
import CustomAlert from "../CustomAlert/CustomAlert";

const OtpForm = ({ recipient }) => {
  const [otpVefified, setOtpVefified] = React.useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
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
        setSuccessMessage(response.data.message || "OTP verified successfully");
        setTimeout(() => {
          setOtpVefified(true);
        }, 2000);
        resetForm();
      }
    } catch (error) {
      setErrorMessage(
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
        <div>
          {successMessage ? (
            <CustomAlert
              message="Success"
              type="success"
              description={successMessage}
              onClose={() => setSuccessMessage("")}
              showIcon
            />
          ) : errorMessage ? (
            <CustomAlert
              message="Error"
              type="error"
              description={errorMessage}
              onClose={() => setErrorMessage("")}
              showIcon
              duration={3000}
            />
          ) : null}
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
              Verify
            </button>
            <div className="mt-2 text-sm text-gray-600">
              OTP is valid for <strong>5 minutes</strong>. Resending it will
              invalidate the previous code.
            </div>
          </div>
          <div className="flex justify-end items-end">
            <OtpResendTimer initialTime={60} />
          </div>
        </div>
      )}
    </div>
  );
};

export default OtpForm;
