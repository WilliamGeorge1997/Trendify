import React, { Fragment, useContext, useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { useCartItemCount } from "./../../Context/CartContext";
import logo from "../../assets/images/logo.png";
export default function NavBar() {
  let { userToken, setUserToken } = useContext(UserContext);
  const [searchValue, setSearchValue] = useState("");
  const { data: cartItemCount } = useCartItemCount();
  const [cartCount, setCartCount] = useState(cartItemCount);

  useEffect(() => {
    setCartCount(cartItemCount);
  }, [cartItemCount]);

  let navigate = useNavigate();
  useEffect(() => {
    if (searchValue) {
      navigate(`/Search/${searchValue}`);
    }
  }, [searchValue, navigate]);

  function logout() {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userId");
    setUserToken(null);
    navigate("/login");
  }
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg text-black bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to={"Home"}>
            <img src={logo} width={120} alt="" />
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
            <div className={`${styles.searchWrapper}`}>
              <input
                className={`form-control me-1 px-3 pe-5  ${styles.formControl} ${styles.searchInput}`}
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchValue}
                onChange={handleSearchChange}
              />
              <i
                className={`${styles.searchIcon} fa-solid fa-magnifying-glass main-color`}
              ></i>
            </div>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* ----------------- ProfileLogout button----------------------- */}
              {userToken !== null ? (
                <Fragment>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to={""}
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span
                        className={`main-color ${styles.user} text-center `}
                      >
                        <i className="fa-solid fa-user"></i>{" "}
                      </span>
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to={"MyProfile/0"}>
                          <i className="fa-regular fa-eye me-2"></i>
                          profile
                        </Link>
                      </li>

                      <li>
                        <Link className="dropdown-item" to={"EditProfile"}>
                          <i className="fas fa-user-edit me-2"></i>
                          Edit profile
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={"FavProduct"}>
                          <i className="fa-solid fa-heart me-2"></i>
                          Favorite Products
                        </Link>
                      </li>

                      <li>
                        <hr className="dropdown-divider" />
                      </li>

                      <li>
                        <span
                          onClick={() => logout()}
                          className="dropdown-item main-color cursor-pointer"
                          style={{ cursor: "pointer" }}
                        >
                          <i className="fa-solid fa-right-from-bracket me-2"></i>
                          logout
                        </span>
                      </li>
                    </ul>
                  </li>
                </Fragment>
              ) : (
                <Fragment>
                  <li className="nav-item">
                    <Link className="nav-link" to={"Register"}>
                      Register
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to={"Login"}>
                      Login
                    </Link>
                  </li>
                </Fragment>
              )}
              {/* -----------------End Logout button----------------------- */}
              <li className="nav-item mx-2">
                <Link className="nav-link" to={"Cart"}>
                  <i className="fa-solid fa-cart-shopping position-relative">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill main-bg-color ">
                      {cartCount}
                    </span>
                  </i>
                </Link>
              </li>

              {userToken !== null ? (
                <>
                  <div className="nav-item">
                    <Link
                      className={`nav-link btn main-bg-color px-4 py-2 text-white ${styles.btn}`}
                      to={"Sell"}
                    >
                      Sell
                    </Link>
                  </div>{" "}
                </>
              ) : (
                ""
              )}
              <div className="nav-item">
                <Link
                  className={`nav-link btn main-bg-color ms-1 px-4 py-2 text-white ${styles.btn}`}
                  to={"Ads"}
                >
                  Ads
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
