import React from 'react'

export const About = ({ imageSrc, title, description, features, aboutLink, }) => {
  return (
    <div>
        <section className="section-about py-6">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <img src={imageSrc} className="img-fluid rounded shadow-lg" alt="About Our Company" />
          </div>
          <div className="col-lg-7 wow fadeIn" data-wow-delay="0.3s">
            <span className="badge badge-custom text-uppercase bg-primary text-white rounded-pill px-4 py-1 mb-3">About Us</span>
            <h1 className="title display-4 mb-4">{title}</h1>
            <p className="description mb-4">{description}</p>
            <div className="features row g-3 text-dark mb-5">
              {features.map((feature, index) => (
                <div key={index} className="feature-item col-md-6 d-flex align-items-center">
                  <i className={`icon fas ${feature.icon} text-primary me-3`}></i>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
            <a href={aboutLink} className="btn btn-primary py-3 px-5 rounded-pill">
              Learn More<i className="fas fa-arrow-right ps-2"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About