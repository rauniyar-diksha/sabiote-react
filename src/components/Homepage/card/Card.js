import React from 'react';
import './Card.css';
import availableImage from '../../../images/Icon2.png';

const cards = [
  {
    title: 'Available',
    description: 'We’ll do whatever it takes to get what you need, when you need it – delivering great value products that make budgets go further'
  },
  {
    title: 'Dependable',
    description: 'With over 99% first-time fill rates, triple checks on every shipment, and tried-and-tested own brands, you can rely on Sabiote.'
  },
  {
    title: 'Speed',
    description: 'What distinguishes us from other suppliers is our speed of delivery which always matches your expectation'
  }
];

const Card = ({ title, description }) => (
  <div className="card">
    <div className="card-content">
      <div className="card-main">
        <div className="card-image">
          <span className="image-wrap">
            <img src={availableImage} alt={title} />
          </span>
          <div className='wrape-box'>
            <h3 className="card-header">
              <span>{title}</span>
            </h3>
            <div className="card-description">
              <p><span>{description}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CardContainer = () => (
  <div className="card-container">
    {cards.map((card, index) => (
      <Card
        key={index}
        title={card.title}
        description={card.description}
      />
    ))}
  </div>
);

export default CardContainer;
