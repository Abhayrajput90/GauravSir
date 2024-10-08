import React from 'react';
import aboutData from './Main.json';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <div>
      <section className="section-about py-6 my-20">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
              <img 
                src={aboutData?.aboutData?.imageSrc} 
                className="img-fluid rounded shadow-lg myborder" 
                alt="About Our Company" 
              />
            </div>
            <div className="col-lg-7 wow fadeIn" data-wow-delay="0.3s">
              <span className="badge badge-custom text-uppercase text-dark  eventborder rounded-pill px-4 py-1 mb-3">About Us</span>
              <h1 className="title display-4 mb-4">{aboutData.aboutData.title}</h1>
              <p className="description mb-4">{aboutData.aboutData.description}</p>
              <div className="features row g-3 text-dark mb-5">
                {aboutData?.aboutData?.features?.map((feature, index) => (
                  <div key={index} className="feature-item col-md-6 d-flex align-items-center">
                    <i className={`icon fas ${feature.icon} me-3`}></i>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
              <Link to={"/about"} className="btn py-3 px-5 rounded-pill">
                Learn More<i className="fas fa-arrow-right ps-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
