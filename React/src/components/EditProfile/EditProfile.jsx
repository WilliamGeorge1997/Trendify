import styles from "./EditProfile.module.css";
import React, { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function EditProfile() {
  let token = localStorage.getItem("userToken");
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const navigate = useNavigate();

  async function getData() {
    let res = await axios
      .get("http://127.0.0.1:8000/api/user", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.message);
        // console.log(err.response.data.message);
      });
    setUser(res.data.user);
  }

  useEffect(() => {
    getData();
  }, []);

  async function profileSubmit(values) {
    console.log(values);
    let res = await axios
      .post(`http://127.0.0.1:8000/api/updateuser`, values, {
        headers: {
          "Content-Type": "multipart/form-data",

          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        // console.log(err.response.data.message);
        setError(err.response.data.message);
      });
    console.log(res);
    if (res.data.message === "User data updated successfully") {
      console.log(res.data.message);
      setSuccessMsg("Profile has been updated successfully!");
      // setSuccessMsg(res.data.message)
      // navigate("/MyProfile");
    }
  }

  let phoneRegExp = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/;

  let validationSchema = Yup.object({
    phone: Yup.string()
      .required("Phone number is required.")
      .matches(phoneRegExp, "Egyptian phone numbers only."),
    date_of_birth: Yup.date("Date is invalid"),
    gender: Yup.string(),
    about: Yup.string("Invalid input data").max(
      250,
      "Maximum characters are 250"
    ),
  });

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

  useEffect(() => {
    if (user) {
      formik.setValues({
        // phone: user.phone || "",
        date_of_birth: user.date_of_birth || "",
        gender: user.gender || "",
        about: user.about || "",
      });
    }
  }, [user]);

  if (!user) {
    return (
      <div>
        Loading <i className="fas fa-spinner main-color fa-spin fa-2xl"></i>
      </div>
    );
  }

  return (
    <>
      <main className={`container my-5 ${styles.editProfileForm} w-75 m-auto`}>
        <div className="row">
          <h2>Edit profile</h2>
          <hr />
          <div className="col-md-6">
            <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
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
              {/* Error message */}
              {formik.touched.gender && formik.errors.gender ? (
                <p className="text-danger">{formik.errors.gender}</p>
              ) : null}

              <div className="mt-3">
                <span className="mb-2">Date of birth</span>
                <input
                  type="date"
                  id="date"
                  name="date_of_birth"
                  className={`form-control ${styles.date}`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  // value={formik.values.date_of_birth}
                  value={formik.values.date_of_birth}
                />
              </div>

              {formik.touched.date_of_birth && formik.errors.date_of_birth ? (
                <p className="text-danger">{formik.errors.date_of_birth}</p>
              ) : null}

              <div className="mt-3">
                <textarea
                  className="form-control"
                  id="description"
                  placeholder="About me (optional)"
                  style={{ resize: "none" }}
                  name="about"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  // value={formik.values.about}
                  value={formik.values.about}
                ></textarea>

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
                    // value={formik.values.avatar}
                  />
                </div>
              </div>
              {formik.touched.avatar && formik.errors.avatar ? (
                <p className="text-danger">{formik.errors.avatar}</p>
              ) : null}

              <hr className="mt-5" />

              <div className="mb-3 me-2">
                <span>Contact information</span>
              </div>

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

              {successMsg ? (
                <div className="alert alert-success">{successMsg}</div>
              ) : null}

              {error ? <div className="alert alert-danger">{error}</div> : null}

              <div className="d-flex justify-content-between mt-3 align-items-center">
                <button
                  type="submit"
                  className={`btn ${styles.saveChangesButton} p-2`}
                >
                  Save Changes
                </button>

                <Link to={"/MyProfile"} className={` fw-bold text-black  `}>
                  Back to profile
                </Link>
              </div>
            </form>
          </div>

          <div className="col-md-6 d-flex mt-4 justify-content-start">
            <div className="d-flex align-items-center justify-content-center mr-3"></div>
            <div
              className="d-flex flex-column _1075545d dd0ed3be d059c029 "
              style={{ width: "50%" }}
            >
              <div className="border rounded-sm p-2 ">
                <div className="_1075545d _96d4439a ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill-rule="evenodd"
                    viewBox="0 0 1024 1024"
                    style={{ fill: "#CD0000" }}
                  >
                    <path d="M318 279.3h-54.8l-61.5-61.5v-54.9h54.8l61.6 61.5v54.9zm194-38.8l-38.8-38.8V124L512 85.3l38.8 38.8v77.6L512 240.5zm426.7 232.7L899.9 512h-77.6l-38.8-38.8 38.8-38.8H900l38.8 38.8zm-737-38.8l38.8 38.8-38.8 38.8H124l-38.8-38.8 38.8-38.8h77.6zm620.6-216.6l-61.5 61.5h-54.9v-54.9l61.6-61.5h54.8v54.9zm-200.6 404a154.9 154.9 0 0 1-47.6 32.4l-23.3 35.6v55h-77.6v-55L450 654.3a155.3 155.3 0 0 1-47.7-252 155.4 155.4 0 0 1 219.5 0 155.3 155.3 0 0 1 0 219.4zM473.2 861h77.6v-38.8h-77.6V861zM512 279.3a233 233 0 0 0-116.4 434.3V900l38.8 38.8h155.2l38.8-38.8V713.6A233 233 0 0 0 512 279.3z"></path>
                  </svg>
                  <span className="_6d5b4928 be13fe44 fw-bold">
                    Why is it important?
                  </span>
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
    </>
  );
}

export default EditProfile;
