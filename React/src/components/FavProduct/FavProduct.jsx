import React, { useContext, useState, useEffect } from "react";

import { favouriteContext } from "./../../Context/FavouriteContext";
import { Link } from "react-router-dom";
import styles from "./FavProduct.module.css";
import { Helmet } from "react-helmet";

export default function FavProduct() {
  const { getLoggedUserFavourites, removeLoggedUserFavourite } =
    useContext(favouriteContext);
  const [favouriteDetails, setFavouriteDetails] = useState(null);

  async function removeFavourite(productId) {
    const { data } = await removeLoggedUserFavourite(productId);
    setFavouriteDetails(data);
  }
  async function getFavourites() {
    const { data } = await getLoggedUserFavourites();
    setFavouriteDetails(data);
    console.log(data);
  }

  useEffect(() => {
    getFavourites();
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Favourite Products</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <section className="container mt-5">
        <h3 className="fw-bold mb-3">Favourites</h3>
        <div className="row">
          {favouriteDetails &&
            favouriteDetails.user &&
            favouriteDetails.user.favorite_products &&
            favouriteDetails.user.favorite_products.length > 0 ? (
            favouriteDetails.user.favorite_products.map((product) => (
              <div
                key={product.id}
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
              >
                <div className="card p-2 d-flex flex-column h-100 ">
                  <Link
                    className={styles.cardLink}
                    to={"/Details/" + product.id}
                  >
                    <div>
                      <img
                        src={
                          product.images[0] && product.images[0].image_path
                            ? `http://127.0.0.1:8000/storage/${product.images[0].image_path}`
                            : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png"
                        }
                        className="card-img-top border p-2"
                        alt={product.title}
                        width={20}
                        height={300}
                      />
                    </div>
                  </Link>
                  <div className="px-2 pt-2 mb-0 main-color d-flex justify-content-between">
                    <h5>EGP {product.price}</h5>
                    <button
                      className="border-0 bg-transparent"
                      onClick={() => removeFavourite(product.id)}
                    >
                      <i className="fas fa-heart fa-lg text-danger"></i>
                    </button>
                  </div>
                  <div className="card-body p-2">
                    <h5 className="card-title">
                      {product.title.split(" ").splice(0, 4).join(" ")}
                    </h5>
                    <p className="card-text">
                      {product.description.split(" ").splice(0, 20).join(" ")}{" "}
                      ...
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>{product.created_at.split("T")[0]}</span>
                    {product.user_id === 1 ? (
                      <div className="text-primary border-primary border px-1 rounded">
                        <i className="fa-solid fa-circle-check me-1 " />
                        <span>Verified</span>
                      </div>
                    ) : (
                      " "
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <h4 className="mt-5 pt-5">No favorites yet.</h4>
            </div>
          )}
        </div>
      </section>
    </>)
}
