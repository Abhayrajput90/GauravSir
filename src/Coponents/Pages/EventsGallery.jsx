import React, { useState, useEffect } from 'react';
import eventsData from '../Home/Main.json';
import CtaSection from '../CtaSection';

const EventsGallery = () => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState('All Events');

  useEffect(() => {
    setData(eventsData.events);
  }, []);

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  const filteredData = activeTab === 'All Events' ? data : data.filter(event => event.category === activeTab);

  return (
    <>
    <div className="about-bg">
        <div className="about-text-overlay text-center">
          <h1 className="about-title">Our Events</h1>
          <p className="about-subtitle">See Events Gallery</p>
        </div>
      </div>
    <div className="container-fluid event py-6">
      <div className="container">
        <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
          <small className="d-inline-block fw-bold text-dark text-uppercase bg-light eventborder rounded-pill px-4 py-1 mb-3">Latest Events</small>
          <h1 className="display-5 mb-5">Our Social & Professional Events Gallery</h1>
        </div>
        <div className="tab-className text-center">
          <ul className="nav nav-pills d-inline-flex justify-content-center flex-wrap mb-5 wow bounceInUp" data-wow-delay="0.1s">
            {['All Events', 'Wedding', 'Corporate', 'Cocktail', 'Buffet'].map((category, index) => (
              <li key={index} className="nav-item col-6 col-md-auto p-2">
                <a
                  className={`d-flex text-decoration-none mx-2 py-2 rounded-pill eventborder ${activeTab === category ? 'active-tab' : 'bg-light'}`}
                  onClick={() => handleTabClick(category)}
                  href="#!"
                >
                  <span className="text-dark" style={{ width: '150px' }}>{category}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="row g-4">
          {filteredData.map((event, index) => (
            <div key={index} className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay={`${0.1 * (index + 1)}s`}>
              <div className="event-img position-relative" style={{ height: '300px' }}>
                <img className="img-fluid rounded w-100 h-100 myborder" src={event.img} alt={event.category} />
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
    <CtaSection/>
    </>
  );
};

export default EventsGallery;
