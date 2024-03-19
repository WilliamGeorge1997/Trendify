import React, { useContext, useState } from "react";
import MainSlider from "../MainSlider/MainSlider";
import { Link, useParams } from "react-router-dom";
import ProductItem from "../ProductItem/ProductItem";
import { AllProductContext } from "../../Context/ProductContext";
import Categories from "../Categories/Categories";
import { Helmet } from "react-helmet";

export default function FilterProduct() {
  const { product } = useContext(AllProductContext);
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [location, setLocation] = useState("");
  const [stock, setStock] = useState("");
  const [rating, setRating] = useState(0);

  const handlePriceRangeChange = (event) => {
    setPriceRange([parseInt(event.target.value), priceRange[1]]);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleStockChange = (event) => {
    setStock(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value)); 
  };

  const filterProducts = (item) => {
    const itemPrice = item.price;
    const itemLocation = item.location ? item.location.toLowerCase() : "";
    const itemStock = String(item.stock).toLowerCase();
    const itemRating = item.rate ? parseInt(item.rate) : 0;

    const priceInRange =
      itemPrice >= priceRange[0] && itemPrice <= priceRange[1];
    const locationMatch =
      !location || itemLocation.includes(location.toLowerCase());
    const stockMatch = !stock || itemStock.includes(stock.toLowerCase());
    const ratingMatch = !rating || itemRating === rating; 

    return priceInRange && locationMatch && stockMatch && ratingMatch;
  };

  const filteredProducts = product.filter((item) => filterProducts(item));

  return <>

<Helmet>
        <meta charSet="utf-8" />
        <title>Products Filter</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    <div className="container">
      <div className="d-flex text-black justify-content-around">
        <div>
          <label htmlFor="priceRange">Price Range:</label>
          <br />
          <label htmlFor="minPrice">Min: {priceRange[0]}</label>
          <input
            type="range"
            id="minPrice"
            min={0}
            max={100000}
            value={priceRange[0]}
            onChange={handlePriceRangeChange}
          />
          <label htmlFor="maxPrice">Max: {priceRange[1]}</label>
          <input
            type="range"
            id="maxPrice"
            min={0}
            max={100000}
            value={priceRange[1]}
            onChange={(event) =>
              setPriceRange([priceRange[0], parseInt(event.target.value)])
            }
          />
          <br />
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            className="form-control"
            value={location}
            onChange={handleLocationChange}
          />
          <label htmlFor="stock">Stock:</label>
          <input
            type="text"
            id="stock"
            className="form-control"
            value={stock}
            onChange={handleStockChange}
          />
          <label htmlFor="rating">Rating:</label>
          <input
            type="number" // Change input type to number
            id="rating"
            min={0}
            max={5}
            className="form-control"
            value={rating}
            onChange={handleRatingChange}
          />
        </div>
      </div>
      <div className="row row-cols-lg-4 row-cols-md-3 ">
        {filteredProducts.map((item) => (
          <div className="p-3">
            <ProductItem key={item.id} itemData={item} />
          </div>
        ))}
      </div>
    </div>
  </>
}
