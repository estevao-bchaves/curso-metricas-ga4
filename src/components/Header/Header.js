import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Cart from '../Cart/Cart'

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className="header">
      <div className="header-title"><span><Link to="/" className="header-link">Sebo Virtual</Link></span></div>
      <nav className="header-nav">
        <span><Link to="/" className="header-link">Home</Link></span>
        <span><Link to="/produtos" className="header-link">Produtos</Link></span>
        <span><Link to="/sobre" className="header-link">Sobre</Link></span> 
      </nav>
      <Cart />
    </header>
  );
};

export default Header;