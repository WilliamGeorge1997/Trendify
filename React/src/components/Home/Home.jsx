import React, { useContext, useState, useEffect, Fragment } from "react";
import styles from "./Home.module.css";
import MainSlider from "../MainSlider/MainSlider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ProductItem from "../ProductItem/ProductItem";
import { AllProductContext } from "../../Context/ProductContext";
import Categories from "../Categories/Categories";
import CategoryBar from "../CategoryBar/CategoryBar";
import Loading from "../Loading/Loading";
import BestSeller from "../BestSeller/BestSeller";

import BestRate from "../BestRate/BestRate";
import testimonial1 from "../../assets/images/testimonial-1.jpg";
import testimonial2 from "../../assets/images/testimonial-2.jpg";
import casio from "../../assets/images/casio.png";
import samsung from "../../assets/images/samsung.webp";
import apple from "../../assets/images/apple.png";
import addidas from "../../assets/images/addidas.png";
import dell from "../../assets/images/dell.png";

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  let { fetchProducts } = useContext(AllProductContext);
  const [product, setProduct] = useState([]);
  async function pro() {
    let product = await fetchProducts();
    setProduct(product);
  }
  useEffect(() => {
    pro();
  }, []);
  const Products = product?.products?.filter((item) => item.user.id == 1);
  const menShirts = product?.products?.filter((item) => item.category_id == 11);
  const womenDresses = product?.products?.filter(
    (item) => item.category_id == 9
  );
  const newArrivals = product?.products
    ?.filter((item) => item.user_id == 1)
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 8);

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className={styles.container}>
        {product.status !== 200 ? (
          <Loading />
        ) : (
          <Fragment>
            {" "}
            <MainSlider />
            <div className={`${styles.container} row m-auto`}>
              <div className="col-md-3">
                <CategoryBar label={1} />
              </div>

              <div className="col-md-9">
                <BestSeller></BestSeller>
                <BestRate></BestRate>
                {/* Start */}
                <section className="mt-5">
                  <h3>New Arrivals</h3>

                  <div className="container mt-3">
                    <div className="row">
                      {newArrivals?.map((item) => (
                        <div
                          key={item.id}
                          className="col-sm-6 col-md-4 col-lg-3 p-3"
                        >
                          <Link
                            to={`/Details/${item.id}`}
                            className="text-dark text-decoration-none"
                          >
                            <div className="dataContainer">
                              <div className="border  d-flex">
                                <div className="w-50">
                                  <img
                                    src={`http://127.0.0.1:8000/storage/${item.images[0].image_path}`}
                                    alt=""
                                    className="w-100 object-fit-scale"
                                    width={100}
                                    height={100}
                                  />
                                </div>
                                <div className="d-flex justify-center align-items-center">
                                  <div>
                                    <h6>{item.title.slice(0, 10)}...</h6>
                                    <span className="main-color">
                                      EGP {item.price}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
                {/* End */}
              </div>
            </div>
            {/* men */}
            <div className={styles.menCover}>
              <div>
                <h3 className="h1">SHOP WITH US</h3>
                <p>NEW SUMMER COLLECTION 2024</p>
                <Link to={"/Categories/11/1"} className="btn btn-dark ">
                  SHOP NOW
                </Link>
              </div>
            </div>
            {/* men */}
            <section className="my-5 ">
              <div className="container">
                <div className="row justify-content-between">
                  {/* Men Start */}
                  {menShirts.slice(0, 5).map((menShirt) => (
                    <>
                      {" "}
                      <div
                        key={menShirt.id}
                        className="col-md-4 col-lg-2 col-12 col-sm-6 text-center d-flex justify-content-center align-items-center"
                      >
                        <Link
                          to={`/Details/${menShirt.id}`}
                          className="text-decoration-none text-dark"
                        >
                          <div className=" w-100">
                            <div>
                              <img
                                src={`http://127.0.0.1:8000/storage/${menShirt.images[0].image_path}`}
                                className="w-100 object-fit-scale "
                                alt="Men Shirt"
                                width={300}
                                height={300}
                              />
                              <h6 className="mb-0">
                                {menShirt.title.slice(0, 20) + "..."}
                              </h6>
                              <span className="main-color">
                                <span>EGP </span>
                                {menShirt.price}
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </>
                  ))}

                  {/* Men End */}
                </div>
              </div>
            </section>
            {/* men */}
            {/* Women */}
            <div className={styles.cover}>
              <div>
                <h3 className="h1">SHOP WITH US</h3>
                <p>NEW SUMMER COLLECTION 2024</p>
                <Link to={"/Categories/9/1"} className="btn btn-dark ">
                  SHOP NOW
                </Link>
              </div>
            </div>
            <section className="my-5 ">
              <div className="container">
                <div className="row justify-content-between">
                  {/* Women Start */}
                  {womenDresses.slice(0, 5).map((womenDress) => (
                    <>
                      {" "}
                      <div
                        key={womenDress.id}
                        className="col-md-4 col-lg-2 col-12 col-sm-6  text-center d-flex justify-content-center align-items-center"
                      >
                        <Link
                          to={`/Details/${womenDress.id}`}
                          className="text-decoration-none text-dark"
                        >
                          <div className=" w-100">
                            <div>
                              <img
                                src={`http://127.0.0.1:8000/storage/${womenDress.images[0].image_path}`}
                                className="w-100 object-fit-scale "
                                alt="Men Shirt"
                                width={300}
                                height={300}
                              />
                              <h6 className="mb-0">
                                {womenDress.title.slice(0, 19) + "..."}
                              </h6>
                              <span className="main-color">
                                <span>EGP </span>
                                {womenDress.price}
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </>
                  ))}

                  {/* Women End */}
                </div>
              </div>
            </section>
            {/* Women */}
            <>
              {/* = = = = = = = = = = START OF CAROUSEL = = = = = = = = = = */}
              <section className="secondary-bg-color">
                <div className="layer">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide py-5"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active main-bg-color"
                        aria-current="true"
                        aria-label="Slide 1"
                      />
                      <button
                        type="button"
                        className="main-bg-color"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      />
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active text-center">
                        <img
                          src={testimonial1}
                          className="text-center rounded-circle mb-4"
                          alt="testimonial-2"
                          width={100}
                          height={100}
                        />
                        <h5 className="mb-4 h4">XAVI ALONSO</h5>
                        <p className="fs-6 fw-light col-md-7 mx-auto">
                          "Thanks to Trendify, my online shopping experience has
                          been elevated with their seamless interface! Highly
                          recommend for anyone seeking style and convenience.
                          They are Amazing!!"
                        </p>
                      </div>
                      <div className="carousel-item text-center">
                        <img
                          src={testimonial2}
                          className="text-center rounded-circle mb-4"
                          alt="testimonial-4"
                          width={100}
                          height={100}
                        />
                        <h5 className="mb-4 h4">MARTA SOCRATE</h5>
                        <p className="fs-6 fw-light col-md-7 mx-auto">
                          "Trendify has revolutionized my shopping habits with
                          their intuitive platform and trend-setting products.
                          Grateful for the convenience and style they bring to
                          my fingertips!"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="text-center">
                <Link
                  onClick={scrollToTop}
                  to="/FilterProduct/1"
                  className="btn main-bg-color px-4 my-5 py-3"
                >
                  DISCOVER MORE
                </Link>
              </section>
              <section className="secondary-bg-color">
                <div className="cotainer">
                  <div className="row">
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="col-md-2">
                        <div>
                          <img
                            src={samsung}
                            alt=""
                            className="w-100 object-fit-scale"
                            width={100}
                            height={200}
                          />
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div>
                          <img
                            src={casio}
                            alt=""
                            className="w-100 object-fit-scale"
                            width={100}
                            height={200}
                          />
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div>
                          <img
                            src={addidas}
                            alt=""
                            className="w-100 object-fit-scale"
                            width={100}
                            height={80}
                          />
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div>
                          <img
                            src={apple}
                            alt=""
                            className="w-100 object-fit-scale"
                            width={100}
                            height={80}
                          />
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div>
                          <img
                            src={dell}
                            alt=""
                            className="w-100 object-fit-scale"
                            width={100}
                            height={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* = = = = = = = = = = END OF CAROUSEL = = = = = = = = = = */}
            </>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}
