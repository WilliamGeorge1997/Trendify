import React from "react";
import axios from "axios";
import { favouriteContext } from "../../Context/FavouriteContext";
import styles from "./Details.module.css";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { cartContext } from "../../Context/CartContext";
import { useContext } from "react";
import Loading from "../Loading/Loading";
import img from "../../assets/images/images.png";
import toast from "react-hot-toast";
export default function Details() {
  let { addToFavourite } = useContext(favouriteContext);

  async function addProductToFavourite(productId) {
    let res = await addToFavourite(productId);
  }

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
    <div className="container ">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 position-relative">
            <img
              src={
                product.images[0]
                  ? `http://127.0.0.1:8000/storage/${product.images[0].image_path}`
                  : img
              }
              className="card-img-top rounded-start"
              alt={product.title}
              width={300}
              height={300}
            />
            {product.stock > 0 || product.user.id > 1 ? (
              ""
            ) : (
              <span className="badge rounded-pill main-bg-color position-absolute top-0 start-0  m-2">
                Out Of Stock
              </span>
            )}
          </div>
          <div className="col-md-8 position-relative ">
            <div className="card-body">
              {" "}
              <p className="card-text fw-bold  main-color  mb-0">
                EGP {product.price}
              </p>
              <h5 className="card-title">
                {product.title}{" "}
                {product.user.id > 1 ? (
                  " "
                ) : (
                  <p className="fa-xs text-end mb-0">
                    <i className="fa-solid text-warning fa-star me-1"></i>
                    {product.rate}
                  </p>
                )}
              </h5>
              <p className="card-text ">
                {product.description.slice(0, 400) + "..."}
              </p>
              {product.egypt_city?.city_name || product.user.id > 1 ? (
                <p className="card-footer position-absolute bottom-0 end-0 start-0 m-0 d-flex justify-content-between fs-small small">
                  <span> {product.created_at?.split("T")[0]}</span>
                  <span> {product.egypt_city?.city_name}</span>
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="position-absolute button-0 ">
              {product.user.id > 1 ? (
                <button className="m-2 btn box-shadow shadow  main-bg-color  rounded">
                  <i className="fa-solid text-white fa-phone"></i>
                </button>
              ) : (
                <button
                  className="m-2 btn box-shadow shadow  main-bg-color rounded"
                  onClick={() => addProduct(product.id)}
                >
                  <i className="fa-solid text-white  fa-cart-plus"></i>
                </button>
              )}
              <button
                className="m-2 btn box-shadow  shadow main-bg-color rounded"
                onClick={() => addProductToFavourite(product.id)}
              >
                <i className="fa-regular fa-heart  text-white "></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
