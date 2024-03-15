import React, { useState } from "react";
// import styles from './Home.module.css';
import MainSlider from "../MainSlider/MainSlider";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import ProductItem from "../ProductItem/ProductItem";
export default function Home() {
  let [product, setProduct] = useState([]);
  async function getProduct() {
    let { data } = await axios.get(`http://localhost:8000/api/products`);
    console.log(data.products);
    setProduct(data.products);
  }
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="container">
      <MainSlider />
      <div className="d-flex text-black justify-content-around">
        <Link to={"/Categories"} />
        CAT1
        <Link />
        <Link to={"/Categories"} />
        CAT2
        <Link /> <Link to={"/Categories"} />
        CAT3
        <Link /> <Link to={"/Categories"} />
        CAT4
        <Link /> <Link to={"/Categories"} />
        CAT5
        <Link /> <Link to={"/Categories"} />
        CAT6
        <Link /> <Link to={"/Categories"} />
        CAT7
        <Link />
      </div>
      <div className="row row-cols-lg-4 row-cols-md-3 ">
        {product.map((item) => (
          <div className="p-3">
            <ProductItem key={item.id} itemData={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
