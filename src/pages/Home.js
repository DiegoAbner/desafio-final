import React, { useEffect, useState } from 'react';
import ProductCarousel from '../components/Carousel/ProductCarousel';

const Home = ({ searchValue }) => {
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

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <div className="product-list">
        <ProductCarousel products={filteredProducts} />
      </div>
    </div>
  );
}

export default Home;
