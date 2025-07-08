import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const phoneRegExp = /^923([0-4][0-9])\d{7}$/;
const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("FirstName is required"),
  lastName: Yup.string().required("LastName is required"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid (923234567890)")
    .min(11)
    .required("A phone number is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "Password must include uppercase, lowercase, number, and special character"
    )
    .required("Password is required"),
});

const SignupPage = ({ onLoginClick }) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post(
        "http://localhost:4005/signup",
        {
          firstName: values.firstName,
          lastName: values.lastName,
          phoneNumber: values.phoneNumber,
          password: values.password,
        },
        { withCredentials: true }
      );
      alert(response.data.message || "Signup successful!");
      resetForm();
      onLoginClick();
    } catch (error) {
      console.error("SignUp error:", error.response?.data || error.message);
      alert("Error during SignUp. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-[#25D366]">
        Create Your Account
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-700 mb-2">
                FirstName
              </label>
              <Field
                type="text"
                name="firstName"
                className={`w-full p-2 border rounded-md ${
                  errors.firstName && touched.firstName
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Enter your FirstName"
              />
              {errors.firstName && touched.firstName && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.firstName}
                </div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-gray-700 mb-2">
                LastName
              </label>
              <Field
                type="text"
                name="lastName"
                className={`w-full p-2 border rounded-md ${
                  errors.lastName && touched.lastName
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Enter your LastName"
              />
              {errors.lastName && touched.lastName && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.lastName}
                </div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-gray-700 mb-2">
                PhoneNumber
              </label>
              <Field
                type="tel"
                name="phoneNumber"
                className={`w-full p-2 border rounded-md ${
                  errors.phoneNumber && touched.phoneNumber
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Enter your PhoneNumber"
              />
              {errors.phoneNumber && touched.phoneNumber && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.phoneNumber}
                </div>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
              </label>
              <Field
                type="password"
                name="password"
                className={`w-full p-2 border rounded-md ${
                  errors.password && touched.password
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Create a strong password"
              />
              {errors.password && touched.password && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.password}
                </div>
              )}
            </div>
            <span className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-2/5 bg-[#25D366] text-white px-3 py-2 font-bold rounded-md 
                  hover:bg-[#21c063] transition duration-300 
                  disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Signing Up..." : "Sign Up"}
              </button>
            </span>
          </Form>
        )}
      </Formik>

      <p className="text-center mt-4 text-gray-600">
        Already have an account?
        <a
          href="#"
          className="text-blue-500 ml-1 hover:underline"
          onClick={(e) => {
            e.preventDefault();
            onLoginClick();
          }}
        >
          Login
        </a>
      </p>
    </div>
  );
};

export default SignupPage;
