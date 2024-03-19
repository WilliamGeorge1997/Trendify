import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductItem.module.css";
import { cartContext } from "../../Context/CartContext";
import { favouriteContext } from "../../Context/FavouriteContext";
import { useContext } from "react";

export default function ProductItem({ itemData }) {
  let { addToCart } = useContext(cartContext);
  let { addToFavourite } = useContext(favouriteContext);

  async function addProductToFavourite(productId) {
    let res = await addToFavourite(productId);
    console.log(res);
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
            src={`http://127.0.0.1:8000/storage/${itemData.images[0].image_path}`}
            className={`card-img-top ${styles.imgCard}`}
            alt="..."
          />
        )}
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center ">
            <p className="card-text fw-bold  main-color  mb-0">
              EGP {itemData.price}
            </p>
            <i className="fa-regular fa-heart  main-color "></i>
          </div>
          <h5 className="card-title ">
            {itemData.title.slice(0, 30) + "..."}
            <p className="fa-xs text-end">
              <i class="fa-solid text-warning fa-star me-1"></i>
              {itemData.rate}
            </p>
          </h5>
          <h6 className="card-title ">
            {itemData.description.slice(0, 150) + "..."}
          </h6>
          {itemData.stock > 0 ? (
            ""
          ) : (
            <span className="badge rounded-pill main-bg-color ">
              Out Of Stock
            </span>
          )}
          {itemData.location ? (
            <p className="card-text mb-0">{itemData.location}</p>
          ) : (
            ""
          )}

          {/*    <p className="card-text fs-small small">
            {itemData.created_at.split("T")[0]}
  </p> */}
        </div>
      </Link>
      <div>
        <button
          className="m-2 btn box-shadow w-25 position-absolute top-0 shadow bg-body-tertiary rounded"
          onClick={() => addProduct(itemData.id)}
        >
          <i className="fa-solid main-color fa-cart-plus"></i>
        </button>
        <button onClick={() => addProductToFavourite(itemData.id)}>
          Add to favourite
        </button>
      </div>
    </div>
  );
}
