import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductItem.module.css";
import { cartContext } from "../../Context/CartContext";
import { useContext } from "react";
import img from "../../assets/images/images.png";
export default function ProductItem({ itemData }) {
  let { addToCart } = useContext(cartContext);

  async function addProduct(productId) {
    let res = await addToCart(productId);
  }
  return (
    <div className={`card ${styles.card} d-flex justify-content-between `}>
      <Link
        to={"/Details/" + itemData.id}
        className="text-decoration-none text-black"
      >
        <img
          src={
            itemData.images[0]
              ? `http://127.0.0.1:8000/storage/${itemData.images[0].image_path}`
              : img
          }
          className={`card-img-top ${styles.imgCard}`}
          alt="..."
        />

        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center ">
            <p className="card-text fw-bold  main-color  mb-0">
              EGP {itemData.price}
            </p>
            <i className="fa-regular fa-heart  main-color "></i>
          </div>
          <h5 className="card-title ">
            {itemData.title.slice(0, 30) + "..."}
            {itemData.user_id > 1 ? (
              " "
            ) : (
              <p className="fa-xs text-end">
                <i class="fa-solid text-warning fa-star me-1"></i>
                {itemData.rate}
              </p>
            )}
          </h5>
          <h6 className="card-title ">
            {itemData.description.slice(0, 150) + "..."}
          </h6>
          {itemData.stock > 0 || itemData.user_id > 1 ? (
            ""
          ) : (
            <span className="badge rounded-pill main-bg-color ">
              Out Of Stock
            </span>
          )}
          {itemData.location || itemData.user_id > 1 ? (
            <p className="card-text mb-0">{itemData.location}</p>
          ) : (
            ""
          )}

          {itemData.user_id > 1 ? (
            " "
          ) : (
            <p className="card-text fs-small small">
              {itemData.created_at?.split("T")[0]}
            </p>
          )}
        </div>
      </Link>
      <div>
        {itemData.user_id > 1 ? (
          <button className="m-2 btn box-shadow w-25 position-absolute top-0 shadow bg-body-tertiary rounded">
            <i className="fa-solid main-color fa-phone"></i>
          </button>
        ) : (
          <button
            className="m-2 btn box-shadow w-25 position-absolute top-0 shadow bg-body-tertiary rounded"
            onClick={() => addProduct(itemData.id)}
          >
            <i class="fa-solid main-color fa-cart-plus"></i>
          </button>
        )}
      </div>
    </div>
  );
}
