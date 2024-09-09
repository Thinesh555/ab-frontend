import React from 'react';
import './Home.css';

// Import images
import dish1 from '../assets/images/dish1.jpg';
import dish2 from '../assets/images/dish2.jpg';
import dish3 from '../assets/images/dish3.jpg';

const Home = () => {
  return (
    <div className="home">
      {/* Existing content here... */}

      {/* New Image Gallery Section */}
      <section className="image-gallery">
        <h2>Our Delicious Dishes</h2>
        <div className="gallery-container">
          <div className="gallery-item">
            <img src={dish1} alt="Delicious Dish 1" />
          </div>
          <div className="gallery-item">
            <img src={dish2} alt="Delicious Dish 2" />
          </div>
          <div className="gallery-item">
            <img src={dish3} alt="Delicious Dish 3" />
          </div>
          {/* Add more images as needed */}
        </div>
      </section>

      {/* Existing content continues... */}
    </div>
  );
};

export default Home;
