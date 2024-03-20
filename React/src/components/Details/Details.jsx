import React from "react";
import axios from "axios";
import styles from "./Details.module.css";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { cartContext } from "../../Context/CartContext";
import { useContext } from "react";
import Loading from "../Loading/Loading";
import img from "../../assets/images/images.png";
import toast from "react-hot-toast";
export default function Details() {
  function fetchProduct11(productId) {
    return axios.get(`http://127.0.0.1:8000/api/products/${productId}`);
  }

  const { id } = useParams();

  const {
    data: prod,
    isLoading,
    isError,
  } = useQuery(["details", id], () => fetchProduct11(id));
  let { addToCart } = useContext(cartContext);

  async function addProduct(productId) {
    let res = await addToCart(productId);
  }
  if (isLoading) {
    return <Loading />;
  }

  if (isError || !prod) {
    return <div>Error fetching product</div>;
  }
  let product = prod.data.message;
  return (
    <div className={styles.CategoryProductItem}>
      <div className="card mb-3" style={{ maxWidth: 540 }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={
                product.images[0]
                  ? `http://127.0.0.1:8000/storage/${product.images[0].image_path}`
                  : img
              }
              className={`card-img-top ${styles.imgCard}`}
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <h6 className="card-text">{product.description}</h6>
              <p className="card-text mb-0">{product.location}</p>
              {product.user_id > 1 ? (
                " "
              ) : (
                <p className="card-text fs-small small"> {product.created_at?.split("T")[0]}</p>
              )}
            </div>
            <button
              className="m-2 btn main-bg-color w-50 "
              onClick={() => addProduct(product.id)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
