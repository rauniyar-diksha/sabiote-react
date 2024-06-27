import React from 'react';
import './Showcasing.css';
import kneeODrape from '../../../images/Femoral-angiography-drape.jpg'
import surgicalGown from '../../../images/Orthopedic.jpg';
import hipUDrape from '../../../images/sterile-drapes.jpg';

const ShowcaseItem = ({ image, title, description, link }) => (
    <div className="showcase-item">
        <div className="showcase-image">
            <img src={image} alt={title} />
        </div>
        <div className="showcase-content">
            <h4>{title}</h4>
            <p>{description}</p>
            <div className='learn-more-box'>
            <a href={link} className="showcase-button">Learn more</a>
            </div>
        </div>
    </div>
);

const Showcasing = () => {
    const items = [
        {
            image: kneeODrape,
            title: 'Knee O Drape',
            description: 'Optimize knee surgeries with our specially crafted Knee O Drape tailored for orthopedic procedures.',
            link: '#'
        },
        {
            image: surgicalGown,
            title: 'Surgical Gown',
            description: 'A surgical gown is a protective garment worn by medical professionals in the operating room.',
            link: '#'
        },
        {
            image: hipUDrape,
            title: 'Hip U Drape',
            description: 'Optimize surgical efficiency and patient safety with our Hip U Drape, tailored for hip surgeries.',
            link: '#'
        }
    ];

    return (
        <>
        <div className='showing-casing-box'>
            <h2 style={{ textAlign: 'center' }}><strong>Prime Picks: Showcasing Our Top-tier&nbsp;Products</strong></h2>
            <div className="showcasing-container">
                {items.map((item, index) => (
                    <ShowcaseItem
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        link={item.link}
                    />
                ))}
            </div>
            </div>
        </>
    );
};

export default Showcasing;
