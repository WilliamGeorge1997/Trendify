import React, { useContext, useState, useEffect } from "react";
import Slider from "react-slick";
import styles from "./BestSeller.module.css";
import { AllProductContext } from "../../Context/ProductContext";
import img from "../../assets/images/images.png";
import { Link } from 'react-router-dom';

export default function BestSeller() {
    let { fetchProducts } = useContext(AllProductContext);
    const [product, setProduct] = useState([]);
    async function prod() {
      let product = await fetchProducts();
      setProduct(product);
const Products = product?.products?.filter(
  (item) => item.stock <= 3 && item.stock !== null
);

      setProduct(Products);
    }
    useEffect(() => {
      prod();
    }, []);
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl:true
  };
  return (
    <div className="container-fluid">
      <h3 className="my-3">Best Seller</h3>
      <Slider {...settings}>
        {product.map((item) => (
          <Link
            to={`/Details/${item.id}`}
            key={item.id}
            className="text-center text-black text-decoration-none  px-2"
          >
            <img
              src={
                item?.images[0]
                  ? `http://127.0.0.1:8000/storage/${item.images[0].image_path}`
                  : img
              }
              className={`w-100 mb-2 object-fit-scale`}
              alt={item.title}
              width={150}
              height={150}
            />
            <p>{item.title.split(/[ \/]/)[0]}</p>
          </Link>
        ))}
      </Slider>
    </div>
  );
}
