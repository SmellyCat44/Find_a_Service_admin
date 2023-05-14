import React from 'react';
import Orders from '../../components/orders/Orders';
import './services.css';
/*check how to add comments from a data base after clicking view more */
const Services = () => (
  <div className="seva__services section__margin" id="wseva">
    <div className="seva__services-heading">
      <h1 className="gradient__text">Scouting Services that justify your needs</h1>
      <p>View more comments</p>
    </div>
    <div className="seva__services-container">
      <Orders title="Babby Sitting" text="Due to the inflation all members of our family had to start working to keep the house running, babby sitting service provided by a local company helped us not worry about our babby while at work" />
      <Orders title="Pest Control" text="blah blah blah asdkja asjdha kjans djkahd andabndia kna idhas naisjh asid nhauidh aid nadihui hadnai duhai nasiudha dajd nasidh" />
      <Orders title="Beuty" text="puggdsfn ashdba jhdka dasjjdk hadkjs ad ahsdjk ha dasjah djka ajhsdhg ajkd abaiudh ada" />
    </div>
  </div>
);

export default Services;
