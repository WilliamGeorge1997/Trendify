import React from 'react'
import styles from './ErrorPage.module.css';
import error404 from "../../assets/images/3747371.jpg";

export default function ErrorPage() {
  return (
    <section className={styles.ErrorPage}>
  <img src={error404} className="w-100" alt='error'/>
    <h2 className='text-center'>page not found</h2></section>
  )
}
