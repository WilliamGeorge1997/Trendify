import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import styles from "./Sell.module.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Loading from "../Loading/Loading";
import toast from "react-hot-toast";

const Sell = () => {
  let token = localStorage.getItem("userToken");
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  let [cities, setCities] = useState([]);

  async function getCity() {
    try {
      let { data } = await axios.get("http://127.0.0.1:8000/api/cities");
      setCities(data.cities);
    } catch (err) {
      setError(err.response.data.message);
      console.log(err);
    }
  }

  useEffect(() => {
    getCity();
  }, []);

  const handleSubmit = async (values, { resetForm }) => {
    console.log(values);
    try {
      let response = await axios.post(
        "http://localhost:8000/api/products",
        values,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token} `,
          },
        }
      );
      resetForm();
      toast.success("Product posted successfully!");
      console.log(response);
    } catch (error) {
      toast.error("Failed to post product. Please try again later.");
    }
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(
      "Title is required, Please fill this field"
    ).max(255, "Title should be less than 255 characters."),
    description: Yup.string()
      .required("Description is required")
      .min(20, "Description must be at least 20 characters"),
    price: Yup.number()
      .required("Price is required")
      .positive("Please add valid price"),
    category_id: Yup.string()
    .required("Category is required"),
    images: Yup.string()
    .required("Please provide an image")
  });

  let formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      location_id: "",
      category_id: "",
      images: [],
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  if (!cities) {
    return <Loading />;
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sell Products</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className={styles.sellPage}>
        <h2 className="text-center">Post Your Product</h2>
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
          <div className={styles.formGroup}>
            <label
              htmlFor="title"
              className={`${styles.label} ${
                formik.touched.title && formik.errors.title && styles.invalid
              }`}
            >
              Title
            </label>
            <input
              type="text"
              className={`${styles.inputField} mb-2 ${
                formik.touched.title && formik.errors.title && styles.invalid
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
              name="title"
              id="title"
            />
            <p className="small fs-small">
              Mention the key features of your item (e.g. brand, model, age,
              type)
            </p>
            {formik.touched.title && formik.errors.title ? (
              <p className={`${styles.errorMessage} text-danger`}>
                {formik.errors.title}
              </p>
            ) : null}
          </div>

          <div className={styles.formGroup}>
            <label
              htmlFor="description"
              className={`${styles.label} ${
                formik.touched.description &&
                formik.errors.description &&
                styles.invalid
              }`}
            >
              Description
            </label>
            <textarea
              className={`pb-0 ${styles.inputField} ${
                formik.touched.description &&
                formik.errors.description &&
                styles.invalid
              } ${styles.descriptionInput}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
              name="description"
              id="description"
              rows="5"
            />
            <p className="small fs-small">
             Include condition, features and reason for selling
            </p>
            {formik.touched.description && formik.errors.description ? (
              <p className={`${styles.errorMessage} text-danger`}>
                {formik.errors.description}
              </p>
            ) : null}
          </div>


          <select
            className={`form-select ${styles.selectForm} mb-4`}
            name="location_id"
            id="location_id"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.location_id}
          >
            <option value="">Select Location</option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.city_name}
              </option>
            ))}
          </select>

          {formik.touched.location_id && formik.errors.location_id ? (
            <p className={`${styles.errorMessage} text-danger`}>
              {formik.errors.location_id}
            </p>
          ) : null}

          <div className="dropdown">
            <select
              className={`form-select ${styles.selectForm} mb-4`}
              aria-label="Dropdown"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.category_id}
              name="category_id"
              id="category_id"
            >
              <option value="" disabled selected>
                Select Category
              </option>
              <optgroup label="Electronics">
                <option value="1">Mobile Phones</option>
                <option value="2">Laptops</option>
              </optgroup>
              <optgroup label="Personal Care">
                <option value="3">Fragrances</option>
                <option value="4">Skincare</option>
              </optgroup>
              <optgroup label="Home Supplies">
                <option value="5">Groceries</option>
                <option value="7">Furniture</option>
                <optgroup label="Home Decoration">
                  <option value="6">Home-decoration</option>
                  <option value="19">Lighting</option>
                </optgroup>
              </optgroup>
              <optgroup label="Women">
                <option value="8">Tops</option>
                <option value="9">Womens-dresses</option>
                <option value="10">Womens-shoes</option>
                <optgroup label="Accessories">
                  <option value="13">Womens-watches</option>
                  <option value="14">Womens-bags</option>
                  <option value="15">Womens-jewellery</option>
                </optgroup>
              </optgroup>
            </select>
          </div>
          {formik.touched.category_id && formik.errors.category_id ? (
            <p className={`${styles.errorMessage} text-danger`}>
              {formik.errors.category_id}
            </p>
          ) : null}

          <div className={styles.formGroup}>
            <label
              htmlFor="price"
              className={`${styles.label} ${
                formik.touched.price && formik.errors.price && styles.invalid
              }`}
            >
              Price
            </label>
            <input
              type="number"
              className={`${styles.inputField} mb-2 ${
                formik.touched.price && formik.errors.price && styles.invalid
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
              name="price"
              id="price"
            />
            {formik.touched.price && formik.errors.price ? (
              <p className={`${styles.errorMessage} text-danger`}>
                {formik.errors.price}
              </p>
            ) : null}
          </div>

          <div className={styles.formGroup}>
            <label
              htmlFor="formFile"
              className={`${styles.label} ${
                formik.touched.images && formik.errors.images && styles.invalid
              } w-100 h-100`}
            >
              <h6>Upload your images</h6>
              <div className="d-flex justify-content-center align-items-center">
                <div className="border rounded p-5">
                  <i className="fa-regular fa-images"></i>
                </div>
              </div>
            </label>
            <p className="small fs-small text-center">
          For the cover picture we recommend using the landscape mode.
          </p>
            <input
              className={`${styles.inputField} form-control mb-2 opacity-0`}
              type="file"
              id="formFile"
              multiple
              name="images[]"
              accept="image/jpeg, image/png, image/jpg, image/gif, image/webp"
              onChange={(event) =>
                formik.setFieldValue("images", event.target.files)
              }
            
              onBlur={formik.handleBlur}
            />
            {formik.touched.images && formik.errors.images ? (
              <p className={`${styles.errorMessage} text-danger`}>
                {formik.errors.images}
              </p>
            ) : null}
          </div>

          {error ? (
            <div className={`alert alert-danger ${styles.errorMessage}`}>
              {error}
            </div>
          ) : null}

          {isLoading ? (
            <button
              type="button"
              className={`btn mt-2  ${styles.submitButton}  `}
            >
              <i className="fas fa-spinner fa-spin"></i>
            </button>
          ) : (
            <>
              <button
                disabled={!(formik.isValid && formik.dirty)}
                type="submit"
                className={`btn ${styles.submitDisabledButton} w-100 mt-2`}
              >
                Add Product
              </button>
              </>
          )}

        </form>
      </div>
    </>
  );
};

export default Sell;
