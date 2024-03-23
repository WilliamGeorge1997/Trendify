import React ,{  Fragment } from "react";
import axios from "axios";
import { favouriteContext } from "../../Context/FavouriteContext";
import styles from "./Details.module.css";
import { useParams} from "react-router-dom";
import { useQuery } from "react-query";
import { AllProductContext } from "../../Context/ProductContext";
import { cartContext } from "../../Context/CartContext";
import { useContext } from "react";
import Loading from "../Loading/Loading";
import img from "../../assets/images/images.png";
import toast from "react-hot-toast";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Details() {
      let { removeProduct } = useContext(AllProductContext);

  let { addToFavourite } = useContext(favouriteContext);
let UID = localStorage.getItem("userId");
  async function addProductToFavourite(productId) {
    let res = await addToFavourite(productId);
  }
 async function removeItem(id) {
   await removeProduct(id);

 }
  function fetchProduct11(productId) {
    const res = axios.get(`http://127.0.0.1:8000/api/products/${productId}`);
    console.log(res);
    return res;
  }

  const { id } = useParams();

  const {
    data: prod,
    isLoading,
    isError,
  } = useQuery(["details", id], () => fetchProduct11(id));
  let { addToCart } = useContext(cartContext);

  async function addProduct(productId) {
    let res = await addToCart(productId);
  }
  if (isLoading) {
    return <Loading />;
  }

  if (isError || !prod) {
    return <div>Error fetching product</div>;
  }
  let product = prod.data.message;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Details</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container  mb-5">
        <div className="card mb-5">
          <div className="row g-0 mb-5">
            <div className="col-md-6 position-relative">
              {product.images.length > 0 ? (
                product.images.length === 1 ? (
                  <img
                    src={`http://127.0.0.1:8000/storage/${product.images[0].image_path}`}
                    className="card-img-top rounded-start object-fit-scale"
                    alt={product.title}
                    width={1000}
                    height={500}
                  />
                ) : (
                  <Slider {...settings}>
                    {product.images.map((image, index) => (
                      <div key={index} className="p-2">
                        <img
                          src={`http://127.0.0.1:8000/storage/${image.image_path}`}
                          className="card-img-top rounded-start object-fit-scale"
                          alt={product.title}
                          width={1000}
                          height={500}
                        />
                      </div>
                    ))}
                  </Slider>
                )
              ) : (
                <img
                  src={img}
                  className="card-img-top rounded-start object-fit-scale"
                  alt={product.title}
                  width={1000}
                  height={500}
                />
              )}

              {product.stock > 0 || product.user.id > 1 ? (
                ""
              ) : (
                <span className="badge rounded-pill main-bg-color position-absolute top-0 start-0  m-2">
                  Out Of Stock
                </span>
              )}
            </div>

            <div className="col-md-6 card-body d-flex flex-column justify-content-between p-5">
              <div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="card-text fw-bold h1  main-color  mb-0">
                    EGP {product.price}
                  </p>
                  {UID == product.user.id ? (
                    <div className="btn-group">
                      <i
                        type="button"
                        className="fa-solid fa-ellipsis-vertical dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      ></i>
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            to={`/EditProduct/${product.id}`}
                            className="dropdown-item"
                          >
                            <i className="fa-regular fa-pen-to-square text-black text-decoration-none"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            onClick={() => removeItem(product.id)}
                          >
                            <i className="fa-regular fa-solid fa-trash fa-pen-to-square text-danger text-decoration-none"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <h3 className="card-title">{product.title} </h3>
                {product.user.id > 1 ? (
                  " "
                ) : (
                  <p className="h6 text-end ">
                    <i className="fa-solid text-warning fa-star me-1"></i>
                    {product.rate}
                  </p>
                )}
                <p className="card-text ">{product.description}</p>
                {product.egypt_city?.city_name || product.user.id > 1 ? (
                  <h4 className="card-footer position-absolute bottom-0 end-0 start-0 m-0 d-flex justify-content-between">
                    <span> {product.created_at?.split("T")[0]}</span>
                    <span> {product.egypt_city?.city_name}</span>
                    <Link
                      className="text-decoration-none main-color"
                      to={`/MyProfile/${product.user.id}`}
                    >
                      {product.user.name}
                    </Link>
                  </h4>
                ) : (
                  ""
                )}
              </div>
              <div>
                {product.user.id > 1 ? (
                  <button className="m-2 btn box-shadow shadow  main-bg-color  rounded">
                    <i className="fa-solid text-white fa-phone"></i>
                  </button>
                ) : (
                  <button
                    className="m-2 btn box-shadow shadow  main-bg-color rounded"
                    onClick={() => addProduct(product.id)}
                  >
                    <i className="fa-solid text-white  fa-cart-plus"></i>
                  </button>
                )}
                <button
                  className="m-2 btn box-shadow  shadow main-bg-color rounded"
                  onClick={() => addProductToFavourite(product.id)}
                >
                  <i className="fa-regular fa-heart  text-white "></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
