
import React, { createContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const AllProductContext = createContext();
export function removeProduct(productId) {
  let token = localStorage.getItem("userToken");

  if (!token) {
    return Promise.reject(new Error("Token is missing or expired"));
  }
  return axios
    .delete(`http://127.0.0.1:8000/api/products/${productId}/delete`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => toast.success("product was deleted"))
    .catch((err) => toast.error("product wasn't deleted"));
}
export function fetchProducts() {
  return axios
    .get("http://localhost:8000/api/products")
    .then((response) => response.data)
    .catch((error) => {
      throw new Error("Error fetching products: " + error.message);
    });
}

export default function AllProductContextProvider(props) {
  return (
    <AllProductContext.Provider value={{ fetchProducts, removeProduct }}>
      {props.children}
    </AllProductContext.Provider>
  );
}
