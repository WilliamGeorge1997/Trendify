import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import UserContextProvider from "./Context/UserContext";
import AllProductContextProvider from "./Context/ProductContext";
import { QueryClient, QueryClientProvider } from "react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));
let queryClient = new QueryClient();
root.render(
  <UserContextProvider>
    <AllProductContextProvider>
      <QueryClientProvider client={queryClient}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </QueryClientProvider>{" "}
    </AllProductContextProvider>
  </UserContextProvider>
);
