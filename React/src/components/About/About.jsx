import React from "react";
import styles from "./About.module.css";
import mission from "../../assets/images/mission.png";
import vision from "../../assets/images/vision.png";
import william from "../../assets/images/william.jpg";
import menna from "../../assets/images/menna.jpg";
import ahmed from "../../assets/images/ahmed.jpg";
import nada from "../../assets/images/nada.jpg";
import neama from "../../assets/images/neama.jpg";
import sara from "../../assets/images/sara.jpg";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About - Trendify</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <header className={styles.aboutHeader}>
        <div
          className={`${styles.aboutTitle} d-flex justify-content-center align-items-center`}
        >
          {" "}
          <h2 className=" fs-1 text-white text-center">
            Revolutionize Your Shopping Experience with Trendify.
          </h2>
        </div>
      </header>

      <section>
        <div
          className={`${styles.aboutBanner} d-flex justify-content-center align-items-center`}
        >
          {" "}
          <div>
            <h2 className=" fs-1 text-white text-center">About Us</h2>
            <h5 className="text-center text-white">
              Trendify Where Style Meets Convenience in Every Click!
            </h5>
          </div>
        </div>
      </section>
      <section className="mt-3">
        <div className="d-flex justify-content-center align-content-center text-center">
          <h2 className="text-center">Our Creative Team</h2>
        </div>

        <div className="container">
          <div className="row justify-content-center align-content-center text-center mt-3">
            <div className="col-md-4">
              <div className="d-flex justify-content-center align-content-center">
                <div>
                  <div className="d-flex justify-content-center align-content-center">
                    <div>
                      <div className="imageInCircle">
                        <img
                          src={william}
                          className="w-100 rounded-circle"
                          alt="Team-member"
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-2">
                    William George <span className="main-color">(Leader)</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex justify-content-center align-content-center">
                <div>
                  <div className="d-flex justify-content-center align-content-center">
                    <div>
                      <div className="imageInCircle">
                        <img
                          src={neama}
                          className="w-100 rounded-circle"
                          alt="Team-member"
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-2">NeamaTullah Mustafa</h3>
                </div>
              </div>
            </div>{" "}
            <div className="col-md-4">
              <div className="d-flex justify-content-center align-content-center">
                <div>
                  <div className="d-flex justify-content-center align-content-center">
                    <div>
                      <div className="imageInCircle">
                        <img
                          src={menna}
                          className="w-100 rounded-circle"
                          alt="Team-member"
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-2">MennaTullah Ashraf</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center align-content-center text-center mt-3">
            <div className="col-md-4">
              <div className="d-flex justify-content-center align-content-center">
                <div>
                  <div className="d-flex justify-content-center align-content-center">
                    <div>
                      <div className="imageInCircle">
                        <img
                          src={ahmed}
                          className="w-100 rounded-circle"
                          alt="Team-member"
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-2">Ahmed Sobhi</h3>
                </div>
              </div>
            </div>{" "}
            <div className="col-md-4">
              <div className="d-flex justify-content-center align-content-center">
                <div>
                  <div className="d-flex justify-content-center align-content-center">
                    <div>
                      <div className="imageInCircle">
                        <img
                          src={nada}
                          className="w-100 rounded-circle"
                          alt="Team-member"
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-2">Nada Saeed</h3>
                </div>
              </div>
            </div>{" "}
            <div className="col-md-4">
              <div className="d-flex justify-content-center align-content-center">
                <div>
                  <div className="d-flex justify-content-center align-content-center">
                    <div>
                      {" "}
                      <div className="imageInCircle">
                        <img
                          src={sara}
                          className="w-100 rounded-circle"
                          alt="Team-member"
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-2">Sara Eldabaa</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="d-flex justify-content-center align-items-center text-center mt-3 p-5 secondary-bg-color">
        <div>
          <h2>Our Journey</h2>
          <p>
            Our journey at Trendify is one of innovation and dedication. Born
            from a desire to revolutionize online shopping, we embarked on a
            journey to create a platform that offers convenience, style, and
            unparalleled service. Through meticulous planning and relentless
            pursuit of excellence, Trendify quickly became a beacon in the world
            of E-commerce. Our commitment to understanding our customers' needs
            and exceeding their expectations drives everything we do. With each
            click, scroll, and purchase, we strive to make shopping an inspiring
            and enjoyable experience. But our story is far from over. As we
            continue to grow and evolve, our passion for innovation remains
            steadfast. Join us on this journey as we shape the future of online
            shopping together. Welcome to Trendify, where style meets
            convenience, and every purchase tells a story.
          </p>
        </div>
      </section>
      <section className="container-fluid">
        <div className="row  justify-content-center align-items-center p-5  ">
          <div className="col-md-4 text-center">
            <div>
              <img src={mission} alt="Mission-Icon" />
            </div>
          </div>
          <div className="col-md-8 text-center">
            <div>
              <h2>Our Mission</h2>
              <p>
                At Trendify, our mission is to empower customers worldwide by
                providing a seamless and inspiring shopping experience. Through
                innovation, curated selections, and exceptional service, we aim
                to elevate the way people discover and acquire the latest trends
                and products
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid">
        <div className="row justify-content-center align-items-center p-5 flex-md-row-reverse secondary-bg-color">
          <div className="col-md-4 text-center">
            <div>
              <img src={vision} alt="Mission-Icon" />
            </div>
          </div>
          <div className="col-md-8 text-center">
            <div>
              <h2>Our Vision</h2>
              <p>
                Our vision at Trendify is to become the global leader in
                E-commerce, renowned for our commitment to excellence,
                integrity, and customer satisfaction. We envision a world where
                shopping is not just a transaction but a joyful journey of
                exploration and self-expression, and we strive to make this
                vision a reality for every customer we serve.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
