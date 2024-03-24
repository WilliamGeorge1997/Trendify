import React, { useContext, useState, useEffect, Fragment } from "react";
import img from "../../assets/images/images.png";
import { favouriteContext } from "./../../Context/FavouriteContext";
import { Link } from "react-router-dom";
import styles from "./FavProduct.module.css";
import { Helmet } from "react-helmet";
import { cartContext } from "../../Context/CartContext";
import Loading from "../Loading/Loading";

export default function FavProduct() {
  let { addToCart } = useContext(cartContext);
  const { getLoggedUserFavourites, removeLoggedUserFavourite } =
    useContext(favouriteContext);
  const [favouriteDetails, setFavouriteDetails] = useState(null);

  async function removeFavourite(productId) {
    const { data } = await removeLoggedUserFavourite(productId);
    setFavouriteDetails(data);
    console.log(data);
  }
  async function getFavourites() {
    const { data } = await getLoggedUserFavourites();
    setFavouriteDetails(data);
  }

  async function addProduct(productId) {
    let res = await addToCart(productId);
  }
  useEffect(() => {
    getFavourites();
  }, []);

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Favourite Products</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <section className="container mt-5">
        <h3 className="fw-bold mb-3">Favourites</h3>
        <div className="row ">
          {!favouriteDetails ? (
            <Loading />
          ) : favouriteDetails &&
            favouriteDetails.user &&
            favouriteDetails.user.favorite_products &&
            favouriteDetails.user.favorite_products.length > 0 ? (
            favouriteDetails.user.favorite_products.map((product) => (
              <div className="p-1 col-lg-3 col-md-4 col-sm-6" key={product.id}>
                <div
                  className={`card ${styles.card} d-flex justify-content-between `}
                >
                  <Link
                    to={`/Details/${product.id}`}
                    className="text-decoration-none text-black"
                  >
                    <img
                      src={
                        product.images[0]
                          ? `http://127.0.0.1:8000/storage/${product.images[0].image_path}`
                          : img
                      }
                      className="card-img-top border p-2"
                      alt={product.title}
                      width={20}
                      height={300}
                    />

                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center ">
                        <p className="card-text fw-bold  main-color  mb-0">
                          EGP {product.price}
                        </p>
                      </div>
                      <h5 className="card-title">
                        {product.title.slice(0, 30) + "..."}
                        {product.user.id > 1 ? (
                          " "
                        ) : (
                          <p className="fa-xs text-end mb-0">
                            <i className="fa-solid text-warning fa-star me-1"></i>
                            {product.rate}
                          </p>
                        )}
                      </h5>
                      <h6 className="card-title ">
                        {product.description.slice(0, 55) + "..."}
                      </h6>
                      {product.stock > 0 || product.user.id > 1 ? (
                        ""
                      ) : (
                        <span className="badge rounded-pill main-bg-color  position-absolute bottom-0 mb-2 ms-2 start-0 ">
                          Out Of Stock
                        </span>
                      )}
                      {product.egypt_city?.city_name || product.user.id > 1 ? (
                        <h6 className="card-footer position-absolute bottom-0 end-0 start-0 m-0 d-flex justify-content-between fs-small small">
                          <span> {product?.created_at?.split("T")[0]}</span>
                          <span> {product?.egypt_city?.city_name}</span>
                          <Link
                            className="text-decoration-none main-color"
                            to={`/MyProfile/${product.user.id}`}
                          >
                            {product.user.name}{" "}
                          </Link>
                        </h6>
                      ) : (
                        ""
                      )}
                    </div>
                  </Link>
                  <div>
                    {product.user.id > 1 ? (
                      <button className="m-2 btn box-shadow w-25 position-absolute top-0 shadow bg-body-tertiary rounded">
                        <i className="fa-solid main-color fa-phone"></i>
                      </button>
                    ) : (
                      <button
                        className="m-2 btn box-shadow w-25 position-absolute top-0 shadow bg-body-tertiary rounded"
                        onClick={() => addProduct(product.id)}
                      >
                        <i className="fa-solid main-color fa-cart-plus"></i>
                      </button>
                    )}
                    <button
                      className="m-2 btn box-shadow w-25 position-absolute top-0 end-0 shadow bg-body-tertiary rounded"
                      onClick={() => removeFavourite(product.id)}
                    >
                      <i className="fa-solid fa-heart main-color "></i>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="h3 main-color col-12 text-center py-5 my-5">
              No favourites yet.
            </div>
          )}
        </div>
      </section>
    </Fragment>
  );
}
