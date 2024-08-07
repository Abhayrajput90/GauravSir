import React from 'react';
import { Link } from 'react-router-dom';
// import './CtaSection.css'; // You will create this CSS file next

const CtaSection = () => {
  return (
    <section className="bsb-cta-2 pt-1 wow bounceInUp">
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
                {/* <h2 className="h5 mb-4 text-black text-uppercase fw-bold">Our Services & Expertise</h2> */}
                <h2 className="display-4 text-black mb-5">Our Services & Expertise</h2>
                <p>We are branded for providing 100% vegetarian food with a wide range of food categories. Whether it be Indian, Chinese, Punjabi, Rajasthani, South Indian, Marathi, Gujarati, Italian etc. 
                    We have Specialized & Experienced Staff having more than decade’s experience in handling Wedding, Anniversaries, Ring Ceremonies, Mehandi Parties, Sangeet Sandhya, Birthday Parties, Inaugurations, corporate launch, events and countless other occasions. 
                    If you are looking for a trustworthy caterer, give us an opportunity to server you. 
                    You can contact us on the below details: 
                    </p>
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