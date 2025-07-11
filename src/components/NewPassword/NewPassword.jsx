import { Formik, Form, Field } from "formik";
import React from "react";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CustomAlert from "../CustomAlert/CustomAlert";

const newPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "Password must include uppercase, lowercase, number, and special character"
    )
    .required("Password is required"),
});

const NewPassword = ({ phoneNumber }) => {
  const [successMessage, setSuccessMessage] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const navigate = useNavigate();
  const initialValues = {
    password: "",
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.put(
        "http://localhost:4005/forget-password",
        {
          password: values.password,
          phoneNumber: phoneNumber,
        }
      );
      setSuccessMessage(response.data.message || "Password updated.");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Failed to update Password. Please try again.";
      setErrorMessage(errorMessage);
    } finally {
      setSubmitting(false);
      resetForm();
    }
  };

  return (
    <div>
      {successMessage ? (
        <CustomAlert
          message="Success"
          type="success"
          description={successMessage}
          onClose={() => setSuccessMessage("")}
          showIcon
          className="w-[90%] "
        />
      ) : errorMessage ? (
        <CustomAlert
          message="Error"
          type="error"
          description={errorMessage}
          onClose={() => setErrorMessage("")}
          showIcon
          duration={3000}
          className="w-[90%] "
        />
      ) : null}
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <Formik
          initialValues={initialValues}
          validationSchema={newPasswordSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
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
                  placeholder="Enter your new Password"
                />
                {errors.password && touched.password && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.password}
                  </div>
                )}
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`p-2 w-fit rounded-md transition duration-300 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  }`}
                >
                  {isSubmitting ? "Changing..." : "Change Password"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default NewPassword;
