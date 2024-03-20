import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductItem.module.css";
import { cartContext } from "../../Context/CartContext";
import { favouriteContext } from "../../Context/FavouriteContext";
import { Fragment, useContext } from "react";
import img from "../../assets/images/images.png";
export default function ProductItem({ itemData }) {
  let { addToCart } = useContext(cartContext);
  let { addToFavourite } = useContext(favouriteContext);

  async function addProductToFavourite(productId) {
    let res = await addToFavourite(productId);
  }

  async function addProduct(productId) {
    let res = await addToCart(productId);
  }

  return (
    <div className={`card ${styles.card} d-flex justify-content-between `}>
      <Link
        to={"/Details/" + itemData.id}
        className="text-decoration-none text-black"
      >
        {itemData.images && itemData.images.length > 0 && (
          <img
            src={
              itemData.images[0]
                ? `http://127.0.0.1:8000/storage/${itemData.images[0].image_path}`
                : img
            }
            className="card-img-top border p-2"
            alt={itemData.title}
            width={20}
            height={300}
          />
        )}
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center ">
            <p className="card-text fw-bold  main-color  mb-0">
              EGP {itemData.price}
            </p>
          </div>
          <h5 className="card-title">
            {itemData.title.slice(0, 30) + "..."}
            {itemData.user.id > 1 ? (
              " "
            ) : (
              <p className="fa-xs text-end mb-0">
                <i className="fa-solid text-warning fa-star me-1"></i>
                {itemData.rate}
              </p>
            )}
          </h5>
          <h6 className="card-title ">
            {itemData.description.slice(0, 55) + "..."}
          </h6>
          {itemData.stock > 0 || itemData.user.id > 1 ? (
            ""
          ) : (
            <span className="badge rounded-pill main-bg-color  position-absolute bottom-0 mb-2 ms-2 start-0 ">
              Out Of Stock
            </span>
          )}
          {itemData.egypt_city?.city_name || itemData.user.id > 1 ? (
            <p className="card-footer position-absolute bottom-0 end-0 start-0 m-0 d-flex justify-content-between fs-small small">
              <span> {itemData.created_at?.split("T")[0]}</span>
              <span> {itemData.egypt_city?.city_name}</span>
            </p>
          ) : (
            ""
          )}
        </div>
      </Link>
      <div>
        {itemData.user.id > 1 ? (
          <button
            type="tel"
            value={itemData.user.phone}
            className="m-2 btn box-shadow w-25 position-absolute top-0 shadow bg-body-tertiary rounded"
          >
            <i className="fa-solid main-color fa-phone"></i>
          </button>
        ) : (
          <button
            className="m-2 btn box-shadow w-25 position-absolute top-0 shadow bg-body-tertiary rounded"
            onClick={() => addProduct(itemData.id)}
          >
            <i className="fa-solid main-color fa-cart-plus"></i>
          </button>
        )}
        <button
          className="m-2 btn box-shadow w-25 position-absolute top-0 end-0 shadow bg-body-tertiary rounded"
          onClick={() => addProductToFavourite(itemData.id)}
        >
          <i className="fa-regular fa-heart  main-color "></i>
        </button>
      </div>
    </div>
  );
}
