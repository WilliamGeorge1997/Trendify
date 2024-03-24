import React, { useContext, useState, useEffect } from "react";
import { favouriteContext } from "./../../Context/FavouriteContext";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import { cartContext } from "../../Context/CartContext";

export default function FavProduct() {
  let { addToCart } = useContext(cartContext);
  const { getLoggedUserFavourites, removeLoggedUserFavourite } =
    useContext(favouriteContext);
  const [isLoading, setIsLoading] = useState(false);
  const [favouriteDetails, setFavouriteDetails] = useState(null);

  async function addProduct(productId) {
    let res = await addToCart(productId);
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const { data } = await getLoggedUserFavourites();
      setFavouriteDetails(data);
      setIsLoading(false);
    };

    fetchData();
  }, [getLoggedUserFavourites]);

  const removeFavourite = async (productId) => {
    const { data } = await removeLoggedUserFavourite(productId);
    setFavouriteDetails(data);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <h2 className="my-2">Favourites</h2>
      <div className="row mb-3">
        {favouriteDetails && favouriteDetails.user && favouriteDetails.user.favorite_products.length > 0 ? (
          favouriteDetails.user.favorite_products.map((product) => (
            <div key={product.id} className="col-md-3 position-relative">
              <Link
                to={`/Details/${product.id}`}
                className="text-decoration-none text-dark"
              >
                <div className="border">
                  <div className="border">
                    <img
                      src={`http://127.0.0.1:8000/storage/${product.images[0].image_path}`}
                      className="w-100 object-fit-scale"
                      width={20}
                      height={300}
                      alt={product.name}
                    />
                  </div>
                  <div className="cart-body p-3">
                    <div className="d-flex justify-content-between align-content-center"></div>
                    <span className="main-color fw-bold">
                      EGP {product.price}
                    </span>
                    <h5>{product.title.slice(0, 20) + "..."}</h5>
                    <p>{product.description.slice(0, 55) + "..."}</p>
                  </div>
                </div>
              </Link>{" "}
              <button
                className="m-2 btn box-shadow w-25 position-absolute top-0 end-0 shadow bg-body-tertiary rounded"
                onClick={() => removeFavourite(product.id)}
              >
                <i className="fa-solid fa-heart main-color "></i>
              </button>

              <button
                    className="m-2 btn box-shadow w-25 position-absolute top-0 start-0 shadow bg-body-tertiary rounded"
                    onClick={() => addProduct(product?.id)}
                  >
                    <i className="fa-solid main-color fa-cart-plus"></i>
                  </button>
            </div>
          ))
        ) : (
          <div className="w-100 vh-100 main-color h2 d-flex align-items-center justify-content-center">
            No favourites yet.
          </div>
        )}
      </div>
    </div>
  );
}