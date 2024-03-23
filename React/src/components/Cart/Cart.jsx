import React from "react";
import styles from "./Cart.module.css";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
import { cartContext } from "./../../Context/CartContext";
import { useState, Fragment, useEffect, useContext } from "react";
import { Helmet } from "react-helmet";
export default function Cart() {
  let { getLoggedUserCart, removeCartItem, updateProductQuantity, removeCart } =
    useContext(cartContext);
  const [cartDetails, setCartDetails] = useState(null);
  async function deleteCart() {
    let { data } = await removeCart();
    setCartDetails(data);
  }
  async function updateCount(id, action) {
    let { data } = await updateProductQuantity(id, action);
    setCartDetails(data);
  }
  async function removeItem(id) {
    let { data } = await removeCartItem(id);
    setCartDetails(data);
  }
  async function getCart() {
    let { data } = await getLoggedUserCart();
    setCartDetails(data);
  }
  useEffect(() => {
    getCart();
  }, []);
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cart</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="container">
        {cartDetails ? (
          <div>
            <div className="mt-5">
              {cartDetails.cart_products &&
              cartDetails.cart_products.length > 0 ? (
                <Fragment>
                  <div className="d-flex justify-content-between">
                    <h2>Your Cart</h2>
                    <button
                      onClick={deleteCart}
                      className={`btn main-color border-danger ${styles.clearBtn}`}
                    >
                      Clear cart
                    </button>
                  </div>
                </Fragment>
              ) : (
                ""
              )}
            </div>
            <div className="row">
              {cartDetails.cart_products &&
              cartDetails.cart_products.length > 0 ? (
                <Fragment>
                  <div className="col-md-8">
                    {cartDetails.cart_products.map((product) => (
                      <div
                        key={product.product.id}
                        className="border-bottom p-3 row justify-content-between align-items-center"
                      >
                        <div className="d-flex align-items-center col-md-8 col-7">
                          <button
                            onClick={() => removeItem(product.product.id)}
                            type="button"
                            className={`btn-close me-2 ${styles.btnClose}`}
                            aria-label="Close"
                          />
                          <div className="mx-2 border">
                            <img
                              width={80}
                              height={80}
                              src={`http://127.0.0.1:8000/storage/${product.product.images?.[0]?.image_path}`}
                              alt=""
                            />
                          </div>
                          <div>
                            <h6 className="mb-0">{product.product.title}</h6>
                            <span>
                              <span className="text-success">
                                {product.product.price} EGP
                              </span>
                            </span>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center align-content-center col-md-2 col-2">
                          <button
                            onClick={() =>
                              updateCount(product.product.id, "increment")
                            }
                            className={`${styles.countBtn} border-0 mb-1 main-bg-color rounded-circle text-white`}
                          >
                            +
                          </button>
                          <span className="mx-2">{product.count}</span>
                          <button
                            onClick={() =>
                              updateCount(product.product.id, "decrement")
                            }
                            className={`${styles.countBtn} border-0 mb-1 px-2 main-bg-color rounded-circle text-white`}
                          >
                            -
                          </button>
                        </div>

                        <div className="totalProductPrice col-md-2 col-3 text-end">
                          <span className="text-success ">
                            {product.total_product_price} EGP
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="col-md-4 border-start p-3">
                    <h4>CART TOTALS</h4>
                    <hr />
                    <div className="d-flex justify-content-between my-4">
                      <span className="fw-bold">Total items count</span>
                      <span className="fw-bold text-success">
                        {cartDetails.total_count}
                        <span>
                          {cartDetails.total_count === 1 ? "item" : "items"}
                        </span>
                      </span>
                    </div>
                    <div className="d-flex justify-content-between my-4">
                      <span className="fw-bold">Total cart price</span>
                      <span className="fw-bold text-success">
                        {cartDetails.total_cart_price} EGP
                      </span>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <span className="fw-bold">Total</span>
                      <span className="fw-bold text-success">
                        {cartDetails.total_cart_price} EGP
                      </span>
                    </div>
                    <div className="my-4">

                    <Link className={`${styles.continueBtn}`} to="/ShippingDetails">
                      <button
                        className={`btn main-bg-color text-white w-100 ${styles.countBtn}`}
                      >
                        PROCEED TO CHECKOUT
                      </button>
                      </Link>

                    </div>
                    <div>
                      <Link className={`${styles.continueBtn}`} to="/Home">
                        <button className="btn border-0 outline-0 cursor-pointer w-100">
                          <i className="fa-solid fa-less-than" /> CONTINUE
                          SHOPPING
                        </button>
                      </Link>
                    </div>
                  </div>
                </Fragment>
              ) : (
                <div className="h3 main-color col-12 text-center py-5 my-5">
                  Your Cart is empty
                </div>
              )}
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </Fragment>
  );
}
