import React, { useState } from 'react';
import axios from 'axios';
import styles from './Sell.module.css'; // Import your CSS module file

const SellPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [photos, setPhotos] = useState([]);
  const [isNegotiable, setIsNegotiable] = useState(false);

  const handleChangePrice = (event) => {
    const inputPrice = event.target.value;
    // Allow only numeric values and a dot for decimal
    if (/^\d*\.?\d*$/.test(inputPrice)) {
      // If the entered value is a valid number and is greater than or equal to 50, update the state
      if (parseFloat(inputPrice) >= 50 || inputPrice === '') {
        setPrice(inputPrice);
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Your API endpoint for posting the product data
      await axios.post('http://localhost:8000/api/products', {
        title,
        description,
        price,
        photos,
        isNegotiable,
      });
      // Reset form fields after successful submission
      setTitle('');
      setDescription('');
      setPrice('');
      setPhotos([]);
      setIsNegotiable(false);
      alert('Product posted successfully!');
    } catch (error) {
      console.error('Error posting product:', error);
      alert('Failed to post product. Please try again later.');
    }
  };

  return (
    <div className={styles.sellPage}>
      <h2>Post Your Product</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Price:</label>
          <input
            type="text"
            value={price}
            onChange={handleChangePrice}
            placeholder="Enter price"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Upload Photos:</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => setPhotos(e.target.files)}
            required
          />
          <small>You can upload up to 20 photos</small>
        </div>
        <div className={styles.formGroup}>
          <label>Negotiable:</label>
          <input
            type="checkbox"
            checked={isNegotiable}
            onChange={(e) => setIsNegotiable(e.target.checked)}
          />
        </div>
        <button type="submit">Post Product</button>
      </form>
    </div>
  );
};

export default SellPage;
