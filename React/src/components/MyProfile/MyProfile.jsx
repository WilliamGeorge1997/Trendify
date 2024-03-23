import styles from "./MyProfile.module.css";
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Loading/Loading";
import ProductItem from "../ProductItem/ProductItem";
import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet";


function MyProfile() {
 let token = localStorage.getItem("userToken");
 const [error, setError] = useState(null);
 const [user, setUser] = useState(null);
 const [products, setProduct] = useState([]);
 const { id } = useParams();
async function getData() {
  try {
    if (parseInt(id) === 0) {
      const response = await axios.get("http://127.0.0.1:8000/api/user", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProduct(response.data.user.products);
      setUser(response.data.user);
    } else {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/userproducts/${id}`
      );
      setProduct(response.data.user.products);
      setUser(response.data.user);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

  useEffect(() => {
    getData();
  }, []);
  if (!user) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Profile</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <main className={`container my-5  ${styles.myProfileForm} w-75 m-auto`}>
        <div className="row">
          <div className="col-md-4">
            <div className="  mr-3">
              <div className="mb-2">
                {user.avatar ? (
                  <img
                    src={`http://127.0.0.1:8000/storage/${user.avatar}`}
                    alt="avatar"
                    className={`${styles.avatarImg}`}
                  />
                ) : (
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                    alt="avatar"
                    className={`${styles.avatarImg}`}
                  />
                )}
              </div>

              <hr className="w-50 "></hr>
              {user.gender !== null ? (
                <Fragment>
                  <div className="mb-2">
                    <span className=" fw-bold">Gender:</span>
                    <span className="text-muted"> {user.gender} </span>
                  </div>
                </Fragment>
              ) : (
                ""
              )}

              {user.date_of_birth !== null ? (
                <Fragment>
                  <div className="mb-2">
                    <span className="fw-bold">BirthDate: </span>
                    <span className="text-muted">{user.date_of_birth}</span>
                  </div>
                </Fragment>
              ) : (
                ""
              )}

              {user.about !== null ? (
                <Fragment>
                  <div className="mb-2 pe-5">
                    <span className="fw-bold">About: </span>
                    <span className="text-muted">{user.about} </span>
                  </div>
                </Fragment>
              ) : (
                ""
              )}

              {user.phone !== null ? (
                <div className="mb-2 ">
                  <span className="fw-bold">Phone: </span>
                  <span className="text-muted">{user.phone}</span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="col-md-8">
            <h2 className="d-inline "> {user.name}</h2>
            <hr className="mt-4"></hr>
            {products == [] ? (
              <div className="no-ads-container">
                <div className="text-center">
                  <picture>
                    <source
                      srcSet="https://www.dubizzle.com.eg/assets/iconNotFound.6d0163dc18bc6bc7e86f85ca0835df6d.webp"
                      type="image/webp"
                    />
                    <source
                      srcSet="https://www.dubizzle.com.eg/assets/iconNotFound.6d0163dc18bc6bc7e86f85ca0835df6d.png"
                      type="image/png"
                    />

                    <img
                      src="https://www.dubizzle.com.eg/assets/iconNotFound.6d0163dc18bc6bc7e86f85ca0835df6d.webp"
                      alt="Not found"
                      className="not-found-image"
                      style={{ width: "200px", height: "200px" }}
                    />
                  </picture>
                </div>

                <div className="text-center">
                  <span className="no-ads-text highlight">
                    There are no ads
                  </span>
                </div>

                <div className="text-center">
                  <span className="no-ads-text">
                    When users post ads, they will appear here
                  </span>
                </div>
              </div>
            ) : (
              <div className=" container-fluid ">
                <div className="row row-cols-lg-2 ">
                  {products?.map((item) => (
                    <div className="p-3" key={item.id}>
                      <ProductItem itemData={item} />
                    </div>
                  ))}
                </div>
              </div>
            )}
            {error ? <div className="alert alert-danger">{error}</div> : null}
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default MyProfile;
