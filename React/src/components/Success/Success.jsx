import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const SuccessPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .delete(`http://127.0.0.1:8000/api/carts/delete`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      })
      .then((response) => {
        window.location.href = "/home";
      })
      .catch((error) => {
        console.error("");
      });
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
          <div className=" mt-4 d-flex justify-content-center align-content-center">
            <loading />
          </div>
        </div>
      ) : (
""      )}
    </Fragment>
  );
};

export default SuccessPage;
