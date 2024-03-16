import React from "react";
import axios from "axios";
import styles from "./Details.module.css";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

export default function Details() {
  function fetchProduct11(productId) {
    return axios.get(`http://127.0.0.1:8000/api/products/${productId}`);
  }

  const { id } = useParams();

  const { data: prod, isLoading, isError } = useQuery(["details", id], () =>
    fetchProduct11(id)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !prod) {
    return <div>Error fetching product</div>;
  }
let product = prod.data.message
  return (
    <div className={styles.CategoryProductItem}>
      <div className="card mb-3" style={{ maxWidth: 540 }}>
        <div className="row g-0">
          <div className="col-md-4">
            {product.images?.length > 0 && (
              <img
                src={`http://127.0.0.1:8000/storage/${product.images[0].image_path}`}
                className="img-fluid rounded-start"
                alt="..."
              />
            )}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <h6 className="card-text">{product.description}</h6>
              <p className="card-text mb-0">{product.location}</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  {product.created_at.split("T")[0]}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
