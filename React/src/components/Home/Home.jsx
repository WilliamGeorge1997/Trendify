import React, { useContext} from "react";
import MainSlider from "../MainSlider/MainSlider";
import ProductItem from "../ProductItem/ProductItem";
import {AllProductContext} from '../../Context/ProductContext';
import CategoryBar from "../CategoryBar/CategoryBar";
import Loading from '../Loading/Loading';
export default function Home() {
  
  let { product } = useContext(AllProductContext);
   const Products = product?.products?.filter(
     (item) => item.user_id === 1
   );
  return (
    <div className="container">
      <MainSlider />
      <CategoryBar label={1} />
      {product.status !== 200 ? (
        <Loading />
      ) : (
        <div className="row row-cols-lg-4 row-cols-md-3 ">
          {Products.map((item) => (
            <div className="p-1">
              <ProductItem key={item.id} itemData={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
