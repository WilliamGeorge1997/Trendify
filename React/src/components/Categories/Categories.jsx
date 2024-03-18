import React from 'react';
import styles from './Categories.module.css';
import CategoryProductItem from '../CategoryProductItem/CategoryProductItem';
import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from "react";
import { AllProductContext } from '../../Context/ProductContext';
import FilterProductBar from '../FilterProductBar/FilterProductBar';
import Loading from '../Loading/Loading';

export default function Categories() {
   const { product } = useContext(AllProductContext);
  const { id } = useParams();
   const initialCatProducts = product.products.filter(
     (item) => item.category_id == id
   );
   const [filteredProducts, setFilteredProducts] = useState(initialCatProducts);
   const [catProducts, setCatProducts] = useState(initialCatProducts);

   const handleFilterChange = (filteredProducts) => {
     setFilteredProducts(filteredProducts);
   };console.log(catProducts);
   useEffect(() => {
     setCatProducts(filteredProducts);
   }, [filteredProducts]);

  return (
    <div className="container row">
      <div className="col-md-4">
        <FilterProductBar
          product={initialCatProducts}
          onFilterChange={handleFilterChange}
        ></FilterProductBar>
      </div>
      <div className="col-md-8">
        {(product.status != 200) ? (
          <Loading />
        ) : ((catProducts.length===0)?(<div className='h3 main-color text-center my-5'>no  products in this category</div>) :(   catProducts.map((item) => (
            <CategoryProductItem key={item.id} data={item} />
          )))
      
        )}
      </div>
    </div>
  );
}
