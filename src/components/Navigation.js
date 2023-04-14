import React from 'react';
import '../styles/Navigation.css';

function Navigation({ currentPage, handlePageChange }) {
    return (
        <nav className="navbar navbar-expand-lg nav-container">
            <h1 className='main-colors nav-text px-5 nav-title'>Kaye Portfolio</h1>
            <div>
                <div className="navbar-nav">
                    <li>
                        <a onClick={() => handlePageChange('About')} className={currentPage === 'About' ? "px-5 main-colors nav-text link-underline-opacity-75-hover active-nav" : "px-5 main-colors nav-text link-underline-opacity-75-hover"} href="#about">About Me</a>
                    </li>
                    <li>
                        <a onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? "px-5 main-colors nav-text link-underline-opacity-75-hover active-nav" : "px-5 main-colors nav-text link-underline-opacity-75-hover"} href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? "px-5 main-colors nav-text link-underline-opacity-75-hover active-nav" : "px-5 main-colors nav-text link-underline-opacity-75-hover"} href="#contact">Contact</a>
                    </li>
                    <li>
                        <a onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? "px-5 main-colors nav-text link-underline-opacity-75-hover active-nav" : "px-5 main-colors nav-text link-underline-opacity-75-hover"} href="#resume">Resume</a>
                    </li>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;