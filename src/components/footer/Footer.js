// src/components/Footer.js

import React from 'react';
import './Footer.css';
import footerlogo from '../../images/footerlogo.png';

const Footer = () => {
    return (
        <footer className="footer-content">
            <div className="footer container">
                <div className="footer-cols-wrapper">
                    <FooterColumns />
                    <FooterCorporate />
                </div>
                <FooterContact />
            </div>
            <FooterBottom />
        </footer>
    );
};

const FooterColumns = () => (
    <div className="footer-columns">
        <FooterLogo />
        <FooterMenu />
        <FooterCategories />
    </div>
);

const FooterLogo = () => (
    <div className="footer-col">
        <div className="footer-logo">
            <img src={footerlogo} alt="Footer Logo" />
        </div>
        <ul className='adress-box'>
            <li>Factory Addresses</li>
            <li className='noida'>Noida :  <strong>H-212, First Floor, Sec-63, NOIDA-201301</strong></li>
            <li>Morena : <strong>coming soon</strong></li>
            <li>Ahmedabad : <strong>coming soon</strong></li>
        </ul>
    </div>
);

const FooterMenu = () => (
    <div className="footer-col">
        <h4 className="title">Menu</h4>
        <ul className="menu">
            <li className="menu-item"><a href="#">Home</a></li>
            <li className="menu-item"><a href="/product/products.html">Products</a></li>
            <li className="menu-item"><a href="/About-us/about.html">About</a></li>
            <li className="menu-item"><a href="/contact-us/contactus.html">Contact</a></li>
        </ul>
    </div>
);

const FooterCategories = () => (
    <div className="footer-col">
        <h4 className="title">Categories</h4>
        <ul className="menu">
            <li className="menu-item"><a href="#">Medical Wear</a></li>
            <li className="menu-item"><a href="#">Orthopedic Implants & Instruments</a></li>
            <li className="menu-item"><a href="#">Surgical Consumables</a></li>
            <li className="menu-item"><a href="#">Orthopedic Consumables</a></li>
        </ul>
    </div>
);

const FooterCorporate = () => (
    <div className="footer-corporate">
        <p>Corporate Office: B-23, First Floor, DDA SHED, Okhla Industrial Area, Phase 2. New Delhi-110020</p>
    </div>
);

const FooterContact = () => (
    <div className="footer-col-wrapper">
        <div className="footer-col">
            <h4 className="title">Contact Me</h4>
            <div className="contact-form">
                <ContactField label="Name" type="text" name="name" />
                <ContactField label="Email" type="email" name="email" />
                <ContactField label="Message" type="textarea" name="message" />
                <div className="submit">
                    <input id="submit-btn" className="ninja-submit-btn" type="button" value="Submit" />
                </div>
            </div>
        </div>
    </div>
);

const ContactField = ({ label, type, name }) => (
    <div className="field-name required menu-item">
        <label className="label" htmlFor={name}>
            <span>{label}</span>
            <span className="ninja-forms-req-symbol">*</span>
        </label>
        <div className="control">
            {type === "textarea" ? (
                <textarea id={name} name={name} required></textarea>
            ) : (
                <input type={type} id={name} name={name} className="input-text required-entry" data-validate="{required:true}" aria-required="true" />
            )}
        </div>
    </div>
);

const FooterBottom = () => (
    <div id="footer-bottom">
        <div className="container clearfix">
            <div id="footer-info">Developed by UdeyTech</div>
        </div>
    </div>
);

export default Footer;
