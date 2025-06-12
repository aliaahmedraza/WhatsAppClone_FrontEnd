import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
// import axios from "axios";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required("FirstName is required"),
    lastName: Yup.string().required("LastName is required"),
    phoneNumber:Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid (01234567890)')
    .min(11)
    .required('A phone number is required'),
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

  // const handleSubmit = async (
  //   values,
  //   { setSubmitting, resetForm}
  // ) => {
  //   try {
  //       const response = await axios.post(
  //         "*",
  //         { firstName:values.firstName,
  //           lastName:values.lastName,
  //           phoneNumber: values.phoneNumber,
  //           password: values.password,
  //         },
  //         { withCredentials: true }
  //       );
  //     alert(response.data.message || "Signup successful!");
  //     resetForm();
  //     onLoginClick();
  //   } catch (error) {
  //       console.error("SignUp error:", error.response?.data || error.message);
  //       alert("Error during SignUp. Please try again.");
  //     }finally {
  //     setSubmitting(false);
  //   }
  // };
const handleSubmit=({seSubmitting , resetForm})=>{
  alert("Signup successful!");
  onLoginClick();
  resetForm();
  seSubmitting(false);
}
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
           ? "border-red-500" : "border-gray-300"}`}
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

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#25D366] text-white font-bold py-2 rounded-md 
                  hover:bg-[#21c063] transition duration-300 
                  disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Signing Up..." : "Sign Up"}
              </button>
            </Form>
          )}
        </Formik>

        <p className="text-center mt-4 text-gray-600">
          Already have an account?
          <a href="#" className="text-blue-500 ml-1 hover:underline" onClick={(e)=>{e.preventDefault();onLoginClick()}}>
            Login
          </a>
        </p>
      </div>
  );
};

export default SignupPage;
