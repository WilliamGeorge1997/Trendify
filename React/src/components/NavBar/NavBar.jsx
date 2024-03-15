import React, { Fragment, useContext } from "react";
import styles from "./NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

export default function NavBar() {
  let { userToken, setUserToken } = useContext(UserContext);
  let navigate = useNavigate();

  function logout() {
    localStorage.removeItem("userToken");
    setUserToken(null);
    navigate("/login");
  }
  

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={""}>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={""}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={""}>
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={""}>
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to={""}>
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className={`form-control me-2 ${styles.formControl}`}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className={`btn main-bg-color text-white ${styles.btn}`}
                type="submit"
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              {/* -----------------Logout button----------------------- */}
              {userToken !== null ? (
                <>
                  <li>
                    <span
                      onClick={() => logout()}
                      className="nav-link cursor-pointer"
                      style={{cursor:"pointer"}}
                    >
                      logout
                    </span>
                  </li>
                </>
              ) : (
                <>
                  <li class="nav-item">
                    <Link class="nav-link" to={"Register"}>
                      Register
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link class="nav-link" to={"Login"}>
                      Login
                    </Link>
                  </li>
                </>
              )}
              {/* -----------------End Logout button----------------------- */}

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={""}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span
                    class={`bg-danger rounded-circle ${styles.user} text-center `}
                  >
                    U
                  </span>
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={""}>
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={""}>
                      Another action
                    </Link>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to={"Notification"}>
                  <i class="fa-regular fa-bell"></i>
                </Link>
              </li>
              <div className="nav-item">
                <Link
                  className={`nav-link btn main-bg-color text-white ${styles.btn}`}
                  to={"Sell"}
                >
                  Sell{" "}
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
