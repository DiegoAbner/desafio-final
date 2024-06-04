import React, { useEffect, useState } from 'react';
import ProductCarousel from '../components/ProductCarousel';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.mercadolibre.com/sites/MLB/search?category=MLB1055');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data.results);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <ProductCarousel products={products} />
    </div>
  );
}

export default Home;
