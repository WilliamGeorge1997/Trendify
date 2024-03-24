import React from "react";
import CategoryProductItem from "../CategoryProductItem/CategoryProductItem";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect, Fragment } from "react";
import { AllProductContext } from "../../Context/ProductContext";
import FilterProductBar from "../FilterProductBar/FilterProductBar";
import Loading from "../Loading/Loading";
import { Helmet } from "react-helmet";

export default function Categories() {
  const { id, label } = useParams();
  let { fetchProducts } = useContext(AllProductContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [catProducts, setCatProducts] = useState([]);
  const [product, setProduct] = useState([]);
  async function pro() {
    let product = await fetchProducts();
    setProduct(product);
    setCatProducts(product.products);
    const initialCatProducts = product?.products?.filter((item) => {
      const categoryId = parseInt(item.category_id);
      const userId = parseInt(item.user.id);
      const itemId = parseInt(id);
      if (label != 1) {
        return categoryId == itemId && userId != 1;
      } else {
        return categoryId == itemId && userId == 1;
      }
    });
    setCatProducts(initialCatProducts);
  }
  // pro();
  useEffect(() => {
    pro();
    setCatProducts(initialCatProducts);
  }, []);
  const initialCatProducts = product?.products?.filter((item) => {
    const categoryId = parseInt(item.category_id);
    const userId = parseInt(item.user.id);
    const itemId = parseInt(id);
    if (label != 1) {
      return categoryId == itemId && userId != 1;
    } else {
      return categoryId == itemId && userId == 1;
    }
  });

  const handleFilterChange = (filteredProducts) => {
    setFilteredProducts(filteredProducts);
  };

  useEffect(() => {
    setCatProducts(filteredProducts);
  }, [filteredProducts]);

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Categories</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container-fluid row">
        <h3 className="fw-bold mb-3">Categories</h3>
        <div className="col-md-4">
          <FilterProductBar
            product={initialCatProducts}
            onFilterChange={handleFilterChange}
          ></FilterProductBar>
        </div>
        <div className="col-md-8">
          {product.status !== 200 ? (
            <Loading />
          ) : catProducts?.length == 0 ? (
            <div className="h3 main-color text-center my-5">
              No products in this category.
            </div>
          ) : (
            catProducts?.map((item) => (
              <CategoryProductItem key={item.id} data={item} />
            ))
          )}
        </div>
      </div>
    </Fragment>
  );
}
