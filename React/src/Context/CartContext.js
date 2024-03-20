import { createContext } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import toast from "react-hot-toast";

export let cartContext = createContext();

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
  .then((res) => {
  toast.success(res.data.message);
   })
      .catch((err) => { toast.error(err.response.data.message);
    });
 
}
function getLoggedUserCart() {
  return axios
    .get("http://127.0.0.1:8000/api/carts", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res)
    .catch((err) => err);
}

export function removeCartItem(productId) {
  return axios
    .delete(`http://127.0.0.1:8000/api/carts/${productId}/delete`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res)
    .catch((err) => err);
}

export function updateProductQuantity(productId, action) {
  return axios
    .put(`http://127.0.0.1:8000/api/carts/${productId}/${action}`, null, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res) 
    .catch((err) => err);
}

export function removeCart() {
  return axios
    .delete(`http://127.0.0.1:8000/api/carts/delete`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res)
    .catch((err) => err);
}

export function useCartItemCount() {
  return useQuery("cartItemCount", async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/carts", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.total_count;
  });
}

export function CartContextProvider(props) {
  return (
    <cartContext.Provider
      value={{
        addToCart,
        getLoggedUserCart,
        removeCartItem,
        updateProductQuantity,
        removeCart,
        useCartItemCount
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

