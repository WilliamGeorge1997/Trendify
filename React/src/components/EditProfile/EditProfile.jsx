import styles from "./EditProfile.module.css";
import React, { useContext, useEffect, useState, Fragment } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import { Helmet } from "react-helmet";

function EditProfile() {
  let token = localStorage.getItem("userToken");
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();

  // ------------------ Get user`s data from the API--------------------//
  async function getData() {
    try {
      setisLoading(true);
      let res = await axios.get("http://127.0.0.1:8000/api/user", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data.user);
      // -------- Set the user data ----------//
    } catch (err) {
      setisLoading(false);
      // -------- Catch the error if exists ----------//
      setError(err.response.data.message);
    } finally {
      setisLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  // --------------- Submit the form values to the API--------------//

  async function profileSubmit(values) {
    try {
      setisLoading(true);

      let res = await axios.post(
        `http://127.0.0.1:8000/api/updateuser`,
        values,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            // -------Sending the token to the api ------------//
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        setisLoading(false);
        //------------- navigate to profile by using useNavigate ---------//
        navigate("/MyProfile/0");
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
    phone: Yup.string().matches(phoneRegExp, "Egyptian phone numbers only."),
    date_of_birth: Yup.date("Date is invalid"),
    gender: Yup.string(),
    about: Yup.string("Invalid input data").max(
      250,
      "Maximum characters are 250"
    ),
  });

  // --------------- The form values that will be send to the API--------------//

  let formik = useFormik({
    initialValues: {
      phone: "",
      date_of_birth: "",
      gender: "",
      avatar: "",
      about: "",
    },
    validationSchema: validationSchema,
    onSubmit: profileSubmit,
  });

  // --------------- Showing the user's data in teh inputs if exists --------------//

  useEffect(() => {
    if (user) {
      formik.setValues({
        phone: user.phone || "",
        date_of_birth: user.date_of_birth || "",
        gender: user.gender || "",
        about: user.about || "",
      });
    }
  }, [user]);

  // --------------- Create loading until fetching the user's data --------------//
  if (!user) {
    return <Loading />;
  }

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Edit Profile</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <main className={`container my-5 ${styles.editProfileForm} w-75 m-auto`}>
        <div className="row">
          <h2>Edit profile</h2>
          <hr />
          <div className="col-md-6">
            {/* --------------- The start of the form to store the data------------  */}
            <form
              className="ms-2"
              onSubmit={formik.handleSubmit}
              encType="multipart/form-data"
            >
              {/* ---------------Gender input and handle error  ------------  */}

              <span className="mb-2">Gender</span>
              <select
                className={` form-select form-select-sm ${
                  formik.touched.gender && formik.errors.gender
                    ? "is-invalid" //
                    : ""
                }`}
                id="gender"
                name="gender"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.gender}
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {formik.touched.gender && formik.errors.gender ? (
                <p className="text-danger">{formik.errors.gender}</p>
              ) : null}

              {/* ---------------Date of birth input and handle error ------------  */}

              <div className="mt-3">
                <span className="mb-2">Date of birth</span>
                <input
                  type="date"
                  id="date_of_birth"
                  name="date_of_birth"
                  className={`form-control ${styles.date}`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.date_of_birth}
                />
              </div>

              {formik.touched.date_of_birth && formik.errors.date_of_birth ? (
                <p className="text-danger">{formik.errors.date_of_birth}</p>
              ) : null}

              {/* ---------------About input and handle error  ------------  */}

              <div className="mt-3">
                <textarea
                  className="form-control"
                  id="description"
                  placeholder="About me (optional)"
                  style={{ resize: "none" }}
                  name="about"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.about}
                ></textarea>
                {formik.touched.about && formik.errors.about ? (
                  <p className="text-danger">{formik.errors.about}</p>
                ) : null}

                {/* ---------------Avatar input and handle error  ------------  */}

                <div className="mb-3 mt-2">
                  <label htmlFor="formFile" className="form-label">
                    Upload your photo
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="formFile"
                    name="avatar"
                    accept="image/jpeg, image/png, image/jpg, image/gif, image/webp"
                    onChange={(event) =>
                      formik.setFieldValue("avatar", event.target.files[0])
                    }
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
              {formik.touched.avatar && formik.errors.avatar ? (
                <p className="text-danger">{formik.errors.avatar}</p>
              ) : null}

              {/* ---------------Contact information  ------------  */}

              <hr className="mt-5" />
              <div className="mb-3 me-2">
                <span>Contact information</span>
              </div>

              {/* ---------------Phone input and handle error  ------------  */}

              <div className="row align-items-center mb-3">
                <div className="col-sm-3">
                  <span>Phone number</span>
                </div>
                <div className="col">
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Phone number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                  />
                </div>
              </div>

              {formik.touched.phone && formik.errors.phone ? (
                <p className="text-danger">{formik.errors.phone}</p>
              ) : null}

              {/* ---------------Showing the error from the server side  ------------  */}

              {error ? <div className="alert alert-danger">{error}</div> : null}

              {/* ---------------Saved changes button  ------------  */}

              {isLoading ? (
                <button type="button" className={`btn mt-2 px-4 submitButton `}>
                  <i className="fas fa-spinner fa-spin"></i>
                </button>
              ) : (
                <>
                  <div className="d-flex justify-content-between mt-3 align-items-center">
                    <button type="submit" className={`btn submitButton p-2`}>
                      Save Changes
                    </button>

                    <Link to={"/MyProfile"} className={` fw-bold text-black  `}>
                      Back to profile
                    </Link>
                  </div>
                </>
              )}
            </form>
            {/* --------------- The end of the form to store the data------------  */}
          </div>

          {/* ---------------Website info section  ------------  */}

          <div className="col-md-6 d-flex mt-4 justify-content-start">
            <div className="d-flex align-items-center justify-content-center mr-3"></div>
            <div className="d-flex flex-column " style={{ width: "50%" }}>
              <div className="border rounded-sm p-2 ">
                <div className="_1075545d _96d4439a ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fillRule="evenodd"
                    viewBox="0 0 1024 1024"
                    style={{ fill: "#CD0000" }}
                  >
                    <path d="M318 279.3h-54.8l-61.5-61.5v-54.9h54.8l61.6 61.5v54.9zm194-38.8l-38.8-38.8V124L512 85.3l38.8 38.8v77.6L512 240.5zm426.7 232.7L899.9 512h-77.6l-38.8-38.8 38.8-38.8H900l38.8 38.8zm-737-38.8l38.8 38.8-38.8 38.8H124l-38.8-38.8 38.8-38.8h77.6zm620.6-216.6l-61.5 61.5h-54.9v-54.9l61.6-61.5h54.8v54.9zm-200.6 404a154.9 154.9 0 0 1-47.6 32.4l-23.3 35.6v55h-77.6v-55L450 654.3a155.3 155.3 0 0 1-47.7-252 155.4 155.4 0 0 1 219.5 0 155.3 155.3 0 0 1 0 219.4zM473.2 861h77.6v-38.8h-77.6V861zM512 279.3a233 233 0 0 0-116.4 434.3V900l38.8 38.8h155.2l38.8-38.8V713.6A233 233 0 0 0 512 279.3z"></path>
                  </svg>
                  <span className="_6d5b4928 be13fe44 fw-bold">
                    Why is it important?
                  </span>import Loading from '../Loading/Loading';

                </div>
                <span className="_1dbc9796">
                  Trendify is built on trust. Help other people get to know you.
                  Tell them about the things you like. Share your favorite
                  brands, books, movies, shows, music, food. And you will see
                  the results…
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default EditProfile;
