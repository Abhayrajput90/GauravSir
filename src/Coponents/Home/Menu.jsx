import React, { useState, useEffect } from 'react';
import menuData from './Main.json';

const Menu = () => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState('Starter');

  useEffect(() => {
    // Load data from the JSON file
    setData(menuData.menu);
  }, []);

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  const filteredData = data.filter(item => item.category === activeTab);

  return (
    <div className="container-fluid menu bg-light py-6 my-6">
      <div className="container">
        <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
          <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border   rounded-pill px-4 py-1 mb-3">Our Menu</small>
          <h1 className="display-5 mb-5">Most Popular Food in the World</h1>
        </div>
        <div className="tab-className text-center">
          <ul className="nav nav-pills d-inline-flex justify-content-center mb-5 wow bounceInUp" data-wow-delay="0.1s">
            {['Starter', 'Main Course', 'Drinks', 'Offers', 'Our Special'].map((category, index) => (
              <li key={index} className="nav-item p-2">
                <a
                  className={`d-flex text-decoration-none py-2 mx-2 border   bg-white rounded-pill ${activeTab === category ? 'active' : ''}`}
                  onClick={() => handleTabClick(category)}
                  href="#!"
                >
                  <span className="text-dark" style={{ 'width': '150px' }}>{category}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="row g-4">
          {filteredData.map((item, index) => (
            <div key={index} className="col-lg-6 wow bounceInUp" data-wow-delay={`${0.1 * (index + 1)}s`}>
              <div className="menu-item d-flex align-items-center">
                <img className="flex-shrink-0 img-fluid rounded-circle" src={item.img} alt={item.name} />
                <div className="w-100 d-flex flex-column text-start ps-4">
                  <div className="d-flex justify-content-between border-bottom   pb-2 mb-2">
                    <h4>{item.name}</h4>
                    <h4 className=" ">{item.price}</h4>
                  </div>
                  <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
