import React from 'react';


const Box = ({ imgSrc, title, description }) => (
    <div className="box">
        <div className="left">
            <div className="imgbox">
                <img decoding="async" src={imgSrc} alt={title} />
            </div>
        </div>
        <div className="right">
            <div className="contentbox">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    </div>
);
const AdditionalContentBox = ({ title }) => (
    <div className="box">
        <div className="left">
            <div className="imgbox">
                <img src="https://via.placeholder.com/150" alt={title} />
            </div>
        </div>
        <div className="right">
            <div className="contentbox">
                <h2>{title}</h2>
                <p>Description for {title}</p>
            </div>
        </div>
    </div>
);

const BoxesContainer = () => {
    const boxesData = [
        {
            imgSrc: "https://sabiote.in/wp-content/uploads/2021/07/Logo1.png",
            title: "Introducing Our Disposable Medical Wear Collection",
            description: "Enhance infection control with our premium disposable medical wear. From gowns to drapes, our range prioritizes safety and comfort. Crafted from top-quality materials, our products ensure superior protection for patients and healthcare professionals alike. Ideal for hospitals, clinics, and healthcare facilities, our collection upholds the highest standards of hygiene. Trust in Sabiote Healthcare for quality and reliability in infection prevention. Explore our range today for peace of mind in patient care."
        },
        {
            imgSrc: "https://sabiote.in/wp-content/uploads/2021/07/Logo1.png",
            title: "Discover Our Surgical Consumables",
            description: "Elevate your surgical procedures with our comprehensive range of surgical consumables. Designed to meet the demanding needs of modern healthcare settings, our products ensure precision, reliability, and safety. From pulse lavage to suction tubes and wound care supplies, our collection encompasses all essential consumables required for efficient and successful surgeries. With a focus on quality and innovation, Sabiote Healthcare is your trusted partner for superior surgical outcomes. Explore our range today and experience the difference in surgical excellence."
        },
        {
            imgSrc: "https://sabiote.in/wp-content/uploads/2021/07/Logo1.png",
            title: "Orthopedic Implants & Instruments",
            description: "Explore our extensive collection and discover why Sabiote is the trusted choice for medical supplies worldwide. Experience unmatched reliability, precision, and performance with every product from our portfolio."
        },
        {
            imgSrc: "https://sabiote.in/wp-content/uploads/2021/07/Logo1.png",
            title: "Orthopedic Consumables",
            description: "Orthopedic consumables refer to a wide range of medical products and supplies used in orthopedic procedures and treatments. These consumables play a crucial role in orthopedic surgeries, rehabilitation, and general orthopedic care."
        }
    ];

    return (
        <div className="boxes-container">
            {boxesData.map((box, index) => (
                <Box key={index} {...box} />
            ))}
            {/* <AdditionalContentBox title="Protective Equipment" />
            <AdditionalContentBox title="Surgical Gown" />
            <AdditionalContentBox title="Surgical Drapes" /> */}
        </div>
    );
};

export { Box, BoxesContainer };
