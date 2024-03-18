import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import styles from "./Login.module.css";

function Login() {
  let { setUserToken } = useContext(UserContext);
  // console.log(x);

  let navigate = useNavigate();

  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  // const [userName , setuserName] = useState (null)
  async function loginSubmit(values) {
    setisLoading(true);

    let { data } = await axios
      .post(`http://127.0.0.1:8000/api/login`, values)
      .catch((err) => {
        setisLoading(false);
        setError(err.response.data.message);
      });

    if (data.message === "success") {
      setisLoading(false);
      localStorage.setItem("userToken", data.token);
      setUserToken(data.token);
      navigate("/home");

      // console.log(data);
      // let userName = data.user.name; // for testing
      // setuserName(userName); // for testing
    }

    // console.log(values);
  }

  let validationSchema = Yup.object({
    email: Yup.string()
      .email("Email is invalid.")
      .required("Email is required."),
    password: Yup.string()
      .required("Password is required"),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: loginSubmit,
  });

  return (
    <>
      <div className="w-50 mx-auto py-5">
        <h2 className={` main-color`}>Login Now</h2>

        {/* <h3>{userName} </h3> */}

        <form onSubmit={formik.handleSubmit}>
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

          {error ? <div className="alert alert-danger">{error}</div> : null}

          {isLoading ? (
            <button
              type="button"
              className={`btn mt-2  ${styles.loginButton}  `}
            >
              <i className="fas fa-spinner fa-spin text-white "></i>
            </button>
          ) : (
            <>
              <button
                disabled={!(formik.isValid && formik.dirty)}
                type="submit"
                className={`btn ${styles.loginDisabledButton}  mt-2`}
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
                </Link>{" "}
              </p>
            </>
          )}
        </form>
      </div>
    </>
  );
}

export default Login;
