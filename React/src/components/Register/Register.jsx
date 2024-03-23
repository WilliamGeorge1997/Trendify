import styles from "./Register.module.css";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  let navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  // --------------- Submit the form values to the register API--------------//

  async function registerSubmit(values) {
    try {
      setisLoading(true);
      let { data } = await axios.post(
        `http://127.0.0.1:8000/api/register`,
        values
      );
      if (data.message === "success") {
        setisLoading(false);
        // -------Navigate to the login page after successful register ------------//
        navigate("/login");
      }
    } catch (err) {
      setisLoading(false);
      // -------- Catch the error if exists ----------//
      setError(err.response.data.message);
    }
  }

  // --------------- Validate the form values to the API--------------//
  let phoneRegExp = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/;

  let validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must at least 3 characters or more.")
      .max(50, "Name must be less than 50 characters.")
      .required("Name is required."),
    email: Yup.string()
      .email("Email is invalid.")
      .required("Email is required."),
    phone: Yup.string()
      .matches(phoneRegExp, "Egyptian phone numbers only.")
      .required("Phone number is required."),
    password: Yup.string()
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,30}$/,
        "Minimum 8 characters, at least one uppercase and one lowercase letter, one digit and one special character."
      )
      .required("Password is required"),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords do not match each other.")
      .required("Password confirmation is required"),
  });

  // --------------- The form values that will be send to the API--------------//

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      password_confirmation: "",
    },
    validationSchema: validationSchema,
    onSubmit: registerSubmit,
  });

  return (
    <>
      <div className="w-50 mx-auto py-5">
        <h2 className="main-color">Register Now</h2>
        {/* --------------- The start of the form to store the data------------  */}
        <form onSubmit={formik.handleSubmit}>
          {/* ---------------Name input and handle error  ------------  */}

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control mb-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            name="name"
            id="name"
          />

          {formik.touched.name && formik.errors.name ? (
            <p className="text-danger">{formik.errors.name}</p>
          ) : null}
          {/* ---------------Phone input and handle error  ------------  */}

          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            className="form-control mb-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            name="phone"
            id="phone"
          />

          {formik.touched.phone && formik.errors.phone ? (
            <p className="text-danger">{formik.errors.phone}</p>
          ) : null}
          {/* ---------------Email input and handle error  ------------  */}

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control mb-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            name="email"
            id="email"
          />

          {formik.touched.email && formik.errors.email ? (
            <p className="text-danger">{formik.errors.email}</p>
          ) : null}
          {/* ---------------Password input and handle error  ------------  */}

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control mb-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            name="password"
            id="password"
          />

          {formik.touched.password && formik.errors.password ? (
            <p className="text-danger">{formik.errors.password}</p>
          ) : null}
          {/* ---------------Confirm password input and handle error  ------------  */}

          <label htmlFor="name">Confirm Password:</label>
          <input
            type="password"
            className="form-control mb-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password_confirmation}
            name="password_confirmation"
            id="password_confirmation"
          />

          {formik.touched.password_confirmation &&
          formik.errors.password_confirmation ? (
            <p className="text-danger">{formik.errors.password_confirmation}</p>
          ) : null}
          {/* ---------------Showing the error from the server side  ------------  */}

          {error ? <div className="alert alert-danger">{error}</div> : null}

          {/* ---------------Register button  ------------  */}

          {isLoading ? (
            <button
              type="button"
              className={`btn mt-2 px-4 submitButton `}
            >
              <i className="fas fa-spinner fa-spin"></i>
            </button>
          ) : (
            <>
              <button
                disabled={!(formik.isValid && formik.dirty)}
                type="submit"
                className={`btn submitDisabledButton p-2  mt-2`}
              > 
                Register
              </button>
              <p className="mt-2">
                Already have an account?
                <Link
                  className="text-decoration-none main-color ms-1"
                  to={"/login"}
                >
                  Login now
                </Link>
              </p>
            </>
          )}
        </form>
        {/* --------------- The end of the form to store the data------------  */}
      </div>
    </>
  );
}

export default Register;
