// import { Fragment } from "react";
import "./App.css";
import LayOut from "./components/LayOut/LayOut.jsx";
import {
  // BrowserRouter, Routes, Route,
  createBrowserRouter, RouterProvider
} from "react-router-dom";
import Categories from './components/Categories/Categories';
import Details from './components/Details/Details';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Sell from './components/Sell/Sell';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Notification from './components/Notification/Notification';
import ProductItem from './components/ProductItem/ProductItem';
import { Fragment } from 'react';
import CategoryProductItem from "./components/CategoryProductItem/CategoryProductItem.jsx";
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
    ],
  },
  { path: "sell", element: <Sell /> },
]);

  return (<Fragment>
    <RouterProvider router={routes}></RouterProvider>
    <CategoryProductItem/>
  </Fragment>
    
  );
}

export default App;
