import React, { useContext } from "react";
import ProductItem from "../ProductItem/ProductItem";
import { AllProductContext } from "../../Context/ProductContext";
import CategoryBar from "../CategoryBar/CategoryBar";
import Loading from "../Loading/Loading";
export default function Ads() {
  let { product } = useContext(AllProductContext);
  const Products = product?.products?.filter((item) => item.user.id !== 1);
 return (
    <div className="container">
      <CategoryBar label={0} />
      {product.status !== 200 ? (
        <Loading />
      ) : Products.length === 0 ? (
        <div className="h3 main-color col-12 text-center py-5 my-5">
    <Loading/>
        </div>
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
  );
}
