import React from 'react';
/*add images of services*/
import { cleaning, babbysitting, pestcontrol, plumbing, electrical, beauty } from './imports';
import './serviceslogo.css';

const Serviceslogo = () => (
  <div className="seva__brand section__padding">
    <div>
      <img src={cleaning} alt='cleaning'/>
    </div>
    <div>
      <img src={babbysitting} alt='babbysitting'/>
    </div>
    <div>
      <img src={pestcontrol} alt='pestcontrol'/>
    </div>
    <div>
      <img src={plumbing} alt='plumbing'/>
    </div>
    <div>
      <img src={electrical} alt='electrical'/>
    </div>
    <div>
      <img src={beauty} alt='beauty'/>
    </div>
  </div>
);

export default Serviceslogo;
