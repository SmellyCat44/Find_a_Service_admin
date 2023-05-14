import React from 'react';
import './orders.css';

const Orders = ({ title, text }) => (
  <div className="seva__features-container__feature">
    <div className="seva__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="seva__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Orders;
