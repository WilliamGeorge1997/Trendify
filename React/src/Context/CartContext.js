import { createContext } from "react";
import axios from "axios";

export let cartContext = createContext();

export function CartContextProvider(props) {
  let token = localStorage.getItem("userToken");

  function addToCart(productId) {
    axios
      .post(
        "http://127.0.0.1:8000/api/carts",
        { product_id: productId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return (
    <cartContext.Provider value={{ addToCart }}>
      {props.children}
    </cartContext.Provider>
  );
}
