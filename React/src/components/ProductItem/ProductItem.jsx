import React from 'react'
import styles from './ProductItem.module.css';
import img1 from "../../assets/images/images.png";

export default function ProductItem() {
  return (
    <dev className={styles.ProductItem}>
      <div className="card" style={{ width: "18rem" }}>
        <img src={img1} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center ">
            <p className="card-text fw-bold  main-color  mb-0">EGP 1000</p>
            <i class="fa-regular fa-heart"></i>
          </div>
          <h5 className="card-title ">title</h5>
          <p className="card-text mb-0">location</p>
          <p className="card-text fs-6 ">time</p>
        </div>
      </div>
    </dev>
  );
}
