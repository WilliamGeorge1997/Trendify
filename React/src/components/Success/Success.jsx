import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import styles from "./Success.module.css";
const SuccessPage = () => {
  const [loading, setLoading] = useState(true);

  function addPayment() {
    return axios
      .post("http://127.0.0.1:8000/api/payment", null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      })
      .then((res) => res)
      .catch((err) => err);
  }

  function deleteShipping() {
    return axios
      .delete("http://127.0.0.1:8000/api/shipping/delete", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      })
      .then((res) => res)
      .catch((err) => err);
  }
  function deleteCart() {
    return axios
      .delete(`http://127.0.0.1:8000/api/carts/delete`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      })
      .then((response) => {
        window.location.href = "/home";
      })
      .catch((error) => {});
  }

  useEffect(() => {
    async function success() {
      await addPayment();
      await deleteShipping();
      await deleteCart();
    }
    success();
  }, []);

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Success</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {loading ? (
        <div className="mt-5 pt-5">
          <div className=" d-flex justify-content-center align-content-center">
            <h2 className="main-color">Thanks for purchasing from Trendify!</h2>
          </div>
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
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default SuccessPage;
