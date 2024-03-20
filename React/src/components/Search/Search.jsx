import React from 'react'
import styles from './Search.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AllProductContext } from '../../Context/ProductContext';
import { useContext } from 'react';
import ProductItem from '../ProductItem/ProductItem';

export default function Search() {
  let { key } = useParams();
  let { product } = useContext(AllProductContext);
    const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    let filteredResults=[];
    key==="" ? filteredResults = product.products:
  filteredResults = product.products.filter(
      (item) =>
        item.title.toLowerCase().includes(key.toLowerCase()) ||
        item.description.toLowerCase().includes(key.toLowerCase())
    );  
    setSearchResults(filteredResults);
  }, [key]);
  return (
    <div className='container'>
      <div className="row row-cols-lg-4 row-cols-md-3 ">
        {searchResults.map((item) => (
          <div className="p-3">
            <ProductItem key={item.id} itemData={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
