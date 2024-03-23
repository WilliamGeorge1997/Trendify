import React, { useState } from 'react';
import { useFormik } from "formik";
import axios from 'axios';
import * as Yup from 'yup';
import styles from './Sell.module.css';
import { Link } from 'react-router-dom';
import NavCreate from '../NavCreate/NavCreate';
import { Helmet } from 'react-helmet';

const Sell = () => {
  let token = localStorage.getItem("userToken");
  const [error, setError] = useState(null);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(
      "Mention the key features of your item (e.g. brand, model, age, type)"
    ),
    description: Yup.string()
      .required("Description is required")
      .min(20, "Description must be at least 20 characters"),
    price: Yup.number()
      .required("Price is required")
      .min(50, "Price must be at least 50 EGP"),
  });

  const handleSubmit = async (values, { resetForm }) => {
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
      // Reset form fields after successful submission
      resetForm();
      alert("Product posted successfully!");
    } catch (error) {
      //  console.error('Error posting product:', error);
      alert("Failed to post product. Please try again later.");
    }
  };

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

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sell Products</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <NavCreate />

      <div className={styles.sellPage}>
        <h2 className='text-center'>Post Your Product</h2>
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
          <div className={styles.formGroup}>
            <label htmlFor="title" className={`${styles.label} ${formik.touched.title && formik.errors.title && styles.invalid}`}>Title</label>
            <input
              type="text"
              className={`${styles.inputField} mb-2 ${formik.touched.title && formik.errors.title && styles.invalid}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
              name="title"
              id="title"
            />
            {formik.touched.title && formik.errors.title ? (
              <p className={`${styles.errorMessage} text-danger`}>{formik.errors.title}</p>
            ) : null}
          </div>

        <div className={styles.formGroup}>
          <label htmlFor="description" className={`${styles.label} ${formik.touched.description && formik.errors.description && styles.invalid}`}>Description</label>
          <textarea
            className={`${styles.inputField} mb-2 ${formik.touched.description && formik.errors.description && styles.invalid}`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            name="description"
            id="description"
          />
          {formik.touched.description && formik.errors.description ? (
            <p className={`${styles.errorMessage} text-danger`}>{formik.errors.description}</p>
          ) : null}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="location" className={`${styles.label} ${formik.touched.location && formik.errors.location && styles.invalid}`}>Location</label>
          <input
            type="text"
            className={`${styles.inputField} mb-2 ${formik.touched.location && formik.errors.location && styles.invalid}`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.location}
            name="location"
            id="location"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="category_id" className={`${styles.label} ${formik.touched.category_id && formik.errors.category_id && styles.invalid}`}>Category</label>
          <select
            className={`${styles.inputField} form-select form-select-sm mb-2 ${formik.touched.category_id && formik.errors.category_id && styles.invalid}`}
            id="category_id"
            name="category_id"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.category_id}
          >
            <option value="">Select Category</option>
            <option value="1">Women</option>
            <option value="2">Men</option>
            <option value="3">Children</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="price" className={`${styles.label} ${formik.touched.price && formik.errors.price && styles.invalid}`}>Price</label>
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
          <label htmlFor="formFile" className={`${styles.label} ${formik.touched.images && formik.errors.images && styles.invalid}`}>Upload your photo</label>
          <input
            className={`${styles.inputField} form-control mb-2 opacity-0`}
            type="file"
            id="formFile"
            multiple
            name="images"
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

        <button type="submit" className={`btn mt-2 ${styles.submitButton}`}>
          Add Product
        </button>
        
        <Link to={"/EditProduct"} className='fw-bold text-black'>
                  Edit product
                </Link>

      </form>
    </div>
    </>
  );
};

export default Sell;
