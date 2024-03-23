import React, { Fragment, useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import styles from "./Login.module.css";
import { Helmet } from "react-helmet";

function Login() {
  let { setUserToken } = useContext(UserContext);
  let navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  // --------------- Submit the form values to the Login API--------------//
  async function loginSubmit(values) {
    try {
      setisLoading(true);
      let { data } = await axios.post(
        `http://127.0.0.1:8000/api/login`,
        values
      );

      if (data.message === "success") {
        setisLoading(false);
        // -------Store the user's token in the local storage ------------//
        localStorage.setItem("userToken", data.token);
        // -------Store the user's token in the userToken variable ------------//
        setUserToken(data.token);
        // ---------- store the user's id to local storage
        localStorage.setItem("userId", data.user.id);
        // -------Navigate to the home page after successful login ------------//
        navigate("/Home");
      }
    } catch (err) {
      setisLoading(false);
      // -------- Catch the error if exists ----------//

      setError(err.response.data.message);
    }
  }

  // --------------- Validate the form values to the API--------------//

  let validationSchema = Yup.object({
    email: Yup.string()
      .email("Email is invalid.")
      .required("Email is required."),
    password: Yup.string().required("Password is required"),
  });

  // --------------- The form values that will be send to the API--------------//
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: loginSubmit,
  });

  return (
    <Fragment>
      
     
        <Helmet>
          <meta charSet="utf-8" />
          <title>Login</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      <div className="w-50 mx-auto py-5">
        <h2 className={` main-color`}>Login Now</h2>

        {/* --------------- The start of the form to store the data------------  */}

        <form onSubmit={formik.handleSubmit}>
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

          {/* ---------------Showing the error from the server side  ------------  */}

          {error ? <div className="alert alert-danger">{error}</div> : null}

          {/* ---------------Login button  ------------  */}

          {isLoading ? (
            <button type="button" className={`btn mt-2 px-4 submitButton `}>
              <i className="fas fa-spinner fa-spin text-white "></i>
            </button>
          ) : (
            <Fragment>
              <button
                disabled={!(formik.isValid && formik.dirty)}
                type="submit"
                className={`btn submitDisabledButton p-2 mt-2`}
              >
                Login
              </button>
              <p className="mt-2">
                Don't have an account?
                <Link
                  className="text-decoration-none main-color ms-1"
                  to={"/register"}
                >
                  Register now
                </Link>
              </p>
            </Fragment>
          )}
        </form>
        {/* --------------- The end of the form to store the data------------  */}
      </div>
    </Fragment>
  );
}

export default Login;
