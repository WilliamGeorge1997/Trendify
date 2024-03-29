import React, { Fragment, useContext, useEffect } from "react";
import "./App.css";
import LayOut from "./components/LayOut/LayOut.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Categories from "./components/Categories/Categories";
import Details from "./components/Details/Details";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Sell from "./components/Sell/Sell";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { UserContext } from "./Context/UserContext.js";
import FavProduct from "./components/FavProduct/FavProduct";
import MyProfile from "./components/MyProfile/MyProfile";
import Cart from "./components/Cart/Cart";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import EditProfile from "./components/EditProfile/EditProfile.jsx";
import FilterProduct from "./components/FilterProduct/FilterProduct";
import Search from "./components/Search/Search";
import { CartContextProvider } from "./Context/CartContext.js";
import Success from "./components/Success/Success";
import { FavouriteContextProvider } from "./Context/FavouriteContext.js";
import Ads from "./components/Ads/Ads";
import ShippingDetails from "./components/ShippingDetails/ShippingDetails.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import EditProduct from "./components/EditProduct/EditProduct.jsx";
import BestRate from "./components/BestRate/BestRate";
import About from "./components/About/About.jsx";

function App() {
  let { setUserToken } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem("userToken") !== null) {
      setUserToken(localStorage.getItem("userToken"));
    }
  }, []);

  const routes = createBrowserRouter([
    {
      path: "",
      element: <LayOut />,
      children: [
        { index: true, element: <Home /> },

        { path: "About", element: <About /> },
        { path: "Details/:id", element: <Details /> },
        { path: "Categories/:id/:label", element: <Categories /> },
        { path: "FilterProduct/:pro", element: <FilterProduct /> },
        { path: "Home", element: <Home /> },
        { path: "Ads", element: <Ads /> },
        { path: "Search/:key", element: <Search /> },
        { path: "success", element: <Success /> },
        { path: "Login", element: <Login /> },
        { path: "BestRate", element: <BestRate /> },
        { path: "Register", element: <Register /> },
        { path: "ContactUs", element: <ProtectedRoute><ContactUs/></ProtectedRoute>  },
       
        { path: "Sell", element: <Sell /> },

        { path: "*", element: <ErrorPage /> },
        {
          path: "FavProduct",
          element:<ProtectedRoute> <FavProduct/> </ProtectedRoute>  ,
        },
        {
          path: "EditProfile",
          element: <ProtectedRoute><EditProfile/></ProtectedRoute> ,
        },
        { path: "MyProfile/:id", element: <MyProfile /> },
        { path: "Cart", element: <ProtectedRoute><Cart/></ProtectedRoute>  },
        { path: "sell", element: <ProtectedRoute><Sell/></ProtectedRoute> },
        {
          path: "EditProduct/:id",
          element: <ProtectedRoute><EditProduct/></ProtectedRoute>  ,
        },
        {
          path: "ShippingDetails",
          element: <ProtectedRoute><ShippingDetails/></ProtectedRoute> ,
        },
        {
          path: "contactus",
          element: (
            <ProtectedRoute>
              
              <ContactUs />
            </ProtectedRoute>
          ),
        },
        {
          path: "contactus",
          element: (
            <ProtectedRoute>
              
              <ContactUs />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "sell",
      element: (
        <ProtectedRoute>
          <Sell />
        </ProtectedRoute>
      ),
    },
    {
      path: "contactus",
      element: (
        <ProtectedRoute>
          
          <ContactUs />
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
