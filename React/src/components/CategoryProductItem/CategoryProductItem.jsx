import React from "react";
import img from "../../assets/images/images.png";
import { cartContext } from "../../Context/CartContext";
import { useContext } from "react";
export default function CategoryProductItem(data) {
  let { addToCart } = useContext(cartContext);
  async function addProduct(productId) {
    let res = await addToCart(productId);
  }
  return (

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={
                data.data.images[0]
                  ? `http://127.0.0.1:8000/storage/${data.data.images[0].image_path}`
                  : img
              }
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{data.data.title}</h5>
              <p className="card-text">{data.data.description}</p>
              {data.data.user_id > 1 ? (
        " "
              ) : (
                <p className="card-text fs-small small">
                  {data.data.created_at?.split("T")[0]}
                </p>
              )}
            </div>
            <button
              className="m-2 btn main-bg-color w-50 "
              onClick={() => addProduct(data.data.id)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>

  );
}
