import React from 'react';
import { Helmet } from 'react-helmet';
import './AboutUs.css';
import aboutimage from '../../images/about-page.jpg'
import wave from '../../images/wave.svg'; 

const Aboutus = () => {
    return (
        <div className="about-page">
            <Helmet>
                <title>About | Sabiote</title>
            </Helmet>
            <section className="about-section with-bg">
                <div className="about-row">
                    <div className="about-column main-column">
                        <div className="about-text main-text">
                            <h2>Your natural choice for your Surgical Needs</h2>
                        </div>
                    </div>
                    <div className="about-column empty-column"></div>
                </div>
                <div className="et_pb_bottom_inside_divider" style={{ '--wave': `url(${wave})` }}></div>
            </section>

            <section className="about-section">
                <div className="about-row">
                    <div className="about-column full-column">
                        <div className="about-text main-blurb">
                            <p>At Sabiote Healthcare Pvt Ltd, we are driven by a shared passion for innovation and a commitment to transforming healthcare through cutting-edge medical devices. Founded in 2021, our startup brings together a dynamic team of visionaries, scientists, and industry experts dedicated to pioneering solutions that address unmet medical needs.</p>
                        </div>
                    </div>
                </div>

                <div className="about-row">
                    <div className="about-column full-column">
                        <div className="about-text section-header">
                            <h3>What Sets Us Apart</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-section">
                <div className="about-row" id="collab-section">
                    <div className="about-column half-column">
                        <div className="about-blurb">
                            <div className="about-image">
                                <img src={aboutimage} alt="Collaboration for Success" className="animated-image" />
                            </div>
                            <div className="about-description">
                                <h4>Collaboration for Success</h4>
                                <p>We recognize the power of collaboration. By forging partnerships with healthcare professionals, research institutions, and industry leaders, we ensure our products are informed by real-world insights and validated by those on the front lines of patient care.</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-column half-column last-column">
                        <div className="about-blurb">
                            <div className="about-image">
                                <img src={aboutimage} alt="Innovation at Every Step" className="animated-image" />
                            </div>
                            <div className="about-description">
                                <h4>Innovation at Every Step</h4>
                                <p>From concept to creation, we embed innovation into every facet of our work. Our startup culture fosters creativity, curiosity, and a relentless pursuit of excellence. We understand the challenges faced by healthcare providers, and we’re here to provide solutions that make a meaningful impact.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-row">
                    <div className="about-column full-column">
                        <div className="about-text section-header">
                            <h3>Commitment to Quality</h3>
                        </div>
                    </div>
                </div>

                <div className="about-row">
                    <div className="about-column full-column">
                        <div className="about-slider">
                            <div className="slide">
                                <div className="slider-content">
                                    <div className="slide-image">
                                        <img src={aboutimage} alt="Setting New Standards" />
                                    </div>
                                    <div className="slide-description">
                                        <h3><span className="highlight-text">Setting New Standards</span></h3>
                                        <p>Quality is non-negotiable. Our startup is committed to adhering to the highest standards of manufacturing, testing, and regulatory compliance. Each medical device that bears the Sabiote mark undergoes rigorous scrutiny to ensure it meets and exceeds the expectations of healthcare providers and, ultimately, improves patient outcomes.</p>
                                        <h3><span className="highlight-text">Join Us on the Journey</span></h3>
                                        <p>As we embark on this exciting journey, we invite you to be a part of our story. Whether you’re a healthcare professional seeking innovative solutions, a potential partner looking to collaborate, or someone inspired by the intersection of technology and healthcare — join us as we revolutionize the medical device landscape</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-accordion" id="contact-accordion">
                            <div className="toggle open-toggle">
                                <h5>Contact Us</h5>
                                <div className="toggle-content">
                                    <p>Ready to explore the future of healthcare with Sabiote Healthcare Pvt Ltd? Reach out to us today. We look forward to connecting with you.</p>
                                    <p className="center-text">Thank you for considering Sabiote Healthcare Pvt Ltd as your partner in advancing medical technology and improving lives.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Aboutus;
