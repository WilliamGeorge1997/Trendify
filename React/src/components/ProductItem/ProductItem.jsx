import React from "react";
import { Link } from "react-router-dom";

export default function ProductItem({ itemData }) {
  return (
    <Link to={"/Details/" + itemData.id} className="text-decoration-none">
      <div className="card">
        <img
          src={`http://127.0.0.1:8000/storage/${itemData.images[0].image_path}`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center ">
            <p className="card-text fw-bold  main-color  mb-0">
              EGP {itemData.price}
            </p>
            <i className="fa-regular fa-heart"></i>
          </div>
          <h5 className="card-title ">{itemData.title}</h5>
          <h6 className="card-title ">{itemData.description}</h6>

          <p className="card-text mb-0">{itemData.location}</p>
          <p className="card-text fs-small small">
            {itemData.created_at.split("T")[0]}
          </p>
        </div>
      </div>
    </Link>
  );
}
