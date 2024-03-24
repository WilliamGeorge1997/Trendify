import React, { useEffect, useState } from "react";
import styles from "./ShippingDetails.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Loading from "../Loading/Loading";

export default function ShippingDetails() {
  let token = localStorage.getItem("userToken");
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  let [cities, setCities] = useState([]);

  // ------------------ Get the  cities data from the API--------------------//

  async function getCity() {
    try {
      let { data } = await axios.get("http://127.0.0.1:8000/api/cities");
      setCities(data.cities);
    } catch (err) {
      setError(err.response.data.message);
    }
  }

  useEffect(() => {
    getCity();
  }, []);

  // --------------- Submit the form values to the Shipping API--------------//
  async function shippingSubmit(values) {
    setisLoading(true);

    try {
      let res = await axios.post(
        `http://127.0.0.1:8000/api/shipping/add`,
        values,
        {
          headers: {
            // -------Sending the token to the api ------------//
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        try {
          // -------Call another function for the payment method ------------//
          const data = await session(token);
          window.location.href = data.url;
        } catch (err) {
          // -------- Catch the error if exists ----------//
          setError(err.response.data.message);
        } finally {
          // -------- Stop the loading ----------//
          setisLoading(false);
        }
      } else {
        // -------- Catch the error if exists if the status code not 200 or success ----------//
        setError(`Unexpected status code: ${res.status}`);
      }
    } catch (err) {
      // -------- Catch the error if exists and set it the message----------//
      setError(err.response.data.message);
    }
  }

  // --------------- Submit the form values to the Session API--------------//
  async function session(token) {
    try {
      let response = await axios.post(
        `http://127.0.0.1:8000/api/session`,
        {},
        {
          headers: {
            // -------Sending the token to the api ------------//
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (err) {
      // -------- Catch the error if exists ----------//
      setError(err.response.data.message);
    }
  }

  // --------------- Validate the form values to the API--------------//

  let phoneRegExp = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/;

  let validationSchema = Yup.object().shape({
    phone: Yup.string()
      .required("Phone number is required.")
      .matches(phoneRegExp, "Egyptian phone numbers only."),
    city_id: Yup.string().required("City is required."),
    address: Yup.string()
      .required("Address is required.")
      .max(200, "Maximum characters allowed is 200"),
    zip_code: Yup.string()
      .required("Zip code is required")
      .matches(/^[0-9]+$/, "Must be only digits")
      .length(5, "Must be exactly 5 digits"),
  });

  // --------------- The form values that will be send to the API--------------//

  let formik = useFormik({
    initialValues: {
      phone: "",
      city_id: "",
      address: "",
      zip_code: "",
    },
    validationSchema: validationSchema,
    onSubmit: shippingSubmit,
  });

  // --------------- Create loading until fetching the user's data --------------//
  if (!cities) {
    return <Loading />;
  }

  return (
    <div className={`container my-4 ${styles.checkoutContainer} w-50 `}>
      <div className="row">
        <h2 className="ms-2">Shipping Information</h2>
        <hr />
        <div className="col-md-11 mx-auto">
          {/* --------------- The start of the form to store the data------------  */}
          <form onSubmit={formik.handleSubmit}>
            {/* ---------------Phone input and handle error  ------------  */}

            <div className="form-group mb-3">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Enter phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
            </div>

            {formik.touched.phone && formik.errors.phone ? (
              <p className="text-danger">{formik.errors.phone}</p>
            ) : null}

            {/* ---------------City input and handle error  ------------  */}

            <div className="form-group mb-3">
              <label htmlFor="phone">City</label>

              <select
                className=" form-select"
                name="city_id"
                id="city_id"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city_id}
              >
                <option value="">Choose your city</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.city_name}
                  </option>
                ))}
              </select>
            </div>

            {formik.touched.city_id && formik.errors.city_id ? (
              <p className="text-danger">{formik.errors.city_id}</p>
            ) : null}

            {/* ---------------Address input and handle error  ------------  */}

            <div className="form-group mb-3">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Enter address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
              />
            </div>

            {formik.touched.address && formik.errors.address ? (
              <p className="text-danger">{formik.errors.address}</p>
            ) : null}
            {/* ---------------Zip code input and handle error  ------------  */}

            <div className="form-group mb-3">
              <label htmlFor="zip_code">Zip Code:</label>
              <input
                type="text"
                className="form-control"
                id="zip_code"
                placeholder="Enter zip code"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.zip_code}
              />
            </div>

            {formik.touched.zip_code && formik.errors.zip_code ? (
              <p className="text-danger">{formik.errors.zip_code}</p>
            ) : null}

            {/* ---------------Showing the error from the server side  ------------  */}
            {error ? <div className="alert alert-danger">{error}</div> : null}

            {/* ---------------Place order button  ------------  */}

            {isLoading ? (
              <button type="button" className={`btn mt-2 px-4 submitButton `}>
                <i className="fas fa-spinner fa-spin"></i>
              </button>
            ) : (
              <>
                <button
                  disabled={!(formik.isValid && formik.dirty)}
                  type="submit"
                  className={`btn submitDisabledButton p-2 mt-2`}
                >
                  Place order
                </button>
              </>
            )}
          </form>
          {/* --------------- The end of the form to store the data------------  */}
        </div>
      </div>
    </div>
  );
}
