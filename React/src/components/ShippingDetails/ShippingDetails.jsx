import React from "react";
import styles from "./ShippingDetails.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function ShippingDetails() {


  

  let phoneRegExp = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/;

  let validationSchema = Yup.object({
    phone: Yup.string()
      .required("Phone number is required.")
      .matches(phoneRegExp, "Egyptian phone numbers only."),
      city: Yup.date("Date is invalid").required("City is required."),
    gender: Yup.string(),
    about: Yup.string("Invalid input data").max(
      250,
      "Maximum characters are 250"
    ),
  });

  let formik = useFormik({
    initialValues: {
      phone: "",
      city_id: "",
      address: "",
      zip_code: "",
    },
    validationSchema: validationSchema,
    // onSubmit: profileSubmit,
  });

  return (
    <div className={`container ${styles.checkoutContainer}`}>
      <div className="row">
        <div className="col-md-4 billing-info">
          <h2>Shipping Information</h2>
          <hr />

          <form>
            <div className="form-group mb-3">
              <label for="phone">Phone</label>
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

            <div className="form-group mb-3">
              <label for="city_id">City</label>
              <input
                type="text"
                className="form-control"
                id="city_id"
                placeholder="Enter city"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city_id}
              />
            </div>

            <div className="form-group mb-3">
              <label for="address">Address</label>
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

            <div className="form-group mb-3">
              <label for="city">City:</label>
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder="Enter city"
              />
            </div>

            <div className="form-group mb-3">
              <label for="zip_code">Zip Code:</label>
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

            <button
              type="submit"
              className={`btn ${styles.saveChangesButton} p-2`}
            >
              Place Order
            </button>
          </form>
        </div>

        <div className="col-md-8 order-summary">
          <h2>Order Summary</h2>
          <hr />
          {/* List cart items here (replace with your data fetching logic) */}
          <div className={`${styles.productItem}`}>
            <img
              className={`${styles.productItemImg}`}
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
              alt="Product "
            />
            <div className={`${styles.productDetails}`}>
              <p>Product Name</p>
              <span className="price">$19.99</span>
              <span className="quantity">x 1</span>
            </div>
          </div>
          {/* Add more product items for each item in your cart */}

          <hr />
          <div className={`${styles.subtotal}`}>
            <p>Subtotal:</p>
            <span>$19.99</span> {/* Update this based on cart total */}
          </div>
        </div>
      </div>
    </div>
  );
}
