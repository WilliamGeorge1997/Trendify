import React, { Fragment} from "react";
// import styles from "./LayOut.module.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function LayOut() {
  return (
    <Fragment>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Toaster />
      <Footer></Footer>
    </Fragment>
  );
}
