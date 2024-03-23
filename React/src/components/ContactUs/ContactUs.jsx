import React,  { useState } from "react";
import styles from "./ContactUs.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import axios from "axios";



export default function ContactUs() {
  let token = localStorage.getItem("userToken");
  
  const [isLoading, setisLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(null);
  const [error, setError] = useState(null);


  async function contactSubmit(values) {
    setisLoading(true);

    let  response  = await axios
      .post(`http://127.0.0.1:8000/api/contact`, values,{
        headers: {
          Authorization: `Bearer ${token}`,
        }})
      .catch((err) => {
        setisLoading(false);
        setError(err.response.data.message);
      });
     if (response.status === 200) {
       setisLoading(false);
     // navigate("/login");
      setSuccessMsg(response.data.message);
  }

  }

  let phoneRegExp = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/;

  let validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must at least 3 characters or more.")
      .max(50, "Name must be less than 50 characters.")
      .required("Name is required."),
    email: Yup.string()
      .email("Email is invalid.")
      .required("Email is required."),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid."),
      
    subject: Yup.string()
    .max(100, "Subject must be less than 100 characters.")
      .required("Subject is required"),
    
      description: Yup.string()
      .required("Description is required"),

      category: Yup.string()
    .max(50, "Category must be less than 50 characters."),

    product: Yup.string()
    .max(200, "Product must be less than 200 characters."),
    
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      product:"",
      description:"",
      category: ""
    },
    validationSchema: validationSchema,
     onSubmit: contactSubmit,
  });

  return (
    <div className="container">
      <div className="w-100 mx-auto py-5">
        <h2 className="mb-4">Submit a request</h2>

        <form onSubmit={formik.handleSubmit}>
          <label className="mb-1" htmlFor="email">
            Your email address
          </label>
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

          <label className="mb-1" htmlFor="subject">
            Subject
          </label>
          <input
            type="text"
            className="form-control mb-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
            name="subject"
            id="subject"
          />

{formik.touched.subject && formik.errors.subject ? (
            <p className="text-danger">{formik.errors.subject}</p>
          ) : null}

          <label className="mb-1" htmlFor="name">
            Name
          </label>
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



          <label className="mb-1" htmlFor="description">
            {" "}
            Describe your issue
          </label>
          <textarea
            className="form-control mb-2"
            id="description"
         
            style={{ resize: "none", height: "200px" }}
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          >
            {" "}
          </textarea>

          <div className="dropdown mt-3">
          <select
            className={`form-select ${styles.selectForm} mb-2`}
            aria-label="Dropdown"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.category}
              name="category"
              id="category"
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
          {formik.touched.category && formik.errors.category? (
            <p className={`${styles.errorMessage} text-danger`}>
              {formik.errors.category}
            </p>
          ) : null}
<label className="mb-1" htmlFor="product">
Product
          </label>
          <input
            type="text"
            className="form-control mb-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.product}
            name="product"
            id="product"
          />

          {formik.touched.product && formik.errors.product ? (
            <p className="text-danger">{formik.errors.product}</p>
          ) : null}
          
          <label htmlFor="phone">Phone</label>
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



           {error ? <div className="alert alert-danger">{error}</div> : null}  
           {successMsg ? <div className="alert alert-success">{successMsg}</div> : null} 

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
              className={`btn ${styles.submitDisabledButton}  mt-2`}
            >
              Submit
            </button>

          </>
           )} 
        </form>
      </div>
    </div>
  );
}