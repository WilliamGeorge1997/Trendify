import React, { useContext, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import { AllProductContext } from "../../Context/ProductContext";
export default function FilterProduct() {
  const { product } = useContext(AllProductContext);
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [location, setLocation] = useState("");
  const [stock, setStock] = useState("");
  const [rate, setRating] = useState(0);

  const handlePriceRangeChange = (event) => {
    setPriceRange([parseInt(event.target.value), priceRange[1]]);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleStockChange = (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setStock(1);
    } else {
      setStock(0);
    }
  };

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const filterProducts = (item) => {
    const itemPrice = item.price;
    const itemLocation = item.location ? item.location.toLowerCase() : "";
    const itemStock = item.stock;
    const itemRate = item.rate ? parseInt(item.rate) : 0;

    const priceInRange =
      itemPrice >= priceRange[0] && itemPrice <= priceRange[1];
    const locationMatch =
      !location || itemLocation.includes(location.toLowerCase());
    const stockMatch = stock === 0 ? itemStock === 0 : itemStock > 0;

    const rateMatch = !rate || itemRate >= rate;
    return priceInRange && locationMatch && stockMatch && rateMatch;
  };

  const filteredProducts = product.products.filter((item) =>
    filterProducts(item)
  );

  return (
    <div className=" container-fluid row m-auto">
      <div className="d-flex col-md-3 text-black justify-content-around">
        <div className="mt-5">
          <label htmlFor="priceRange">Price Range:</label>
          <div className="d-flex justify-content-between align-items-center">
            <label htmlFor="minPrice">Min: {priceRange[0]}</label>
            <input
              type="range"
              id="minPrice"
              min={0}
              max={20000}
              value={priceRange[0]}
              onChange={handlePriceRangeChange}
            />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <label htmlFor="maxPrice">Max: {priceRange[1]}</label>
            <input
              type="range"
              id="maxPrice"
              min={0}
              max={20000}
              value={priceRange[1]}
              onChange={(event) =>
                setPriceRange([priceRange[0], parseInt(event.target.value)])
              }
            />
          </div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            className="form-control my-2"
            value={location}
            onChange={handleLocationChange}
          />
          <div className="d-flex align-content-center my-3">
            <label className="form-check-label " htmlFor="Stock">
              Stock{" "}
            </label>{" "}
            <div className="form-check form-switch ms-3">
              <input
                className="form-check-input"
                type="checkbox"
                onChange={handleStockChange}
                // checked
                id="Stock"
              />
            </div>
          </div>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            min={0}
            max={5}
            className="form-control my-2"
            value={rate}
            onChange={handleRatingChange}
          />
        </div>
      </div>
      <div className="row row-cols-lg-3 col-md-9 row-cols-md-2 ">
        {filteredProducts.map((item) => (
          <div className="p-3">
            <ProductItem key={item.id} itemData={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
