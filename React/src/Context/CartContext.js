import { createContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";

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
      .then((res) => {    toast.success(res.data.message);
   })
      .catch((err) => { toast.error(err.response.data.message);
    });
 
  }
  return (
    <cartContext.Provider value={{ addToCart }}>
      {props.children}
    </cartContext.Provider>
  );
}
