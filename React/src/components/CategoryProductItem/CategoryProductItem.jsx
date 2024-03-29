import React from "react";
import { favouriteContext } from "../../Context/FavouriteContext";
import img from "../../assets/images/images.png";
import { cartContext } from "../../Context/CartContext";
import { useContext } from "react";
import { AllProductContext } from "../../Context/ProductContext";
import { Link, useNavigate } from "react-router-dom";
export default function CategoryProductItem(data) {
      let { removeProduct } = useContext(AllProductContext);
 const navigate = useNavigate();
  let { addToCart } = useContext(cartContext);
  let { addToFavourite } = useContext(favouriteContext);
let UID = localStorage.getItem("userId");
  async function addProductToFavourite(productId) {
    let res = await addToFavourite(productId);
  }
 async function removeItem(id) {
   await removeProduct(id);
       navigate(0); 
 }
  async function addProduct(productId) {
    let res = await addToCart(productId);
  }
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4 position-relative">
          <img
            src={
              data.data.images[0]
                ? `http://127.0.0.1:8000/storage/${data.data.images[0].image_path}`
                : img
            }
            className="card-img-top object-fit-scale  rounded-start"
            alt={data.data.title}
            width={300}
            height={300}
          />
          {data.data.stock > 0 || data.data.user.id > 1 ? (
            ""
          ) : (
            <span className="badge rounded-pill main-bg-color position-absolute top-0 start-0  m-2">
              Out Of Stock
            </span>
          )}
        </div>
        <div className="col-md-8 position-relative ">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center ">
              <p className="card-text fw-bold  main-color  mb-0">
                EGP {data.data.price}
              </p>
              {UID == data.data.user.id ? (
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
                        to={`/EditProduct/${data.data.id}`}
                        className="dropdown-item"
                      >
                        <i className="fa-regular fa-pen-to-square text-black text-decoration-none"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={() => removeItem(data.data.id)}
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
            <h5 className="card-title">
              {data.data.title}
              {data.data.user.id > 1 ? (
                " "
              ) : (
                <p className="fa-xs text-end mb-0">
                  <i className="fa-solid text-warning fa-star me-1"></i>
                  {data.data.rate}
                </p>
              )}
            </h5>
            <p className="card-text ">
              {data.data.description.slice(0, 200) + "..."}
            </p>
            {data.data.egypt_city?.city_name || data.data.user.id > 1 ? (
              <p className="card-footer border position-absolute bottom-0 end-0 start-0 m-0 d-flex justify-content-between fs-small small">
                <span> {data.data.created_at?.split("T")[0]}</span>
                <span> {data.data.egypt_city?.city_name}</span>
                <Link
                  className="text-decoration-none main-color"
                  to={`/MyProfile/${data.data.user.id}`}
                >
                  {data.data.user.name}
                </Link>
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="button-0 ">
            {data.data.user.id > 1 ? (
        
                  <Link
                    to={`tel:${data.data.user.phone}`}
                    className="m-2 btn box-shadow shadow  main-bg-color  rounded"
                  >
                    <i className="fa-solid text-white fa-phone"></i>
                  </Link>
            ) : (
              <button
                className="m-2 btn box-shadow shadow  main-bg-color rounded"
                onClick={() => addProduct(data.data.id)}
              >
                <i className="fa-solid text-white  fa-cart-plus"></i>
              </button>
            )}
            <button
              className="m-2 btn box-shadow  shadow main-bg-color rounded"
              onClick={() => addProductToFavourite(data.data.id)}
            >
              <i className="fa-regular fa-heart  text-white "></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
