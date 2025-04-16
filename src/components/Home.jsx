import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './style/Home.css';

const Home = ({ onAddToCart, onRemoveFromCart }) => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Products</h1>

      <input
        type="text"
        placeholder="Search product..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="row">
        {(searchTerm ? filteredData : data).map((item) => (
          <div className="card" key={item.id}>
            <img src={item.images[0]} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
            <div className="buttons">
              <button className="add" onClick={() => onAddToCart(item)}>Add To Cart</button>
              <button className="remove" onClick={() => onRemoveFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
