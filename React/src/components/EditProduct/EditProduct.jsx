import React, { useState, useEffect } from "react";
import styles from "../Sell/Sell.module.css";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { Helmet } from "react-helmet";
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";


const EditProduct = () => {
  const token = localStorage.getItem("userToken");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [cities, setCities] = useState([]);
  const [isDirty, setIsDirty] = useState(false); 
  const { id } = useParams();

  async function getCity() {
    try {
      const { data } = await axios.get("http://127.0.0.1:8000/api/cities");
      setCities(data.cities);
    } catch (err) {
      setError(err.response.data.message);
      console.log(err);
    }
  }

  useEffect(() => {
    getCity();
  }, []);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/products/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const responseData = response.data.message;
        setProduct(responseData);
        setIsLoading(false);
        console.log(responseData);
      } catch (error) {
        toast.error("Error fetching product:", error);
        console.log(error);
      }
    };

    getProduct();
  }, [id, token]);

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required("Title is required, Please fill this field")
      .max(255, "Title should be less than 255 characters."),
    description: Yup.string()
      .required("Description is required")
      .min(20, "Description must be at least 20 characters"),
    price: Yup.number()
      .required("Price is required")
      .positive("Please add valid price"),
    category_id: Yup.string().required("Category is required"),
    images: Yup.string().required("Please provide an image"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setIsLoading(true);
    try {
      let response = await axios.post(
        `http://localhost:8000/api/products/${id}/edit`,
        values,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token} `,
          },
        }
      );
      resetForm();
      toast.success("AD edited successfully!");
      console.log(response);
    } catch (error) {
      toast.error("Failed to edit AD. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const formik = useFormik({
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

  useEffect(() => {
    if (product) {
      formik.setValues({
        title: product.title || "",
        description: product.description || "",
        price: product.price || "",
        location_id: product.location_id || "",
        category_id: product.category_id || "",
        images: product.images || [],
      });
    }
  }, [product]);


  const handleInputChange = () => {
    if (!isDirty) {
      setIsDirty(true);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Helmet>
        <title>Edit AD</title>
      </Helmet>

      <div className={styles.sellPage}>
        <h2 className="text-center">Edit Your AD</h2>
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
            <h5>Upload you images</h5>
            <div className="d-flex justify-content-center align-items-center mb-3">
              <label
                htmlFor="formFile"
                className={`${styles.label} ${
                  formik.touched.images &&
                  formik.errors.images &&
                  styles.invalid
                }   h-100 cursor-pointer`}
              >
                <div className="d-flex justify-content-center align-items-center">
                  <div className="border rounded p-5">
                    <i className="fa-regular fa-images"></i>
                  </div>
                </div>
              </label>
            </div>
            <div className="row row-cols-6 justify-content-center">
              {product?.images?.map((item, index) => (
                <div key={index}>
                  <img
                    className="w-100"
                    src={`http://127.0.0.1:8000/storage/${item.image_path}`}
                    alt="images"
                  ></img>
                </div>
              ))}
            </div>
            <input
              className={`${styles.inputField} form-control d-none`}
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
              <p className={`${styles.errorMessage} text-danger`}></p>
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
                type="submit"
                className={`btn ${styles.submitDisabledButton} w-100 mt-2`}
                disabled={!(formik.isValid && formik.dirty)}
              >
                Edit AD
              </button>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default EditProduct;
