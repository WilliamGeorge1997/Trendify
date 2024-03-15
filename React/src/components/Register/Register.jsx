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

  async function registerSubmit(values) {
    setisLoading(true);

    // console.log(values);
    let { data } = await axios
      .post(`http://127.0.0.1:8000/api/register`, values)
      .catch((err) => {
        setisLoading(false);

        setError(err.response.data.message);
      });
    // console.log(response);
    // console.log(response.data.message);
    if (data.message === "success") {
      setisLoading(false);

      // navigate to login by using useNavigate
      navigate("/login");
    }

    // console.log(values);
  }

  let phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  let validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must at least 3 characters or more.")
      .max(50, "Name must be less than 50 characters.")
      .required("Name is required."),
    email: Yup.string()
      .email("Email is invalid.")
      .required("Email is required."),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid.")
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

        <form onSubmit={formik.handleSubmit}>
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

          {error ? <div className="alert alert-danger">{error}</div> : null}

          {isLoading ? (
            <button
              type="button"
              className={`btn mt-2  ${styles.registerButton}  `}
            >
              <i className="fas fa-spinner fa-spin"></i>
            </button>
          ) : (
            <>
              <button
                disabled={!(formik.isValid && formik.dirty)}
                type="submit"
                className={`btn ${styles.registerDisabledButton}  mt-2`}
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
      </div>
    </>
  );
}

export default Register;
