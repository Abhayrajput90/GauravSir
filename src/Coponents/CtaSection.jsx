import React from 'react';
import { Link } from 'react-router-dom';
// import './CtaSection.css'; // You will create this CSS file next

const CtaSection = () => {
  return (
    <section className="bsb-cta-2 pt-5 wow bounceInUp">
      <div className="">
        <div 
          className="card border-0 rounded-3 overflow-hidden staimg text-center bsb-overlay" 
          style={{ 
            backgroundColor: '#eedcc017',  
          }}
        >
          <div className="card-body pt-5 pb-5 ">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-md-10 col-xl-8 col-xxl-7">
                <h2 className="h5 mb-4 text-black text-uppercase fw-bold">Our Services & Expertise</h2>
                <h2 className="display-4 text-black mb-5">We provide exceptional catering services with delicious and unique dishes for all occasions.</h2>
                <Link to={'/book'} className="btn btn-white bsb-btn-3xl rounded mb-0 text-nowrap">Book Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
