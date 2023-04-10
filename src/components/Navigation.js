import React from 'react';
import '../styles/Navigation.css';

function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg nav-container">
            <h1 className='main-colors nav-text px-5'>Kaye Portfolio</h1>
            <div>
                <div className="navbar-nav">
                    <a className="px-5 main-colors nav-text link-underline-opacity-75-hover" href="#">About Me</a>
                    <a className="px-5 main-colors nav-text link-underline-opacity-75-hover" href="#">Portfolio</a>
                    <a className="px-5 main-colors nav-text link-underline-opacity-75-hover" href="#">Contact</a>
                    <a className="px-5 main-colors nav-text link-underline-opacity-75-hover" href="#">Resume</a>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;