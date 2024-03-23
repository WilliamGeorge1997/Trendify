import React from "react";
import Slider from "react-slick";
import styles from "./MainSlider.module.css";
import img1 from "../../assets/images/Untitled_design.jpg";
import img2 from "../../assets/images/d2.jpg";
import img3 from "../../assets/images/d4.jpg";
// import img4 from "../../assets/images/";

export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
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
       
      </Slider>
    </div>
  );
}
