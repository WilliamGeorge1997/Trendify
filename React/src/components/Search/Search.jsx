import React, { Fragment,  useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { AllProductContext } from "../../Context/ProductContext";
import ProductItem from "../ProductItem/ProductItem";
import { Helmet } from "react-helmet";
import Loading from '../Loading/Loading';

export default function Search() {
  const { key } = useParams();
  const { fetchProducts } = useContext(AllProductContext);
  const [product, setProduct] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const products = await fetchProducts();
        console.log(products);
        setProduct(products);
        const filteredResults = products.products.filter(
          (item) =>
            item.title.toLowerCase().includes(key.toLowerCase()) ||
            item.description.toLowerCase().includes(key.toLowerCase())
        );
        setSearchResults(filteredResults);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchData();
  }, [fetchProducts, key]);

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Search</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {product.status == 200 ? (
        <div className="container">
          <Link to={"/Home"} className="text-black">
            <i className="fa-solid m-3 fa-x"></i>
          </Link>
          {searchResults.length ? (
            <div className="row row-cols-lg-4 row-cols-md-3 ">
              {searchResults.map((item) => (
                <div key={item.id} className="p-3">
                  <ProductItem itemData={item} />
                </div>
              ))}
            </div>
          ) : (
            <div className="h3 main-color col-12 text-center py-5 my-5">
              No product matches the search query.
            </div>
          )}
        </div>
      ) : (
        <Loading></Loading>
      )}
    </Fragment>
  );
}
