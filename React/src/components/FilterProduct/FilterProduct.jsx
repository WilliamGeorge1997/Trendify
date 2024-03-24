import React, { Fragment, useContext, useState, useEffect } from "react";
import ProductItem from "../ProductItem/ProductItem";
import { AllProductContext } from "../../Context/ProductContext";
import Categories from "../Categories/Categories";
import { Helmet } from "react-helmet";
import FilterProductBar from "../FilterProductBar/FilterProductBar";
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";
export default function FilterProduct() {
  const { pro } = useParams();
  let { fetchProducts } = useContext(AllProductContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [finalProducts, setFinalProducts] = useState([]);
  const [product, setProduct] = useState([]);
  async function prod() {
    let product = await fetchProducts();
    setProduct(product);
    setFinalProducts(product.products);
    const initialFilProducts = product?.products?.filter((item) => {
      if (pro == 0) {
        return parseInt(item.user.id) > 1;
      } else if (pro == 1) {
        return parseInt(item.user.id) === 1;
      }
    });
    setFinalProducts(initialFilProducts);
  }
  useEffect(() => {
    prod();
  setFinalProducts(initialFilProducts);

  }, []);
  const initialFilProducts = product?.products?.filter((item) => {
    if (pro === 0) {
      return parseInt(item.user.id) > 1;
    } else if (pro === 1) {
      return parseInt(item.user.id) === 1;
    }
  });
  const handleFilterChange = (filteredProducts) => {
    setFilteredProducts(filteredProducts);
  };

  useEffect(() => {
    setFinalProducts(filteredProducts);
  }, [filteredProducts]);

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Products Filter</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className=" container-fluid row ">
        <div className="col-md-4 ">
          <FilterProductBar
            product={initialFilProducts}
            onFilterChange={handleFilterChange}
          ></FilterProductBar>
        </div>
        <div className="col-md-8 ">
          {product.status !== 200 ? (
            <Loading />
          ) : finalProducts?.length == 0 ? (
            <div className="h3 main-color text-center my-5">
              No products in this category.
            </div>
          ) : (
            <div className=" row-cols-md-2 row row-cols-lg-3 ">
              {finalProducts?.map((item) => (
                <div className="p-3"   key={item.id}>
                  <ProductItem itemData={item} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
}
