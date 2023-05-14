import React from 'react';
//import hoomans from '../../assets/humans.png';
import comunity from '../../assets/comunity2.png';
import './header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const categories = [
    {
      id: 1,
      name: 'Cleaning',
    },
    {
      id: 2,
      name: 'Baby Sitting',
    },
    {
      id: 3,
      name: 'Pest Control',
    },
    {
      id: 4,
      name: 'Electrical Repair',
    },
    {
      id: 5,
      name: 'Plumbing',
    },
    {
      id: 6,
      name: 'Beauty',
    },
  ];
  const areas = [
    {
      id: 1,
      name: 'Southampton',
    },
    {
      id: 2,
      name: 'London',
    },
    {
      id: 3,
      name: 'Manchester',
    },
    {
      id: 4,
      name: 'Birmingham',
    },
    {
      id: 5,
      name: 'Edinburgh',
    },
    {
      id: 6,
      name: 'Leeds',
    },
  ];
  
  const handleOnClick = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   username: data.get('username'),
    //   password: data.get('password'),
    // });
    navigate('/userhomesearch');
  };
  
  return (
    <div className="seva__header section__padding" id="home">
      <div className="seva__header-content">
        <h1 className="gradient__text">
          Give back to the Local community and help develop the city{" "}
        </h1>
        <p>
          From basic repairs to expert work we offer all kinds of services
          through our portal here. Using our web app you not only get cheap
          competitive prices but also help boost the local businesses.
        </p>
  
        <div className="seva__header-content__input">
          <select>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <select>
            {areas.map((area) => (
              <option key={area.id} value={area.name}>
                {area.name}
              </option>
            ))}
          </select>
          <button type="button" onClick={handleOnClick}>
            Search
          </button>
        </div>
      </div>
  
      <div className="seva__header-image">
        <img src={comunity} alt="connecting people" />
      </div>
    </div>
  );
}
export default Header;
