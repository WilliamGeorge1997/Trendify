import React from "react";
import styles from "./ShippingDetails.module.css";


export default function ShippingDetails() {

  
  return (
    <div className={`container ${styles.checkoutContainer}`}>
      <div className="row">
        <div className="col-md-4 billing-info">
          <h2>Billing Information</h2>
          <hr />

          <form>
            <div className="form-group">
              <label for="firstName">First Name:</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="Enter first name"
              />
            </div>
            <div className="form-group">
              <label for="lastName">Last Name:</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Enter last name"
              />
            </div>
            <div className="form-group">
              <label for="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label for="address">Address:</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Enter address"
              />
            </div>
            <div className="form-group">
              <label for="city">City:</label>
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder="Enter city"
              />
            </div>
            <div className="form-group">
              <label for="state">State:</label>
              <input
                type="text"
                className="form-control"
                id="state"
                placeholder="Enter state"
              />
            </div>
            <div className="form-group">
              <label for="zip">Zip Code:</label>
              <input
                type="text"
                className="form-control"
                id="zip"
                placeholder="Enter zip code"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Place Order
            </button>
          </form>
        </div>

        <div className="col-md-8 order-summary">
          <h2>Order Summary</h2>
          <hr />
          {/* List cart items here (replace with your data fetching logic) */}
          <div className={`${styles.productItem}`}>
            <img
              className={`${styles.productItemImg}`}
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
              alt="Product "
            />
            <div className={`${styles.productDetails}`}>
              <p>Product Name</p>
              <span className="price">$19.99</span>
              <span className="quantity">x 1</span>
            </div>
          </div>
          {/* Add more product items for each item in your cart */}

          <hr />
          <div className={`${styles.subtotal}`}>
            <p>Subtotal:</p>
            <span>$19.99</span> {/* Update this based on cart total */}
          </div>
        </div>
      </div>
    </div>
  );
}
