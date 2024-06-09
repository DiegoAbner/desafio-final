import React, { useState } from 'react';
import abnerLogo from '../images/abner-solto.png';
import mlLogo from '../images/logo-ml.png';

const Header = ({ onSearchChange }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearchChange(value);
  };

  return (
    <header>
      <img src={abnerLogo} alt="abnerlogo" className="header-abnerLogo" />
      <input
        value={searchValue}
        onChange={handleInputChange}
        className='searchInput'
        placeholder='Buscar produtos, marcas e muito mais'
      />
      <h1 className='slogan-container'>
        Sua compra e entrega.<br />Onde você estiver
      </h1>
      <img src={mlLogo} alt="mllogo" className="header-mlLogo" />
    </header>
  );
}

export default Header;
