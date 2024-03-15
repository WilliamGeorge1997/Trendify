import React from 'react'
import styles from './ProductItem.module.css';
import img1 from "../../assets/images/images.png";

export default function ProductItem({itemData}) {
  return (
    <dev className={styles.ProductItem}>
      <div className="card">
        <img src={img1} className="card-img-top" alt="..." />
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
          <p className="card-text fs-6 ">{itemData.created_at}</p>
        </div>
      </div>
    </dev>
  );
}
