import React from 'react';
import aboutData from '../Home/Main.json';
import { Link } from 'react-router-dom';
import CtaSection from '../CtaSection';

const AboutPage = () => {
  return (
    <>
      <div className="about-bg">
        <div className="about-text-overlay text-center">
          <h1 className="about-title">About Us</h1>
          <p className="about-subtitle">Our Service Details</p>
        </div>
      </div>
      <div>
        <section className="section-about py-6">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                <img
                  src={aboutData?.aboutData?.imageSrc}
                  className="img-fluid rounded shadow-lg myborder"
                  alt="About Our Company"
                />
              </div>
              <div className="col-lg-7 wow fadeIn" data-wow-delay="0.3s">
                <span className="badge badge-custom text-uppercase text-dark eventborder rounded-pill px-4 py-1 mb-3">
                  About Us
                </span>
                <h1 className="title display-4 mb-4">
                  {aboutData?.aboutData?.title}
                </h1>
                <p className="description mb-4">
                  {aboutData?.aboutData?.description}
                </p>
                <div className="features row g-3 text-dark mb-5">
                  {aboutData?.aboutData?.features?.map((feature, index) => (
                    <div
                      key={index}
                      className="feature-item col-md-6 d-flex align-items-center"
                    >
                      <i className={`fas ${feature.icon} me-3`}></i>
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>
                <Link to={'/contact'} className="btn py-3 px-5 rounded-pill">
                  Contact Us<i className="fas fa-arrow-right ps-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="abot py-5">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <h1 className="section-title position-relative text-center mb-5">
                  Traditional & Delicious Food Provide
                </h1>
              </div>
            </div>
            <div className="row py-3">
              <div className="col-lg-4">
                <h1 className="font-weight-bold mb-3 text-center">Our Features</h1>
                <h5 className="text-muted mb-3">
                  Providing exceptional catering services for many years, we
                  pride ourselves on delivering delicious and memorable
                  experiences for every event.
                </h5>
                <p>
                  We offer full catering service with everything from table
                  linens, serving pieces, and servers to make your event a
                  complete success. We provide for every need by including
                  plates, cups, napkins, utensils, beverages, and ice-creams.
                  Also, we provide home food catering for small gatherings at
                  your doorstep. Plus, we deliver daily menu and special weekend
                  menu items for individual needs. So, give us a chance to serve
                  your needs and let us know about your experience.
                </p>
                <Link to={'/contact'} className="btn myborder mt-2">
                  Contact Now
                </Link>
              </div>
              <div className="col-lg-4 p-2 rounded">
                <div className="position-relative h-100 rounded overflow-hidden">
                  <img
                    className="position-absolute w-100 h-75% p-3 eventborder"
                    src="img/asb.jpg"
                    alt="Catering Image"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <h1 className="font-weight-bold text-center mb-3">
                  Our Mission
                </h1>
                <p>
                  Our mission does not end with just creating satisfied
                  customers but extends to bringing delight and appreciation to
                  you as a host and making the event unforgettable and
                  distinctive. This makes us your favorite and builds lifelong
                  relationships and recommendations for us.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-3 ms-4">
                    <i className="fa fa-check me-2"></i>Cheese Burger
                  </li>
                  <li className="mb-3 ms-4">
                    <i className="fa fa-check me-2"></i>Sandwich
                  </li>
                  <li className="mb-3 ms-4">
                    <i className="fa fa-check me-2"></i>Paneer Burger
                  </li>
                  <li className="mb-3 ms-4">
                    <i className="fa fa-check me-2"></i>Special Sweets
                  </li>
                </ul>
                <Link to={'/book'} className="btn myborder mt-2 ms-4">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CtaSection />
    </>
  );
};

export default AboutPage;
