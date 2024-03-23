import React, { useContext, useState, useEffect } from "react";
import styles from "./Home.module.css";
import MainSlider from "../MainSlider/MainSlider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ProductItem from "../ProductItem/ProductItem";
import { AllProductContext } from "../../Context/ProductContext";
import Categories from "../Categories/Categories";
import CategoryBar from "../CategoryBar/CategoryBar";
import Loading from "../Loading/Loading";
import { Fragment } from "react";

export default function Home() {
  let { fetchProducts } = useContext(AllProductContext);
  const [product, setProduct] = useState([]);
  async function pro() {
    let product = await fetchProducts();
    setProduct(product);
  }
  useEffect(() => {
    pro();
  }, []);  const Products = product?.products?.filter((item) => item.user.id === 1);
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container">
        <MainSlider />
        <CategoryBar label={1} />
        {product.status !== 200 ? (
          <Loading />
        ) : (
          <div className="row row-cols-lg-4 row-cols-md-3 ">
            {Products.map((item) => (
              <div className="p-1" key={item.id}>
                <ProductItem itemData={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </Fragment>
  );
}
