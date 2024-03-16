import React from "react";
import styles from "./CategoryProductItem.module.css";
import img1 from "../../assets/images/images.png";

export default function CategoryProductItem(data) {
  return (
    <div>
      <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`http://127.0.0.1:8000/storage/${data.data.images[0].image_path}`}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{data.data.title}</h5>
              <p className="card-text">{data.data.description}</p>
              <p className="card-text">
                <small Name="text-body-secondary">
                  {data.data.created_at.split("T")[0]}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
