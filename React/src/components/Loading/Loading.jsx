import React from "react";
import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div
      className={`${styles.Loading} main-color d-flex align-items-center justify-content-center`}
    >
      <div className={styles.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
