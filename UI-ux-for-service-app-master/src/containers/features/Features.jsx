import React from 'react';
import Feature from '../../components/orders/Orders';
import './features.css';
/*orders from data base*/
const featuresData = [
  {
    title: 'Babby sitting',/*service name and discription */
    text: 'abc xyz ordered for whole day',
  },
  {
    title: 'Electrical raepair',
    text: 'Instalation of celling fan unit.',
  },
  {
    title: 'Plumbing',
    text: 'Finding the leak in pipeline and fixing',
  },
  {
    title: 'Beauty',
    text: 'Facial and rejuvinating face massage',
  },
];

const Features = () => (
  <div className="seva__features section__padding" id="features">
    <div className="seva__features-heading">
      <h1 className="gradient__text">Your Past Used Services From Our Portal.</h1>
      <p>view full order history</p>
    </div>
    <div className="seva__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
