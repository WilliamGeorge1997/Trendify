import React, { Fragment } from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg text-black bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to={"Home"}>
            Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form class="d-flex" role="search">
              <input
                className={`form-control ${styles.formControl}`}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class={` btn main-bg-color text-white ${styles.btn}`}
                type="submit"
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" to={"Login"}>
                  login
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"Register"}>
                  Register
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={""}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class={`main-color ${styles.user} text-center `}>
                    U
                  </span>
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"MyProfile"}>
                      <i class="fa-solid fa-user me-2"></i>
                      profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"MyAds"}>
                      <i class="fa-solid fa-rectangle-ad me-2"></i>
                      My Ads
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"FavProduct"}>
                      <i class="fa-solid fa-heart me-2"></i>
                      Favorite Products
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item main-color" to={"LogOut"}>
                      <i class="fa-solid fa-right-from-bracket me-2"></i>
                      logout
                    </Link>
                  </li>
                </ul>
              </li>

              <li class="nav-item mx-2">
                <Link class="nav-link" to={"Cart"}>
                  <i class="fa-solid fa-cart-shopping"></i>
                </Link>
              </li>
              <div className="nav-item">
                <Link
                  className={`nav-link btn main-bg-color px-4 py-2 text-white ${styles.btn}`}
                  to={"Sell"}
                >
                  Sell
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
