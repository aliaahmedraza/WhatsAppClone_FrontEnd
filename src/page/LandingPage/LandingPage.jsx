import React from "react";
import "./LandingPage.css";
import LoginPage from "../../components/LogIn/Login";
import SignupPage from "../../components/SignUp/SignUp";
import WhatsAppLogo from "../../assets/svg/WhatsAppLogo";
import WhatsAppWordMark from "../../assets/svg/WhatsAppWordMark";

const Landingpage = () => {
  const [isLogin, setIsLogin] = React.useState(true);

  const handleShowSignUp = () => setIsLogin(false);
  const handleShowLogin = () => setIsLogin(true);

  return (
      <div className="bg-[#FCF5EB] min-h-screen flex flex-col md:grid md:grid-cols-[1fr_2fr_1fr]">
        <div className="flex px-4 py-3 gap-1 md:px-10 md:py-3">
          <div>
            <WhatsAppLogo className={"text-[#21c063] w-8 h-8"} />
          </div>
          <div className="flex flex-col pt-2 h-full">
            <WhatsAppWordMark className={"text-[#21c063] w-20 h-5"} />
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center p-4 md:p-0">
          <div
            className="
          rounded-lg
          w-full max-w-[970px]
          h-auto min-h-[500px] md:h-[700px]
          bg-white
          flex flex-col md:flex-row
          justify-center md:justify-evenly
          items-center
          overflow-hidden
          shadow-lg
        "
          >
            <div
              className="
            w-full md:w-[300px]
            h-[200px] md:h-[371px]
            flex justify-center items-center
            text-[#25D366] text-4xl font-bold
            border-b md:border-b-0
          "
            >
              WhatsApp
            </div>
            <div className="w-full max-w-md p-4 md:p-0">
              {isLogin ? (
                <LoginPage onSignUpClick={handleShowSignUp} />
              ) : (
                <SignupPage onLoginClick={handleShowLogin} />
              )}
            </div>
          </div>
        </div>
        <div className="hidden md:block"></div>
      </div>
  );
};

export default Landingpage;
