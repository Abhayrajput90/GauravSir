import React from "react"
import { About } from "./Home/About"
import { Faqt } from "./Home/Faqt";
import Services from "./Home/Services";
import Gallery from "./Home/Gallery";
import Menu from "./Home/Menu";

function Home() {
    const aboutData = {
        imageSrc: 'img/about.jpg',
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
    
      const videoUrl = 'https://www.youtube.com/embed/DWRcNpR6Kdc';


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

            <div className="container-fluid team py-6">
                <div className="container">
                    <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Our Team</small>
                        <h1 className="display-5 mb-5">We have experienced chef Team</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow bounceInUp" data-wow-delay="0.1s">
                            <div className="team-item rounded">
                                <img className="img-fluid rounded-top " src="img/team-1.jpg" alt="" />
                                <div className="team-content text-center py-3 bg-dark rounded-bottom">
                                    <h4 className="text-primary">Henry</h4>
                                    <p className="text-white mb-0">Decoration Chef</p>
                                </div>
                                <div className="team-icon d-flex flex-column justify-content-center m-4">
                                    <a className="share btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fas fa-share-alt"></i></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow bounceInUp" data-wow-delay="0.3s">
                            <div className="team-item rounded">
                                <img className="img-fluid rounded-top " src="img/team-2.jpg" alt="" />
                                <div className="team-content text-center py-3 bg-dark rounded-bottom">
                                    <h4 className="text-primary">Jemes Born</h4>
                                    <p className="text-white mb-0">Executive Chef</p>
                                </div>
                                <div className="team-icon d-flex flex-column justify-content-center m-4">
                                    <a className="share btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fas fa-share-alt"></i></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow bounceInUp" data-wow-delay="0.5s">
                            <div className="team-item rounded">
                                <img className="img-fluid rounded-top " src="img/team-3.jpg" alt="" />
                                <div className="team-content text-center py-3 bg-dark rounded-bottom">
                                    <h4 className="text-primary">Martin Hill</h4>
                                    <p className="text-white mb-0">Kitchen Porter</p>
                                </div>
                                <div className="team-icon d-flex flex-column justify-content-center m-4">
                                    <a className="share btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fas fa-share-alt"></i></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow bounceInUp" data-wow-delay="0.7s">
                            <div className="team-item rounded">
                                <img className="img-fluid rounded-top " src="img/team-4.jpg" alt="" />
                                <div className="team-content text-center py-3 bg-dark rounded-bottom">
                                    <h4 className="text-primary">Adam Smith</h4>
                                    <p className="text-white mb-0">Head Chef</p>
                                </div>
                                <div className="team-icon d-flex flex-column justify-content-center m-4">
                                    <a className="share btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fas fa-share-alt"></i></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-6">
                <div className="container">
                    <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Testimonial</small>
                        <h1 className="display-5 mb-5">What Our Customers says!</h1>
                    </div>
                    <div className="owl-carousel owl-theme testimonial-carousel testimonial-carousel-1 mb-4 wow bounceInUp" data-wow-delay="0.1s">
                        <div className="testimonial-item rounded bg-light">
                            <div className="d-flex mb-3">
                                <img src="img/testimonial-1.jpg" className="img-fluid rounded-circle flex-shrink-0" alt="" />
                                <div className="position-absolute" style={{'top': '15px', 'right': '20px'}}>
                                    <i className="fa fa-quote-right fa-2x"></i>
                                </div>
                                <div className="ps-3 my-auto">
                                    <h4 className="mb-0">Person Name</h4>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <div className="d-flex">
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                </div>
                                <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="testimonial-item rounded bg-light">
                            <div className="d-flex mb-3">
                                <img src="img/testimonial-2.jpg" className="img-fluid rounded-circle flex-shrink-0" alt="" />
                                <div className="position-absolute" style={{'top': '15px', 'right': '20px'}}>
                                    <i className="fa fa-quote-right fa-2x"></i>
                                </div>
                                <div className="ps-3 my-auto">
                                    <h4 className="mb-0">Person Name</h4>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <div className="d-flex">
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                </div>
                                <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="testimonial-item rounded bg-light">
                            <div className="d-flex mb-3">
                                <img src="img/testimonial-3.jpg" className="img-fluid rounded-circle flex-shrink-0" alt="" />
                                <div className="position-absolute" style={{'top': '15px', 'right': '20px'}}>
                                    <i className="fa fa-quote-right fa-2x"></i>
                                </div>
                                <div className="ps-3 my-auto">
                                    <h4 className="mb-0">Person Name</h4>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <div className="d-flex">
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                </div>
                                <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="testimonial-item rounded bg-light">
                            <div className="d-flex mb-3">
                                <img src="img/testimonial-4.jpg" className="img-fluid rounded-circle flex-shrink-0" alt="" />
                                <div className="position-absolute" style={{'top': '15px', 'right': '20px'}}>
                                    <i className="fa fa-quote-right fa-2x"></i>
                                </div>
                                <div className="ps-3 my-auto">
                                    <h4 className="mb-0">Person Name</h4>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <div className="d-flex">
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                </div>
                                <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className="owl-carousel testimonial-carousel testimonial-carousel-2 wow bounceInUp" data-wow-delay="0.3s">
                        <div className="testimonial-item rounded bg-light">
                            <div className="d-flex mb-3">
                                <img src="img/testimonial-1.jpg" className="img-fluid rounded-circle flex-shrink-0" alt="" />
                                <div className="position-absolute" style={{'top': '15px', 'right': '20px'}}>
                                    <i className="fa fa-quote-right fa-2x"></i>
                                </div>
                                <div className="ps-3 my-auto">
                                    <h4 className="mb-0">Person Name</h4>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <div className="d-flex">
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                </div>
                                <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="testimonial-item rounded bg-light">
                            <div className="d-flex mb-3">
                                <img src="img/testimonial-2.jpg" className="img-fluid rounded-circle flex-shrink-0" alt="" />
                                <div className="position-absolute" style={{'top': '15px', 'right': '20px'}}>
                                    <i className="fa fa-quote-right fa-2x"></i>
                                </div>
                                <div className="ps-3 my-auto">
                                    <h4 className="mb-0">Person Name</h4>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <div className="d-flex">
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                </div>
                                <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="testimonial-item rounded bg-light">
                            <div className="d-flex mb-3">
                                <img src="img/testimonial-3.jpg" className="img-fluid rounded-circle flex-shrink-0" alt="" />
                                <div className="position-absolute" style={{'top': '15px', 'right': '20px'}}>
                                    <i className="fa fa-quote-right fa-2x"></i>
                                </div>
                                <div className="ps-3 my-auto">
                                    <h4 className="mb-0">Person Name</h4>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <div className="d-flex">
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                </div>
                                <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="testimonial-item rounded bg-light">
                            <div className="d-flex mb-3">
                                <img src="img/testimonial-4.jpg" className="img-fluid rounded-circle flex-shrink-0" alt="" />
                                <div className="position-absolute" style={{'top': '15px', 'right': '20px'}}>
                                    <i className="fa fa-quote-right fa-2x"></i>
                                </div>
                                <div className="ps-3 my-auto">
                                    <h4 className="mb-0">Person Name</h4>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <div className="d-flex">
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                </div>
                                <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid blog py-6">
                <div className="container">
                    <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Our Blog</small>
                        <h1 className="display-5 mb-5">Be First Who Read News</h1>
                    </div>
                    <div className="row gx-4 justify-content-center">
                        <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s">
                            <div className="blog-item">
                                <div className="overflow-hidden rounded">
                                    <img src="img/blog-1.jpg" className="img-fluid w-100" alt="" />
                                </div>
                                <div className="blog-content mx-4 d-flex rounded bg-light">
                                    <div className="text-dark bg-primary rounded-start">
                                        <div className="h-100 p-3 d-flex flex-column justify-content-center text-center">
                                            <p className="fw-bold mb-0">16</p>
                                            <p className="fw-bold mb-0">Sep</p>
                                        </div>
                                    </div>
                                    <a href="#" className="h5 lh-base my-auto h-100 p-3">How to get more test in your food from</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.3s">
                            <div className="blog-item">
                                <div className="overflow-hidden rounded">
                                    <img src="img/blog-2.jpg" className="img-fluid w-100" alt="" />
                                </div>
                                <div className="blog-content mx-4 d-flex rounded bg-light">
                                    <div className="text-dark bg-primary rounded-start">
                                        <div className="h-100 p-3 d-flex flex-column justify-content-center text-center">
                                            <p className="fw-bold mb-0">16</p>
                                            <p className="fw-bold mb-0">Sep</p>
                                        </div>
                                    </div>
                                    <a href="#" className="h5 lh-base my-auto h-100 p-3">How to get more test in your food from</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.5s">
                            <div className="blog-item">
                                <div className="overflow-hidden rounded">
                                    <img src="img/blog-3.jpg" className="img-fluid w-100" alt="" />
                                </div>
                                <div className="blog-content mx-4 d-flex rounded bg-light">
                                    <div className="text-dark bg-primary rounded-start">
                                        <div className="h-100 p-3 d-flex flex-column justify-content-center text-center">
                                            <p className="fw-bold mb-0">16</p>
                                            <p className="fw-bold mb-0">Sep</p>
                                        </div>
                                    </div>
                                    <a href="#" className="h5 lh-base my-auto h-100 p-3">How to get more test in your food from</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
