import React from "react";
import styles from "./CategoryBar.module.css";
import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function CategoryBar(label) {
  return (
    <Fragment>
      <div className={`text-black my-4 justify-content-around ${styles.border}`}>
        <div className=" align-items-center">
          <Link
            to={`/FilterProduct/${label.label}`}
            className="text-decoration-none text-black"
          >
            <i className="fa-solid fa-bars  mb-2 me-2"></i>All
          </Link>
        </div>
        <ul className="list-unstyled mb-0">
          <li>
            <p className="btn text-black mb-0 ">
              <i className="fa-solid fa-laptop  me-2"></i>
              Electronic
            </p>
            <div>
              <ul className="list-unstyled ms-5 text-black text-decoration-none">
                <li>
                  <Link
                    className="text-black text-decoration-none"
                    to={`/Categories/1/${label.label}`}
                  >
                    Mobile phones
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black text-decoration-none"
                    to={`/Categories/2/${label.label}`}
                  >
                    Laptops
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <ul className="list-unstyled mb-0">
          <li>
            <p className="btn text-black mb-0 ">
              <i className="fa-solid fa-gift  me-2"></i>
              Personal care
            </p>
            <div>
              <ul className="list-unstyled ms-5 text-black text-decoration-none">
                <li>
                  <Link
                    className="text-black text-decoration-none"
                    to={`/Categories/3/${label.label}`}
                  >
                    Fragrances
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black text-decoration-none"
                    to={`/Categories/4/${label.label}`}
                  >
                    Skincare
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <ul className="list-unstyled mb-0">
          <li>
            <p className="btn text-black mb-0 ">
              <i className="fa-solid fa-house me-2"></i>
              Home supplies
            </p>
            <div>
              <ul className="list-unstyled ms-5 text-black text-decoration-none">
                <li>
                  <Link
                    className="text-black text-decoration-none"
                    to={`/Categories/5/${label.label}`}
                  >
                    Groceries
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black text-decoration-none"
                    to={`/Categories/6/${label.label}`}
                  >
                    Home-decoration
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black text-decoration-none"
                    to={`/Categories/7/${label.label}`}
                  >
                    Furniture
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <ul className="list-unstyled mb-0">
          <li>
            <p className="btn text-black mb-0 ">
              <i className="fa-solid fa-person-dress  me-2"></i>
              Women
            </p>
            <div>
              <ul className="list-unstyled ms-5 text-black text-decoration-none">
                <li>
                  <Link
                    className="text-black text-decoration-none"
                    to={`/Categories/8/${label.label}`}
                  >
                    Tops
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black text-decoration-none"
                    to={`/Categories/9/${label.label}`}
                  >
                    Womens-dresses
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black text-decoration-none"
                    to={`/Categories/10/${label.label}`}
                  >
                    Womens-shoes
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black text-decoration-none"
                    to={`/Categories/13/${label.label}`}
                  >
                    Womens-watches
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black text-decoration-none"
                    to={`/Categories/14/${label.label}`}
                  >
                    Womens-bags
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black text-decoration-none"
                    to={`/Categories/15/${label.label}`}
                  >
                    Womens-jewellery
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <ul className="list-unstyled mb-0">
          <li>
            <p className="btn text-black mb-0 ">
              <i className="fa-solid fa-person me-2"></i>
              Men
            </p>
            <div>
              <ul className="list-unstyled ms-5 text-black text-decoration-none">
                <li>
                  <Link
                    className="text-black text-decoration-none"
                    to={`/Categories/12/${label.label}`}
                  >
                    Men-shoes{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black text-decoration-none"
                    to={`/Categories/11/${label.label}`}
                  >
                    Men-shirts
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black text-decoration-none"
                    to={`/Categories/16/${label.label}`}
                  >
                    Sunglasses
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <ul className="list-unstyled mb-0">
          <li>
            <p className="btn text-black mb-0 ">
              <i className="fa-solid fa-car me-1"></i> Transportation
            </p>
            <div>
              <ul className="list-unstyled ms-5 text-black text-decoration-none">
                <li>
                  <Link
                    className="text-black text-decoration-none"
                    to={`/Categories/17/${label.label}`}
                  >
                    Automotive
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black text-decoration-none"
                    to={`/Categories/18/${label.label}`}
                  >
                    Motorcycle
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}
