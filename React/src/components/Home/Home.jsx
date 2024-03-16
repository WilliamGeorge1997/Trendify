import React, { useContext} from "react";
import styles from './Home.module.css';
import MainSlider from "../MainSlider/MainSlider";
import { Link } from "react-router-dom";

import ProductItem from "../ProductItem/ProductItem";
import {AllProductContext} from '../../Context/ProductContext';
import Categories from '../Categories/Categories';
import CategoryBar from "../CategoryBar/CategoryBar";
export default function Home() {
  
 let {product} = useContext(AllProductContext);
  
  return (
    <div className="container">
     <MainSlider />
     <CategoryBar/>
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
