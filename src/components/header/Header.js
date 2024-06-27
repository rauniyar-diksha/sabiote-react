import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/Logo.png';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className='head-wrap'>
            <div className='basix'>
                <div className="top-bar">
                    <div className="contact-container">
                        <div className='phoneno-box'>
                            <FaPhoneAlt />
                            <span id="et-info-phone">+919873356077</span>
                        </div>
                        <div className='phoneno-box'>
                            <MdEmail />
                            <a href="mailto:sales@sabiote.in"><span id="et-info-email">sales@sabiote.in</span></a>
                        </div>
                    </div>
                </div>
                <header className="header">
                    <div className="bottom-bar">
                        <div className="logo-container">
                            <Link to="/">
                                <img src={logo} alt="Logo" />
                            </Link>
                        </div>
                        <div className="menu-container">
                            <nav className="menu">
                                <ul className={`main-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                                    <li><Link to="/">Homepage</Link></li>
                                    <li><Link to="/products">Products</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                                <div className="mobile-menu-bar" onClick={toggleMobileMenu}>
                                    <div className="hamburger">
                                        <span className="line"></span>
                                        <span className="line"></span>
                                        <span className="line"></span>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
                <div className={`mobile-nav ${isMobileMenuOpen ? 'opened' : ''}`}>
                    <ul className="mobile-menu">
                        <li><Link to="/" onClick={toggleMobileMenu}>Homepage</Link></li>
                        <li><Link to="/products" onClick={toggleMobileMenu}>Products</Link></li>
                        <li><Link to="/about" onClick={toggleMobileMenu}>About</Link></li>
                        <li><Link to="/contact" onClick={toggleMobileMenu}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
