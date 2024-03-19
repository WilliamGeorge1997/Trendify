import { createContext } from "react";
import axios from "axios";

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
    .then((res) => res)
    .catch((err) => err);
}

export function getLoggedUserFavourites() {
  return axios
    .get("http://127.0.0.1:8000/api/favourites", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res)
    .catch((err) => err);
}

export function removeLoggedUserFavourite(productId) {
  return axios
    .delete(`http://127.0.0.1:8000/api/favourites/${productId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res)
    .catch((err) => err);
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