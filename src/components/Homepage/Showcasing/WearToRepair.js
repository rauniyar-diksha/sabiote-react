import React from 'react';
import './WearToRepair.css';

const WearToRepair = () => {
  const cardContent = [
    {
      title: "Orthopedic Implants & Instruments",
      description: "Orthopedic implants and instruments play a vital role in treating",
      buttonText: "- Learn More",
      buttonLink: "https://sabiote.in/orthopedic-implants-instruments/"
    },
    {
      title: "Orthopedic Implants & Instruments",
      description: "Orthopedic implants and instruments play a vital role in treating",
      buttonText: "- Learn More",
      buttonLink: "https://sabiote.in/orthopedic-implants-instruments/"
    },
    {
      title: "Orthopedic Implants & Instruments",
      description: "Orthopedic implants and instruments play a vital role in treating",
      buttonText: "- Learn More",
      buttonLink: "https://sabiote.in/orthopedic-implants-instruments/"
    },
    {
      title: "Orthopedic Implants & Instruments",
      description: "Orthopedic implants and instruments play a vital role in treating",
      buttonText: "- Learn More",
      buttonLink: "https://sabiote.in/orthopedic-implants-instruments/"
    }
  ];

  const Card = ({ title, description, buttonText, buttonLink }) => (
    <div className="card-box">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={buttonLink}>{buttonText}</a>
    </div>
  );

  return (
    <div className='ware-to-repair-box'>
      <h1>Your Partner in Health, From Wear to Repair</h1>
      <div className="cards-containing-box">
        {cardContent.map((content, index) => (
          <Card
            key={index}
            title={content.title}
            description={content.description}
            buttonText={content.buttonText}
            buttonLink={content.buttonLink}
          />
        ))}
      </div>
    </div>
  );
};

export default WearToRepair;
