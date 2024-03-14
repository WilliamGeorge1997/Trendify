import React from "react";
import Slider from "react-slick";
import styles from "./MainSlider.module.css";
import  img  from "../../assets/images/propertiesVerticalBanner.8447d404571cb59af97dadc5583238a0.png";
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
          <img src={img} className="w-100" alt="img1" />
        </div>
        <div>
          <img src={img} className="w-100" alt="img1" />
        </div>
        <div>
          <img src={img} className="w-100" alt="img1" />
        </div>
        <div>
          <img src={img} className="w-100" alt="img1" />
        </div>
        <div>
          <img src={img} className="w-100" alt="img1" />
        </div>
      </Slider>
    </div>
  );
}
