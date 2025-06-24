import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const ForgotPasswordSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid (01234567890)")
    .min(11)
    .required("A phone number is required"),
});
const ForgetPassword = () => {
  const [isCooldownActive, setIsCooldownActive] = React.useState(false);
  const [cooldownTime, setCooldownTime] = React.useState(0);
  const initialValues = {
    phoneNumber: "",
  };
  let interval;
  const startCooldown = (duration) => {
    setIsCooldownActive(true);
    setCooldownTime(duration);
    interval = setInterval(() => {
      setCooldownTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          setIsCooldownActive(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };
  React.useEffect(() => {
    return () => clearInterval(interval);
  }, []);
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post(
        "http://localhost:4005/forgetpassword",
        {
          recipient: values.phoneNumber,
        }
      );
      alert(response.data.message || "Message sent successfully.");
      startCooldown(60);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Failed to send Message. Please try again.";
      alert(errorMessage);
    } finally {
      setSubmitting(false);
      resetForm();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>

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
                Enter the Phone Number associated with your account. We'll send
                you a message with your new password.
              </p>

              <button
                type="submit"
                disabled={isSubmitting || isCooldownActive}
                className={`w-full py-2 rounded-md transition duration-300 ${
                  isSubmitting || isCooldownActive
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
              >
                {isSubmitting
                  ? "Sending..."
                  : isCooldownActive
                  ? `Resend in ${cooldownTime}s`
                  : "Send Message"}
              </button>
            </Form>
          )}
        </Formik>
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
