import React from "react";
import Slider from "react-slick";
import styles from "./MainSlider.module.css";
import img1 from "../../assets/images/WhatsApp Image 2024-03-18 at 11.10.41 PM.jpeg";
import img2 from "../../assets/images/WhatsApp Image 2024-03-18 at 10.53.25 PM.jpeg";
import img3 from "../../assets/images/WhatsApp Image 2024-03-18 at 11.25.43 PM.jpeg";
import img4 from "../../assets/images/WhatsApp Image 2024-03-18 at 11.30.49 PM.jpeg";

export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={`${styles.MainSlider}`}>
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
