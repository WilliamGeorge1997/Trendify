import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className={`${styles.footerBg} border-top mt-4`}>
      <div className="container">
        <div className="row my-3 mb-5">
          <div className=" col-12 col-sm-6 col-lg-3">
            <div>
              <h6>ABOUT US</h6>
              <ul className={styles.unorderedList}>
                <li>About Trendify Group</li>
                <li>Careers</li>

                <li> <Link to={"/ContactUs"} className=" text-black ">
                      Contact Us
                    </Link></li>
                <li>Trendify for Businesses</li>
              </ul>
            </div>
          </div>
          <div className=" col-12 col-sm-6 col-lg-3">
            <div>
              {" "}
              <h6>Trendify</h6>
              <ul className={styles.unorderedList}>
                <li>Blog</li>
                <li>Help</li>
                <li>Sitemap</li>
                <li>Terms of use</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className=" col-12 col-sm-6 col-lg-3">
            <div>
              {" "}
              <h6>COUNTRIES</h6>
              <ul className={styles.unorderedList}>
                <li>Bahrain</li>
                <li>Jordan</li>
                <li>Kuwait</li>
                <li>Lebanon</li>
                <li>Oman</li>
              </ul>
            </div>
          </div>
          <div className=" col-12 col-sm-6 col-lg-3">
            <div>
              {" "}
              <h6 className="mb-3">FOLLOW US</h6>
              <div className="d-flex">
                <div
                  className={`${styles.socialIcons}  justify-content-center d-flex align-items-center mx-1`}
                >
                  <i className="fa-brands fa-x-twitter main-color" />
                </div>
                <div
                  className={`${styles.socialIcons}   justify-content-center d-flex align-items-center mx-1`}
                >
                  <i className="fa-brands fa-linkedin main-color" />
                </div>
                <div
                  className={`${styles.socialIcons}   justify-content-center d-flex align-items-center mx-1`}
                >
                  <i className="fa-brands fa-facebook main-color" />
                </div>
                <div
                  className={`${styles.socialIcons}   justify-content-center d-flex align-items-center mx-1`}
                >
                  <i className="fa-brands fa-youtube main-color" />
                </div>
                <div
                  className={`${styles.socialIcons}  justify-content-center d-flex align-items-center mx-1`}
                >
                  <i className="fa-brands fa-instagram main-color" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.secondaryFooterBg} py-2`}>
        <div className=" d-flex align-items-center justify-content-end me-5 my-2">
          <p className={`${styles.footerFontSize} fw-bold mb-0`}>
            Classifieds in Egypt{" "}
          </p>
          <span className={`${styles.footerFontSize}`}>. © 2024 Trendify</span>
        </div>
      </div>
    </footer>
  );
}
