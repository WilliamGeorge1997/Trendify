import { createContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export let favouriteContext = createContext();

let token = localStorage.getItem("userToken");

export function addToFavourite(productId) {
  axios
    .post(
      "http://127.0.0.1:8000/api/favourite",
      { product_id: productId },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((res) =>  toast.success(res.data.message)
)
    .catch((err) => toast.error(err.response.data.message));
}

export function getLoggedUserFavourites() {
    if (!token) {
      return Promise.reject(new Error("Token is missing or expired"));
    }
  return axios
    .get("http://127.0.0.1:8000/api/favourites", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) =>res)
    .catch((err) => err)
}

export function removeLoggedUserFavourite(productId) {
    if (!token) {
      return Promise.reject(new Error("Token is missing or expired"));
    }

  return axios
    .delete(`http://127.0.0.1:8000/api/favourites/${productId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      toast.success(res.data.message)
              return res;

    })
    .catch((err) => {
      toast.error(err.response.data.message)
          return err;
});
}
export function FavouriteContextProvider(props) {
  return (
    <favouriteContext.Provider
      value={{ addToFavourite, getLoggedUserFavourites, removeLoggedUserFavourite }}
    >
      {props.children}
    </favouriteContext.Provider>
  );
}