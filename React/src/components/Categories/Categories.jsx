import React from 'react';
import styles from './Categories.module.css';
import CategoryProductItem from '../CategoryProductItem/CategoryProductItem';

export default function Categories() {
  const items = [];

  for (let index = 0; index < 10; index++) {
    items.push(<CategoryProductItem key={index} />);
  }

  return (
    <div className={styles.Categories}>
      {items}
    </div>
  );
}
