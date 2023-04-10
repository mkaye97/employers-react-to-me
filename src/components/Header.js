import React from 'react';
import Navigation from './Navigation';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <Navigation />
      <div className='page-format'>
        <Portfolio />
      </div>
    </header>
  );
}

export default Header;