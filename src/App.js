import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  return (
    <div>
      <Header onSearchChange={handleSearchChange} />
      <Home searchValue={searchValue} />
    </div>
  );
}

export default App;
