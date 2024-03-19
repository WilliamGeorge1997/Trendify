import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AllProductContext = createContext();

export default function AllProductContextProvider(props) {
  const [product, setProducts] = useState([]);

  async function fetchProducts() {
    try {
      const response = await axios.get("http://localhost:8000/api/products");
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <AllProductContext.Provider value={{ product }}>
      {props.children}
    </AllProductContext.Provider>
  );
}
