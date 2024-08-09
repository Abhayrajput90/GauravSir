import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <div className="container-fluid nav-bar">
        <div className="container">
          <nav className="navbar navbar-light navbar-expand-lg">
            <Link to="/" className="navbar-brand">
              <img className="WebLogo" src="/public/img/IndoreCaterers.png" alt="" />
            </Link>
            <button
              className="navbar-toggler py-2 px-3"
              type="button"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded={!isCollapsed}
              aria-label="Toggle navigation"
              onClick={toggleNavbar}
            >
              <span className="fa fa-bars"></span>
            </button>
            <div
              className={`collapse visible navbar-collapse ${!isCollapsed ? "show" : ""}`}
              id="navbarCollapse"
            >
              <div className="navbar-nav mx-auto">
                <Link to="/" className={`nav-item nav-link ${location.pathname === "/" ? "active" : ""}`} onClick={toggleNavbar}>
                  Home
                </Link>
                <Link to="/about" className={`nav-item nav-link ${location.pathname === "/about" ? "active" : ""}`} onClick={toggleNavbar}>
                  About
                </Link>
                <Link to="/services" className={`nav-item nav-link ${location.pathname === "/services" ? "active" : ""}`} onClick={toggleNavbar}>
                  Services
                </Link>
                <Link to="/events" className={`nav-item nav-link ${location.pathname === "/events" ? "active" : ""}`} onClick={toggleNavbar}>
                  Events
                </Link>
                <Link to="/menu" className={`nav-item nav-link ${location.pathname === "/menu" ? "active" : ""}`} onClick={toggleNavbar}>
                  Menu
                </Link>
                <Link to="/book" className={`nav-item nav-link ${location.pathname === "/book" ? "active" : ""}`} onClick={toggleNavbar}>
                  Booking
                </Link>
                <Link to="/contact" className={`nav-item nav-link ${location.pathname === "/contact" ? "active" : ""}`} onClick={toggleNavbar}>
                  Contact
                </Link>
              </div>
              <a
                href="tel:+919926777991"
                className="btn phonrbtn btn-md-square me-4 rounded-circle d-none d-lg-inline-flex"

              >
                <i className="fa fa-phone" aria-hidden="true"></i>
              </a>
              <Link
                to="/book"
                className="btn py-2 px-4 d-none d-xl-inline-block rounded-pill"
              >
                Book Now
              </Link>
            </div>
          </nav>
        </div>
      </div>


    </>
  );
}

export default Header;
