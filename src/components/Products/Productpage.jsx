import React from 'react';
import { Helmet } from 'react-helmet';
import topimage from '../../images/Logo.png';
import '../Products/productspage.css'
import { Box } from './Box';
import { BoxesContainer } from './Box';

const Productpage = () => {
    return (
        <>
            <Helmet>
                <title>Products | Sabiote</title>
            </Helmet>
            <div className='hero-ban'>
                <div className="products-hero-banner">
                    <div className="container">
                        <div className="left">
                            <div className="imgbox">
                                <img decoding="async" src={topimage} alt="Logo" />
                            </div>
                        </div>
                        <div className="right">
                            <div className="contentbox">
                                <h2>Discover Our Comprehensive Healthcare Solutions</h2>
                                <p>At Sabiote Healthcare, we offer an extensive range of over 100 meticulously crafted healthcare products. From drapes and gowns to orthopedic implants & surgical consumables, our diverse portfolio caters to all clinical needs. Grounded in values like excellence, innovation, integrity, and passion, we're committed to exceeding customer expectations. Our products reflect our dedication to quality and innovation, ensuring optimal patient care. Join us in our mission to revolutionize healthcare delivery worldwide.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='both-wrap'>
                <Box />
                <BoxesContainer />
            </div>
        </>
    );
};

export default Productpage;
