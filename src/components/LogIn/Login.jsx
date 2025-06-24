import { useState, React, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ onSignUpClick }) => {
  const navigate = useNavigate();
  const [isTokenExpired, setIsTokenExpired] = useState(false);
  const [isTokenPresent, setIsTokenPresent] = useState(false);
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const LoginSchema = Yup.object().shape({
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

  const initialValues = {
    phoneNumber: "",
    password: "",
  };

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const expiryTime = decodedToken.exp * 1000;
        const currentTime = Date.now();

        if (currentTime > expiryTime) {
            Cookies.remove("token");
            setIsTokenExpired(true);
        } else {
          navigate("/dashboard"); 
        }
        setIsTokenPresent(true); 
      } catch (error) {
        console.error("Error decoding the token:", error);
        setIsTokenExpired(true);
        setIsTokenPresent(true); 
      }
    } else {
      setIsTokenPresent(false);
    }
  }, [navigate]);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post(
        "http://localhost:4004/login",
        {
          phoneNumber: values.phoneNumber,
          password: values.password,
        },
        { withCredentials: true }
      );

      alert("Login Successful");
      Cookies.set("token", response.data.token);
      navigate("/dashboard");
      resetForm();
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      alert("Error during Login. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div>
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        {isTokenPresent && isTokenExpired ? (
          <p className="text-red-500 text-center mb-4">
            Your session has expired. Please log in again.
          </p>
        ) : null}
        <h2 className="text-2xl font-bold text-center mb-6 text-[#25D366]">
          Log in with WhatsApp
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-gray-700 mb-2">
                  PhoneNumber
                </label>
                <Field
                  type="phoneNumber"
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
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-700 mb-2"
                >
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
                  placeholder="Enter your password"
                />
                {errors.password && touched.password && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.password}
                  </div>
                )}
              </div>
              <div className="mb-4 text-right">
                <a
                  href="/forgetpassword"
                  className="text-blue-500 text-sm hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#25D366] text-white py-2 font-bold rounded-md
                  hover:bg-[#21c063] transition duration-300
                  disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Logging In..." : "Login"}
              </button>
            </Form>
          )}
        </Formik>

        <p className="text-center mt-4 text-gray-600">
          Don't have an account?
          <a href="" className="text-blue-500 ml-1 hover:underline"  onClick={(e) => {e.preventDefault(); onSignUpClick();}}>
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
