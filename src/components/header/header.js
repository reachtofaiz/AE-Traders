import React, { useState } from 'react';
import './header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='header'>
            <img src="/images/logo1.png" className='logo' />
            <img src="/images/icon/menu.svg" className='menu' onClick={toggleMenu} />
            <ul className={menuOpen ? 'show' : ''}>
                <li><a href='#about'>About</a></li>
                <li><a href='#testimony'>Testimonials</a></li>
                <li><a href='#contact'>Contact Us</a></li>
            </ul>
        </div>
    );
}

export default Header;
