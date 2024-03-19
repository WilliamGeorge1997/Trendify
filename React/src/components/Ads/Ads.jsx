import React, { useContext } from "react";
import ProductItem from "../ProductItem/ProductItem";
import { AllProductContext } from "../../Context/ProductContext";
import CategoryBar from "../CategoryBar/CategoryBar";
import Loading from "../Loading/Loading";

export default function Ads() {
  let { product } = useContext(AllProductContext);
  console.log(product);
  const Products = product?.products?.filter((item) => item.user_id !== 1);
  return (
    <div className="container">
      <CategoryBar label={0} />
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
