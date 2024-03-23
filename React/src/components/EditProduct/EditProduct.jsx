import React, { useState, useEffect, setCities } from 'react';
import styles from '../Sell/Sell.module.css';
import { useFormik } from "formik";
import axios from 'axios';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  let token = localStorage.getItem("userToken");
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [product, setProduct] = useState(null);
  let [cities, setCities] = useState([]);
  const [image, setImage] = useState(null);

  const { id } = useParams();

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Mention the key features of your item (e.g. brand, model, age, type)'),
    description: Yup.string().required('Description is required').min(20, 'Description must be at least 20 characters'),
    price: Yup.number().required('Price is required').min(50, 'Price must be at least 50 EGP'),
  });

  async function getCity() {
    try {
      let { data } = await axios.get("http://127.0.0.1:8000/api/cities");
      setCities(data.cities);
    } catch (err) {
      setError(err.response.data.message);
      console.log(err);
    }
  }


// async function getProduct() {
//   try {
//   let res = await axios
//     .get("http://127.0.0.1:8000/api/products/33", {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//     setProduct(res.data.message);
//     console.log(product)
//     // console.log(res)
//     // console.log(res.data.message.images[0].image_path)
//     setImages(res.data.message.images[0]);
//     console.log(image)
    

//   } catch(err)  {
//       setError(err.response.data.message);
//   };

// }

//   useEffect(() => {
//   getProduct()
//   getCity();
//     }, []);

useEffect(() => {
  const getProduct = async () => {
    try {
      const token = localStorage.getItem('userToken');
      const response = await axios.get(`http://127.0.0.1:8000/api/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const responseData = response.data.message;
      setProduct(responseData);
      console.log(response.data.message.images[0].image_path)
      // Check if images exist and set the first image path to the state
      if (responseData.images && responseData.images.length > 0) {
        setImage(responseData.images[0].image_path);
      }
      // console.log(response)
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  getProduct();
}, []);

  const handleSubmit = async (values, { resetForm }) => {
    console.log(values)
    try {
      let response = await axios.post(`http://localhost:8000/api/products/${id}/edit`, values, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token} `,
        }
      });
      // Reset form fields after successful submission
      resetForm();
      alert('Product posted successfully!');
      console.log(response)

    } catch (error) {
      //  console.error('Error posting product:', error);
      alert('Failed to post product. Please try again later.');
    }
  };

  let formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      price: '',
      location_id: '',
      category_id: '',
      images: []
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    if (product) {
      formik.setValues({
        title: product.title || '',
        description: product.description || '',
        price: product.price || '',
        location_id: product.location_id || '',
        category_id: product.category_id || '',
        images: product.images || []
      });
    }
  }, [product]);

  if (!cities && product) {
    return <Loading />;
  }

// const imageURL = product.images.length > 0 ? `http://127.0.0.1:8000/storage/${images[0].image_path}` : null;

  return (
    <>
      <Helmet>
        <title>Sell Products</title>
      </Helmet>

     {/* <img src={`{http://127.0.0.1:8000/storage/${product.images[0].image_path}`}></img> */}

     {image && <img src={image} alt="Product" />}


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

          <select
                className=" form-select"
                name="location_id"
                id="location_id"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.location_id}
              >
                <option value="">Location</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.city_name}
                  </option>
                ))}
              </select>

            {formik.touched.location_id && formik.errors.location_id ? (
              <p className="text-danger">{formik.errors.location_id}</p>
            ) : null}

    <div className="dropdown">
      <select
        className="btn btn-white dropdown-toggle form-control"
        aria-label="Dropdown"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.category_id}
        name='category_id'
        id='category_id'
      >
        <option value="" disabled selected>
          Select Category
        </option>
        <optgroup label="Electronics">
          <option value="1">&nbsp;&nbsp;&nbsp;Mobile Phones</option>
          <option value="2">&nbsp;&nbsp;&nbsp;Laptops</option>
        </optgroup>
        <optgroup label="Personal Care">
          <option value="3">&nbsp;&nbsp;&nbsp;Fragrances</option>
          <option value="4">&nbsp;&nbsp;&nbsp;Skincare</option>
        </optgroup>
        <optgroup label="Home Supplies">
          <option value="5">&nbsp;&nbsp;&nbsp;Groceries</option>
          <option value="7">&nbsp;&nbsp;&nbsp;Furniture</option>
          <optgroup label="Home Decoration">
            <option value="6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home-decoration</option>
            <option value="19">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lighting</option>
          </optgroup>
        </optgroup>
        <optgroup label="Women">
          <option value="8">&nbsp;&nbsp;&nbsp;Tops</option>
          <option value="9">&nbsp;&nbsp;&nbsp;Womens-dresses</option>
          <option value="10">&nbsp;&nbsp;&nbsp;Womens-shoes</option>
          <optgroup label="Accessories">
            <option value="13">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Womens-watches</option>
            <option value="14">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Womens-bags</option>
            <option value="15">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Womens-jewellery</option>
          </optgroup>
        </optgroup>
      </select>
    </div> 
          <div className={styles.formGroup}>
            <label htmlFor="price" className={`${styles.label} ${formik.touched.price && formik.errors.price && styles.invalid}`}>
            Price</label>
          <input
            type="number"
            className={`${styles.inputField} mb-2 ${formik.touched.price && formik.errors.price && styles.invalid}`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
            name="price"
            id="price"
          />
          {formik.touched.price && formik.errors.price ? (
            <p className={`${styles.errorMessage} text-danger`}>{formik.errors.price}</p>
          ) : null}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="formFile" className={`${styles.label} ${formik.touched.images && formik.errors.images && styles.invalid} w-100 h-100`}>
            <h5>Upload you images</h5>
          </label>
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
            <p className={`${styles.errorMessage} text-danger`}>{formik.errors.images}</p>
          ) : null}
        </div>

        <div className="d-flex justify-content-center align-items-center">
            <div className="border rounded p-5">
            <i class="fa-regular fa-images"></i>
              </div>
              </div>
              <div className='row row-cols-6 justify-content-center'>
              {product?.images?.map((item,index)=>(
                <div key={index}>
              <img className='w-100' src={`http://127.0.0.1:8000/storage/${item.image_path}`}
              ></img>
              </div>))}.
            </div>

        {error ? <div className={`alert alert-danger ${styles.errorMessage}`}>{error}</div> : null}

        <button
          type="submit"
          className={`btn mt-2 ${styles.submitButton}`}
        >
          Add Product
        </button>

      </form>
    </div>
    </>
  );
};

export default EditProduct;
