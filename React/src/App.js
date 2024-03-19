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
import { Fragment, useContext, useEffect } from "react";
import { UserContext } from "./Context/UserContext.js";
import FavProduct from "./components/FavProduct/FavProduct";
import MyAds from "./components/MyAds/MyAds";
import MyProfile from "./components/MyProfile/MyProfile";
import Cart from "./components/Cart/Cart";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import EditProfile from "./components/EditProfile/EditProfile.jsx";


import FilterProduct from './components/FilterProduct/FilterProduct';
import Search from './components/Search/Search';
import { CartContextProvider } from "./Context/CartContext.js";
import Success from "./components/Success/Success";
import { FavouriteContextProvider } from "./Context/FavouriteContext.js";
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
        { path: "Details/:id", element: <Details /> },
        { path: "Categories/:id", element: <Categories /> },
        { path: "FilterProduct", element: <FilterProduct /> },
        { path: "Home", element: <Home /> },
        { path: "Search/:key", element: <Search /> },
        { path: "success", element: <Success /> },
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
      <CartContextProvider>
        <FavouriteContextProvider>
          <RouterProvider router={routes}></RouterProvider>
        </FavouriteContextProvider>
      </CartContextProvider>
    </Fragment>
  );
}

export default App;
