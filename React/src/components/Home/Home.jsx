import React from 'react'
// import styles from './Home.module.css';
import MainSlider from '../MainSlider/MainSlider';
import { Link } from 'react-router-dom';
export default function Home() {
   
  return (
    <div className="container">
      <MainSlider />
      <div className="d-flex text-black justify-content-around">
        <Link to={"/Categories"} />
        CAT1
        <Link />
        <Link to={"/Categories"} />
        CAT2
        <Link /> <Link to={"/Categories"} />
        CAT3
        <Link /> <Link to={"/Categories"} />
        CAT4
        <Link /> <Link to={"/Categories"} />
        CAT5
        <Link /> <Link to={"/Categories"} />
        CAT6
        <Link /> <Link to={"/Categories"} />
        CAT7
        <Link />
      </div>
    </div>
  );
}
