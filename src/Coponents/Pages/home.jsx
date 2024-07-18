import React from "react"
import { About } from "../Home/About"
import { Faqt } from "../Home/Faqt";
import Services from "../Home/Services";
import Gallery from "../Home/Gallery";
import Menu from "../Home/Menu";
import HomeForm from "../Home/HomeForm";
import { Link } from "react-router-dom";

function Home() {


    return (
        <>
            <div className="container-fluid bg-light py-6 my-2 mt-0">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-7 col-md-12">
                            <small className="d-inline-block fw-bold text-dark text-uppercase bg-light eventborder rounded-pill px-4 py-1 mb-4 animated bounceInDown">Welcome to IndoreCaterers</small>
                            <h1 className="display-1 mb-4 animated bounceInDown">Book <span className=" ">Indore</span>Caterers For Your Dream Event</h1>
                            <Link to={'/book'} className="btn  border-0 rounded-pill py-3 px-4 px-md-5 me-4 animated bounceInLeft">Book Now</Link>
                            <Link to={'/about'} className="btn  border-0 rounded-pill py-3 px-4 px-md-5 animated bounceInLeft">Know More</Link>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <img src="img/hero.png" className="img-fluid rounded animated zoomIn" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <About />
            <Services />
            <Faqt />
            <Gallery />
            <Menu />
            <HomeForm/>
        </>
    )
}

export default Home
