import React, { Fragment } from "react";
import styles from "./LayOut.module.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Up from "../Up/Up";

export default function LayOut() {
  return (
    <div className={` ${styles.LayOut}`}>
      <NavBar></NavBar>
      <Up></Up>
      <Outlet></Outlet>
      <Toaster />
      <Footer></Footer>
    </div>
  );
}
