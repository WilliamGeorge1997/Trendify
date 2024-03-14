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
import { Fragment } from "react";
import FavProduct from './components/FavProduct/FavProduct';
import MyAds from './components/MyAds/MyAds';
import MyProfile from './components/MyProfile/MyProfile';
import Cart from './components/Cart/Cart';
function App() {
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
        { path: "Notification", element: <Notification /> },
        { path: "*", element: <ErrorPage /> },
        { path: "FavProduct", element: <FavProduct /> },
        { path: "MyProfile", element: <MyProfile /> },
        { path: "Cart", element: <Cart /> },

        { path: "MyAds", element: <MyAds /> },
      ],
    },
    { path: "sell", element: <Sell /> },
  ]);

  return (
    <Fragment>
      <RouterProvider router={routes}></RouterProvider>
    </Fragment>
  );
}

export default App;
