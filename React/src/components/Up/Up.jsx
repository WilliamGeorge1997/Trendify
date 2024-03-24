import React from "react";
import styles from "./Up.module.css";
export default function Up() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      {" "}
      <button
        className={`${styles.scrollUp}  main-bg-color`}
        onClick={scrollToTop}
      >
        <div className={`${styles.arrowContainer}`}>
        <i className="fa-solid fa-arrow-up"></i>
        </div>
      </button>
    </>
  );
}
