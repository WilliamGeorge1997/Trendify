import React from 'react';
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import logo from "../../assets/images/logo.png";

export default function NavCreate() {
  return (
    <header className="bg-light shadow-sm navbar navbar-expand-lg navbar-light">
      <div className="container-fluid d-flex align-items-center">
        <div className="mr-auto p-2">
          <Link to={"/destination"}>
            {/* <FontAwesomeIcon icon={faArrowLeft} style={{ textDecoration: 'none' }} /> */}
          </Link>
          <span className="ms-2">
            <Link className="navbar-brand" to={"Home"}>
              <img src={logo} width={110} alt="" />
            </Link>
          </span>
        </div>
      </div>
    </header>
  );
}
