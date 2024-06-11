import React, { useState } from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  return (
    <div>
      <Header onSearchChange={handleSearchChange} />
      <Home searchValue={searchValue} />
      <Footer />
    </div>
  );
}

export default App;