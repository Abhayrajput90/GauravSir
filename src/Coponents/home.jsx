import React from "react"
import { About } from "./Home/About"
import { Faqt } from "./Home/Faqt";
import Services from "./Home/Services";
import Gallery from "./Home/Gallery";
import Menu from "./Home/Menu";

function Home() {
    const aboutData = {
        imageSrc: 'img/About.jpg',
        title: 'Trusted by 200+ Satisfied Clients',
        description: 'We are dedicated to providing top-notch services to our clients. Our team ensures fresh and fast food delivery, exceptional 24/7 customer support, and easy customization options to cater to your needs. Experience our delicious deals for a truly satisfying meal.',
        features: [
          { icon: 'fa-truck', text: 'Fresh and Fast Food Delivery' },
          { icon: 'fa-headset', text: '24/7 Customer Support' },
          { icon: 'fa-cogs', text: 'Easy Customization Options' },
          { icon: 'fa-utensils', text: 'Delicious Deals for Delicious Meals' },
        ],
        aboutLink: 'about.html',
      };

      const stats = [
        { icon: 'fa-users', count: 689, label: 'Happy Customers' },
        { icon: 'fa-users-cog', count: 107, label: 'Expert Chefs' },
        { icon: 'fa-check', count: 253, label: 'Events Complete' },
      ];
    
      const videoUrl = '/video/About.mp4';


    return (
        <>
            <div className="container-fluid bg-light py-6 my-6 mt-0">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-7 col-md-12">
                            <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-4 animated bounceInDown">Welcome to CaterServ</small>
                            <h1 className="display-1 mb-4 animated bounceInDown">Book <span className="text-primary">Cater</span>Serv For Your Dream Event</h1>
                            <a href="" className="btn btn-primary border-0 rounded-pill py-3 px-4 px-md-5 me-4 animated bounceInLeft">Book Now</a>
                            <a href="" className="btn btn-primary border-0 rounded-pill py-3 px-4 px-md-5 animated bounceInLeft">Know More</a>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <img src="img/hero.png" className="img-fluid rounded animated zoomIn" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <About {...aboutData}/>
            <Faqt stats={stats} videoUrl={videoUrl}/>
            <Services/>
            <Gallery/>
            <Menu/>

            <div className="container-fluid contact py-6 wow bounceInUp" data-wow-delay="0.1s">
                <div className="container">
        <div className="row g-0">
                        <div className="col-1">
                            <img src="img/background-site.jpg" className="img-fluid h-100 w-100 rounded-start" style={{'objectFit': 'cover', 'opacity': '0.7'}} alt="" />
                        </div>
                        <div className="col-10">
                            <div className="border-bottom border-top border-primary bg-light py-5 px-4">
                                <div className="text-center">
                                    <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Book Us</small>
                                    <h1 className="display-5 mb-5">Where you want Our Services</h1>
                                </div>
                                <div className="row g-4 form">
                                    <div className="col-lg-4 col-md-6">
                                        <select className="form-select border-primary p-2" aria-label="Default select example">
                                            <option defaultValue>Select Country</option>
                                            <option value="1">USA</option>
                                            <option value="2">UK</option>
                                            <option value="3">India</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <select className="form-select border-primary p-2" aria-label="Default select example">
                                            <option defaultValue>Select City</option>
                                            <option value="1">Depend On Country</option>
                                            <option value="2">UK</option>
                                            <option value="3">India</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <select className="form-select border-primary p-2" aria-label="Default select example">
                                            <option defaultValue>Select Palace</option>
                                            <option value="1">Depend On Country</option>
                                            <option value="2">UK</option>
                                            <option value="3">India</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <select className="form-select border-primary p-2" aria-label="Default select example">
                                            <option defaultValue>Small Event</option>
                                            <option value="1">Event Type</option>
                                            <option value="2">Big Event</option>
                                            <option value="3">Small Event</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <select className="form-select border-primary p-2" aria-label="Default select example">
                                            <option defaultValue>No. Of Palace</option>
                                            <option value="1">100-200</option>
                                            <option value="2">300-400</option>
                                            <option value="3">500-600</option>
                                            <option value="4">700-800</option>
                                            <option value="5">900-1000</option>
                                            <option value="6">1000+</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <select className="form-select border-primary p-2" aria-label="Default select example">
                                            <option defaultValue>Vegetarian</option>
                                            <option value="1">Vegetarian</option>
                                            <option value="2">Non Vegetarian</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <input type="mobile" className="form-control border-primary p-2" placeholder="Your Contact No." />
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <input type="date" className="form-control border-primary p-2" placeholder="Select Date" />
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <input type="email" className="form-control border-primary p-2" placeholder="Enter Your Email" />
                                    </div>
                                    <div className="col-12 text-center">
                                        <button type="submit" className="btn btn-primary px-5 py-3 rounded-pill">Submit Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1">
                            <img src="img/background-site.jpg" className="img-fluid h-100 w-100 rounded-end" style={{'objectFit': 'cover', 'opacity': '0.7'}} alt="" />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home
