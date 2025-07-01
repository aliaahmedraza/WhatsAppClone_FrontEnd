import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import OtpForm from "../../components/OtpForm/OtpForm";
import ResendOTPStore from "../../ZustandStore/ResendOTP/ResendOTP";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const ForgotPasswordSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid (e.g. 923001234567)")
    .min(11)
    .required("A phone number is required"),
});
const ForgetPassword = () => {
  const [isOtpSend, setIsOtpSend] = React.useState(false);
  const [submittedPhoneNumber, setSubmittedPhoneNumber] = React.useState("");
  const { setResendOTP } = ResendOTPStore();
  const initialValues = {
    phoneNumber: "",
  };
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post("http://localhost:4005/send-otp", {
        recipient: values.phoneNumber,
      });
      alert(response.data.message || "Otp Message sent successfully.");
      setIsOtpSend(true);
      setSubmittedPhoneNumber(values.phoneNumber);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Failed to send otp Message. Please try again.";
      alert(errorMessage);
    } finally {
      setSubmitting(false);
      resetForm();
    }
  };
  const handleResendOtp = React.useCallback(async () => {
    try {
      const response = await axios.post("http://localhost:4005/send-otp", {
        recipient: submittedPhoneNumber,
      });
      alert(response.data.message || "OTP resent successfully.");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Failed to resend OTP. Please try again."
      );
    }
  }, [submittedPhoneNumber]);
  
  React.useEffect(() => {
    setResendOTP(handleResendOtp);
  }, [handleResendOtp]);  
  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">
            Forgot Password
          </h2>
          {isOtpSend ? (
              <OtpForm recipient={submittedPhoneNumber} />
          ) : (
            <Formik
              initialValues={initialValues}
              validationSchema={ForgotPasswordSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Field
                      type="tel"
                      name="phoneNumber"
                      className={`w-full p-2 border rounded-md ${
                        errors.phoneNumber && touched.phoneNumber
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Enter your registered Phone Number"
                    />
                    {errors.phoneNumber && touched.phoneNumber && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.phoneNumber}
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    We'll send you an OTP to verify your phone number.
                  </p>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`p-2 w-3/7 rounded-md transition duration-300 ${
                        isSubmitting
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-blue-500 hover:bg-blue-600 text-white"
                      }`}
                    >
                      {isSubmitting ? "Sending..." : "Send OTP"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          )}

          <div className="text-center mt-4">
            <a href="/" className="text-blue-500 text-sm mr-4 hover:underline">
              Back to Login
            </a>
          </div>
        </div>
      </div>
  );
};

export default ForgetPassword;


