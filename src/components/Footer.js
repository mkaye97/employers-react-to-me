import React from 'react';
import LinkedIn from '../utils/images/LinkedIn.png';
import Github from '../utils/images/Github.png';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className='link-container'>
                <a href='https://www.linkedin.com/in/matt-kaye-043b17127/' target="_blank" rel="noreferrer noopener">
                    <img className='link-image' src={LinkedIn} alt="Matthew Kaye's Github Link" />
                </a>
                <a href='https://github.com/mkaye97' target="_blank" rel="noreferrer noopener">
                    <img className='link-image' src={Github} alt="Matthew Kaye's Github Link" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;