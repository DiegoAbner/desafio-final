import React from 'react';
import abnerLogo from '../images/abner-solto.png';
import mlLogo from '../images/logo-ml.png';
import { PiPlaceholder } from 'react-icons/pi';
const Header = () => {
  return (
    <header>
      <img src={abnerLogo} alt="abnerlogo" className="header-abnerLogo" />

      <input className='searchInput' placeholder='Buscar produtos, marcas e muito mais'>
      </input>

      <h1 className='slogan-container'>
        Sua compra e entrega.<br />Onde você estiver
      </h1>

      <img src={mlLogo} alt="mllogo" className="header-mlLogo" />

      
    </header>
  );
}

export default Header;