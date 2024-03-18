// import { Fragment } from "react";
import "./App.css";
import LayOut from "./components/LayOut/LayOut.jsx";
import {
  // BrowserRouter, Routes, Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Categories from "./components/Categories/Categories";
import Details from "./components/Details/Details";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Sell from "./components/Sell/Sell";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Notification from "./components/Notification/Notification";
// import ProductItem from "./components/ProductItem/ProductItem";
import { Fragment, useContext, useEffect } from "react";
// import CategoryProductItem from "./components/CategoryProductItem/CategoryProductItem.jsx";
import { UserContext } from "./Context/UserContext.js";

import FavProduct from "./components/FavProduct/FavProduct";
import MyAds from "./components/MyAds/MyAds";
import MyProfile from "./components/MyProfile/MyProfile";
import Cart from "./components/Cart/Cart";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import EditProfile from "./components/EditProfile/EditProfile.jsx";



function App() {
  let { setUserToken } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem("userToken") !== null) {
      setUserToken(localStorage.getItem("userToken"));
    }
  }, []);
  let routes = createBrowserRouter([
    {
      path: "",
      element: <LayOut />,
      children: [
        { path: "Categories", element: <Categories /> },
        { path: "Details", element: <Details /> },
        { path: "Home", element: <Home /> },
        { path: "Login", element: <Login /> },
        { path: "Register", element: <Register /> },
        { path: "*", element: <ErrorPage /> },
        {
          path: "FavProduct",
          element: (
            <ProtectedRoute>
              {" "}
              <FavProduct />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "MyProfile",
          element: (
            <ProtectedRoute>
              {" "}
              <MyProfile />{" "}
            </ProtectedRoute>
          ),
        },  {
          path: "EditProfile",
          element: (
            <ProtectedRoute>
              {" "}
              <EditProfile />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "Cart",
          element: (
            <ProtectedRoute>
              {" "}
              <Cart />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "MyAds",
          element: (
            <ProtectedRoute>
              {" "}
              <MyAds />{" "}
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "sell",
      element: (
        <ProtectedRoute>
          {" "}
          <Sell />{" "}
        </ProtectedRoute>
      ),
    },
  ]);

  return (
    <Fragment>
      <RouterProvider router={routes}></RouterProvider>
    </Fragment>
  );
}

export default App;
