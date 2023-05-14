import React from 'react';
//import hoomans from '../../assets/humans.png';
import comunity from '../../assets/comunity2.png';
import './firstheader.css';

const FirstHeader = () => (
  <div className="seva__header section__padding" id="home">
    <div className="seva__header-content">
      <h1 className="gradient__text">Give back to the Local comumunity and help devolop the city </h1>
      <p>From basic reparirs to expert work we offer all kinds of services through our portal here. Using our web app you not only get cheap competative prices but also help boost the local businesses.</p>
    </div>

    <div className="seva__header-image">
      <img src={comunity} alt='connecting people'/>
    </div>
  </div>
);

export default FirstHeader;
