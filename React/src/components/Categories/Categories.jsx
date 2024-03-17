import React from 'react';
import styles from './Categories.module.css';
import CategoryProductItem from '../CategoryProductItem/CategoryProductItem';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AllProductContext } from '../../Context/ProductContext';

export default function Categories() {
   let { product } = useContext(AllProductContext);
  
  const { id } = useParams();
const catProducts = product.filter((item) => item.category_id == id);

  const items = [];

  for (let index = 0; index < catProducts.length; index++) {
    items.push(<CategoryProductItem key={index}  data={catProducts[index]}  />);
  }

  return (
    <div className='container' >
      {items}
    </div>
  );
}
