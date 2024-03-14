import React, { useState } from 'react';
import styles from './Sell.module.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';  

const Sell = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [photos, setPhotos] = useState([]);
  const [isNegotiable, setIsNegotiable] = useState(false);

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    setPhotos(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const formData = {
      title,
      description,
      price,
      photos,
      isNegotiable,
    };
    console.log(formData);
    // Reset form fields after submission if needed
    setTitle('');
    setDescription('');
    setPrice('');
    setPhotos([]);
    setIsNegotiable(false);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className={styles.sellForm}> {}
            <h2 className={styles.formTitle}>Post Your Ad</h2> {}
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}> {}
                <label>Title:</label>
                <input
                  type="text"
                  className="form-control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formGroup}> {}
                <label>Description:</label>
                <textarea
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className={styles.formGroup}> {}
                <label>Price:</label>
                <input
                  type="number"
                  className="form-control"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formGroup}> {}
                <label>Upload Photos:</label>
                <input
                  type="file"
                  className="form-control"
                  accept="image/*"
                  multiple
                  onChange={handlePhotoUpload}
                />
              </div>
              <div className="text-center">
                <button type="submit" className={`btn ${styles.btnSubmit}`}>Submit</button> {}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
