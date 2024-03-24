import React from "react";
import Slider from "react-slick";
import styles from "./MainSlider.module.css";
import img1 from "../../assets/images/s1.png";
import img2 from "../../assets/images/s2.jpg";
import img3 from "../../assets/images/s3.png";
import img4 from "../../assets/images/s4.png";

export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="container-fluid">
      <Slider {...settings}>
        <div>
          <img src={img1} className={`w-100 ${styles.img}`} alt="img1" />
        </div>
        <div>
          <img src={img2} className={`w-100 ${styles.img}`} alt="img1" />
        </div>
        <div>
          <img src={img3} className={`w-100 ${styles.img}`} alt="img1" />
        </div>
        <div>
          <img src={img4} className={`w-100 ${styles.img}`} alt="img1" />
        </div>
      </Slider>
    </div>
  );
}
