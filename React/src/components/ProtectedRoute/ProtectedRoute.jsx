// import React from 'react'
// import styles from './ProtectedRoute.module.css';
import { Navigate } from "react-router-dom";

export default function ProtectedRoute(props) {
     if (localStorage.getItem("userToken") !== null) {
     return props.children;
     } else {
     return <Navigate to={"/login"} > </Navigate>;
     }
}