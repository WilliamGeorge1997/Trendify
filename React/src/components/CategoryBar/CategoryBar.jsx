import React from "react";
import styles from "./CategoryBar.module.css";
import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function CategoryBar() {
  return (
    <Fragment>
      <div className="d-flex text-black justify-content-around">
        <div className="dropdown">
          <Link
            className="btn text-black dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {" "}
            <i className="fa-solid fa-laptop"></i>
            Electronic
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to={"/Categories/1"}>
                Mobile phones
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={"/Categories/2"}>
                Laptops
              </Link>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <Link
            className="btn text-black dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fa-solid fa-gift"></i> Personal care
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to={"/Categories/3"}>
                Fragrances
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={"/Categories/4"}>
                Skincare
              </Link>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <Link
            className="btn text-black dropdown-toggle"
            to={"/Categories"}
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa-solid fa-house"></i> Home supplies
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to={"/Categories/5"}>
                Groceries
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={"/Categories/7"}>
                Furniture
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={"/Categories/6"}>
                Home-decoration
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={"/Categories/19"}>
                Lighting
              </Link>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <Link
            className="btn text-black dropdown-toggle"
            to={"/Categories"}
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa-solid fa-person-dress"></i> Women
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to={"/Categories/8"}>
                Tops
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={"/Categories/9"}>
                Womens-dresses
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={"/Categories/10"}>
                Womens-shoes
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={"/Categories/13"}>
                Womens-watches
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={"/Categories/14"}>
                Womens-bags
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={"/Categories/15"}>
                Womens-jewellery
              </Link>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <Link
            className="btn text-black dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa-solid fa-person"></i> Men
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to={"/Categories/11"}>
                Men-shirts
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={"/Categories/10"}>
                Men-shoes
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={"/Categories/16"}>
                Sunglasses
              </Link>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <Link
            className="btn text-black dropdown-toggle"
            to={"/Categories"}
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa-solid fa-car"></i> Transportation
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to={"/Categories/17"}>
                Automotive
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={"/Categories/18"}>
                Motorcycle
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
