import React from 'react';
import Navigation from './Navigation';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <Navigation />
      <div className='page-format'>
        <Resume />
      </div>
    </header>
  );
}

export default Header;