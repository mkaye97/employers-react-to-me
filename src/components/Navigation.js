import React from 'react';
import '../styles/Navigation.css';

function Navigation({ currentPage, handlePageChange }) {
    return (
        <nav className="navbar navbar-expand-lg nav-container">
            <h1 className='main-colors nav-text px-5'>Kaye Portfolio</h1>
            <div>
                <div className="navbar-nav">
                    <a onClick={() => handlePageChange('About')} className={currentPage ? "px-5 main-colors nav-text nav-link active" : "px-5 main-colors nav-text link-underline-opacity-75-hover"} href="#about">About Me</a>
                    <a onClick={() => handlePageChange('Portfolio')} className={currentPage ? "px-5 main-colors nav-text nav-link active" : "px-5 main-colors nav-text link-underline-opacity-75-hover"} href="#portfolio">Portfolio</a>
                    <a onClick={() => handlePageChange('Contact')} className={currentPage ? "px-5 main-colors nav-text nav-link active" : "px-5 main-colors nav-text link-underline-opacity-75-hover"} href="#contact">Contact</a>
                    <a onClick={() => handlePageChange('Resume')} className={currentPage ? "px-5 main-colors nav-text nav-link active" : "px-5 main-colors nav-text link-underline-opacity-75-hover"} href="#resume">Resume</a>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;