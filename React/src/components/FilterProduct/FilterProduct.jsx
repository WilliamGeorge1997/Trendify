import React, { Fragment ,  useContext, useState , useEffect  } from "react";
import ProductItem from "../ProductItem/ProductItem";
import { AllProductContext } from "../../Context/ProductContext";
import Categories from "../Categories/Categories";
import { Helmet } from "react-helmet";

import FilterProductBar from "../FilterProductBar/FilterProductBar";
import Loading from "../Loading/Loading";
  import { useParams } from "react-router-dom";

export default function FilterProduct() {
  let { pro } = useParams();

  const { product } = useContext(AllProductContext);
  
 const initialFilProducts = product.products.filter((item) => {
   if (pro === 0) {
     return item.user_id > 1;
   } else if (pro === 1) {
     return item.user_id === 1;
   }
 });
  console.log(initialFilProducts);

  console.log(initialFilProducts);
  const [filteredProducts, setFilteredProducts] = useState(initialFilProducts);
  const [products, setProducts] = useState(initialFilProducts);

  const handleFilterChange = (filteredProducts) => {
    setFilteredProducts(filteredProducts);
  };
  useEffect(() => {
    setProducts(filteredProducts);
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
          >
            {" "}
          </FilterProductBar>
        </div>
        <div className="row row-cols-lg-3 col-md-8 row-cols-md-2 ">
          {product.status !== 200 ? (
            <Loading />
          ) : (
            products.map((item) => (
              <div className="p-3">
                <ProductItem key={item.id} itemData={item} />
              </div>
            ))
          )}
        </div>
      </div>
    </Fragment>
  );
}
