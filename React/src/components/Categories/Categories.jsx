import React from "react";
import CategoryProductItem from "../CategoryProductItem/CategoryProductItem";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AllProductContext } from "../../Context/ProductContext";
import FilterProductBar from "../FilterProductBar/FilterProductBar";
import Loading from "../Loading/Loading";

export default function Categories() {
  const { product } = useContext(AllProductContext);
  const { id, label } = useParams();
  const initialCatProducts = product.products.filter((item) => {
    const categoryId = parseInt(item.category_id);
    const userId = parseInt(item.user.id);
    const itemId = parseInt(id);
    if (label !== 1) {
      return categoryId === itemId && userId === 1;
    } else {
      return categoryId === itemId && userId !== 1;
    }
  });
  const [filteredProducts, setFilteredProducts] = useState(initialCatProducts);
  const [catProducts, setCatProducts] = useState(initialCatProducts);

  const handleFilterChange = (filteredProducts) => {
    setFilteredProducts(filteredProducts);
  };
  useEffect(() => {
    setCatProducts(filteredProducts);
  }, [filteredProducts]);

  return (
    <div className="container-fluid row">
      <div className="col-md-4">
        <FilterProductBar
          product={initialCatProducts}
          onFilterChange={handleFilterChange}
        ></FilterProductBar>
      </div>
      <div className="col-md-8">
        {product.status !== 200 ? (
          <Loading />
        ) : catProducts.length === 0 ? (
          <div className="h3 main-color text-center my-5">
            No products in this category.
          </div>
        ) : (
          catProducts.map((item) => (
            <CategoryProductItem key={item.id} data={item} />
          ))
        )}
      </div>
    </div>
  );
}
