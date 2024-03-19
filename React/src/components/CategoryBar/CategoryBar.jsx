import React from "react";
import styles from "./CategoryBar.module.css";
import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function CategoryBar(label) {
  return (
    <Fragment>
      <div className="d-flex text-black justify-content-around">
        <div className="d-flex align-items-center">
          <Link
            to={`/FilterProduct/${label.label}`}
            className="text-decoration-none text-black"
          >
            <i className="fa-solid fa-bars me-2"></i>filter
          </Link>
        </div>
        <div className="dropdown">
          <Link
            className="btn text-black dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa-solid fa-laptop"></i>
            Electronic
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to={`/Categories/1/${label.label}`}>
                Mobile phones
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={`/Categories/2/${label.label}`}>
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
            <i className="fa-solid fa-gift"></i> Personal care
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to={`/Categories/3/${label.label}`}>
                Fragrances
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={`/Categories/4/${label.label}`}>
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
              <Link className="dropdown-item" to={`/Categories/5/${label.label}`}>
                Groceries
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={`/Categories/7/${label.label}`}>
                Furniture
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={`/Categories/6/${label.label}`}>
                Home-decoration
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={`/Categories/19/${label.label}`}>
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
              <Link className="dropdown-item" to={`/Categories/8/${label.label}`}>
                Tops
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={`/Categories/9/${label.label}`}>
                Womens-dresses
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={`/Categories/10/${label.label}`}>
                Womens-shoes
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={`/Categories/13/${label.label}`}>
                Womens-watches
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={`/Categories/14/${label.label}`}>
                Womens-bags
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={`/Categories/15/${label.label}`}>
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
              <Link className="dropdown-item" to={`/Categories/11/${label.label}`}>
                Men-shirts
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={`/Categories/10/${label.label}`}>
                Men-shoes
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={`/Categories/16/${label.label}`}>
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
              <Link className="dropdown-item" to={`/Categories/17/${label.label}`}>
                Automotive
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={`/Categories/18/${label.label}`}>
                Motorcycle
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
