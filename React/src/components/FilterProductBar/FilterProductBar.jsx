import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

export default function FilterProductBar({ product, onFilterChange }) {
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [location, setLocation] = useState("");
  const [stock, setStock] = useState(false);
  const [rate, setRating] = useState(0);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cities")
      .then((response) => {
        setCities(response.data.cities);
      })
      .catch((error) => {
        console.error("Error fetching city data:", error);
      });
  }, []);

  const handleMinPriceChange = (event) => {
    const minPrice = parseInt(event.target.value);
    setPriceRange([minPrice, priceRange[1]]);
    filterAndUpdate(minPrice, priceRange[1], location, stock, rate);
  };

  const handleMaxPriceChange = (event) => {
    const maxPrice = parseInt(event.target.value);
    setPriceRange([priceRange[0], maxPrice]);
    filterAndUpdate(priceRange[0], maxPrice, location, stock, rate);
  };

  const handleLocationChange = (event) => {
    const loc = event.target.value;
    setLocation(loc);
    filterAndUpdate(priceRange[0], priceRange[1], loc, stock, rate);
  };

const handleStockChange = (event) => {
  const isChecked = event.target.checked;
  setStock(isChecked ? 1 : 0); 
  filterAndUpdate(
    priceRange[0],
    priceRange[1],
    location,
    isChecked ? 1 : 0,
    rate
  );
};

  const handleRatingChange = (event) => {
    const rating = parseInt(event.target.value);
    setRating(rating);
    filterAndUpdate(priceRange[0], priceRange[1], location, stock, rating);
  };

  const filterAndUpdate = (minPrice, maxPrice, loc, stockVal, rating) => {
    const filteredProducts = product.filter((item) =>
      filterProducts(item, minPrice, maxPrice, loc, stockVal, rating)
    );
    onFilterChange(filteredProducts);
  };

  const filterProducts = (item, minPrice, maxPrice, loc, stockVal, rating) => {
    const itemPrice = item.price;
    const itemLocation = item.location_id;
    const itemStock = item.stock;
    const itemRate = item.rate ? parseInt(item.rate) : 0;
    const priceInRange = itemPrice >= minPrice && itemPrice <= maxPrice;
    const locationMatch = !loc || itemLocation == loc;
    const stockMatch = stockVal === 0 || itemStock > 0;
    const rateMatch = !rating || itemRate >= rating;

    return priceInRange && locationMatch && stockMatch && rateMatch;
  };

  return (
    <div className="container-fluid row m-auto">
      <div className="mt-5">
        <label htmlFor="priceRange">Price Range:</label>
        <div className="d-flex justify-content-between align-items-center">
          <label htmlFor="minPrice">Min: {priceRange[0]}</label>
          <input
            type="range"
            id="minPrice"
            min={0}
            max={100000}
            value={priceRange[0]}
            onChange={handleMinPriceChange}
          />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <label htmlFor="maxPrice">Max: {priceRange[1]}</label>
          <input
            type="range"
            id="maxPrice"
            min={0}
            max={100000}
            value={priceRange[1]}
            onChange={handleMaxPriceChange}
          />
        </div>
     
          <label htmlFor="location" className="mb-2">
            Location:
          </label>
          <select
            className="form-select"
            onChange={handleLocationChange}
            value={location}
          >
            <option value="">All</option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.city_name}
              </option>
            ))}
          </select>
     
        <div className="d-flex align-content-center my-3">
          <label className="form-check-label" htmlFor="Stock">
            In Stock
          </label>
          <div className="form-check form-switch ms-3">
            <input
              className="form-check-input"
              type="checkbox"
              onChange={handleStockChange}
              id="Stock"
              checked={stock}
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
  );
}
