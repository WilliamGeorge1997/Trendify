import React, { useContext, useState, useEffect, Fragment } from "react";
import styles from "./Home.module.css";
import MainSlider from "../MainSlider/MainSlider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ProductItem from "../ProductItem/ProductItem";
import { AllProductContext } from "../../Context/ProductContext";
import Categories from "../Categories/Categories";
import CategoryBar from "../CategoryBar/CategoryBar";
import Loading from "../Loading/Loading";
import BestSeller from "../BestSeller/BestSeller";
import BestRate from "../BestRate/BestRate";

export default function Home() {
  let { fetchProducts } = useContext(AllProductContext);
  const [product, setProduct] = useState([]);
  async function pro() {
    let product = await fetchProducts();
    setProduct(product);
  }
  useEffect(() => {
    pro();
  }, []);
  const Products = product?.products?.filter((item) => item.user.id === 1);
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className={styles.container}>
          {product.status !== 200 ? (
          <Loading />
        ) : (
     <Fragment>   <MainSlider />
        <div className={`${styles.container} row m-auto`}>
          <div className="col-md-3">
            <CategoryBar label={1} />
          </div>

          <div className="col-md-9">
            <BestSeller></BestSeller>
            <BestRate></BestRate>
          </div>
        </div>
        <div className={styles.cover}>
          <div>
         
            <h3 className="h1">SHOP WITH AS</h3>
            <p>#NEW SUMMER COLLECTION 2024</p>
            <Link to={"/Categories/9/1"} className="btn btn-dark ">
              SHOP NOW
            </Link>
          </div>
        </div></Fragment>
)}
      </div>
    </Fragment>
  );
}
