import React, { useState, useEffect } from 'react';
import eventsData from './Main.json';

const Gallery = () => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState('All Events');

  useEffect(() => {
    // Load data from the JSON file
    setData(eventsData.events);
  }, []);

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  const filteredData = activeTab === 'All Events' ? data : data.filter(event => event.category === activeTab);

  return (
    <div className="container-fluid event py-6">
      <div className="container">
        <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
          <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Latest Events</small>
          <h1 className="display-5 mb-5">Our Social & Professional Events Gallery</h1>
        </div>
        <div className="tab-className text-center">
          <ul className="nav nav-pills d-inline-flex justify-content-center mb-5 wow bounceInUp" data-wow-delay="0.1s">
            {['All Events', 'Wedding', 'Corporate', 'Cocktail', 'Buffet'].map((category, index) => (
              <li key={index} className="nav-item p-2">
                <a
                  className={`d-flex mx-2 py-2 border border-primary bg-light rounded-pill ${activeTab === category ? 'active' : ''}`}
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
          {filteredData.map((event, index) => (
            <div key={index} className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay={`${0.1 * (index + 1)}s`}>
              <div className="event-img position-relative" style={{ height: '300px' }}>
                <img className="img-fluid rounded w-100 h-100" src={event.img} alt={event.category} />
                <div className="event-overlay d-flex flex-column p-4">
                  <h4 className="me-auto">{event.category}</h4>
                  <a href={event.img} data-lightbox={event.category.toLowerCase()} className="my-auto"><i className="fas fa-search-plus text-dark fa-2x"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
