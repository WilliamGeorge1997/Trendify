import React ,{  Fragment} from 'react'
import styles from './ErrorPage.module.css';
import error404 from "../../assets/images/3747371.jpg";
import { Helmet } from "react-helmet";

export default function ErrorPage() {
  return (<Fragment>  <Helmet>
        <meta charSet="utf-8" />
        <title>Error Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    <section className={styles.ErrorPage}>
  <img src={error404} className="w-100" alt='error'/>
    <h2 className='text-center'>page not found</h2></section>
 </Fragment> )
}
