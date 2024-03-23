import React, { useContext, useEffect ,Fragment,useState} from "react";
import ProductItem from "../ProductItem/ProductItem";
import { AllProductContext  } from "../../Context/ProductContext";
import CategoryBar from "../CategoryBar/CategoryBar";
import Loading from "../Loading/Loading";
import { Helmet } from "react-helmet";

export default function Ads() {
  let { fetchProducts } = useContext(AllProductContext);
  const [product, setProduct] = useState([]);
  async function pro() {
    let product = await fetchProducts();
   setProduct(product);
  }
  useEffect(() => {
      pro();
    }, []);
  console.log(product.products);
  const Products = product?.products?.filter((item) => item.user.id !== 1);

  return (
     <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ads</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    <div className="container">
      <CategoryBar label={0} />
      {product.status !== 200 ? (
        <Loading />
      ) : Products.length === 0 ? (
        <div className="h3 main-color col-12 text-center py-5 my-5">
        No Ads Yet.        </div>
      ) : (
        <div className="row row-cols-lg-4 row-cols-md-3 ">
          {Products.map((item) => (
            <div className="p-1" key={item.id}>
              <ProductItem itemData={item} />
            </div>
          ))}
        </div>
      )}
    </div></Fragment>
  );
}
