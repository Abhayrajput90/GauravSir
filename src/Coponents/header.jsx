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
          <nav className="navbar navbar-light navbar-expand-lg py-4">
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
              className={`collapse navbar-collapse ${!isCollapsed ? "show" : ""}`}
              id="navbarCollapse"
            >
              <div className="navbar-nav mx-auto">
                <Link to="/" className={`nav-item nav-link ${location.pathname === "/" ? "active" : ""}`}>
                  Home
                </Link>
                <Link to="/about" className={`nav-item nav-link ${location.pathname === "/about" ? "active" : ""}`}>
                  About
                </Link>
                <Link to="/services" className={`nav-item nav-link ${location.pathname === "/services" ? "active" : ""}`}>
                  Services
                </Link>
                <Link to="/events" className={`nav-item nav-link ${location.pathname === "/events" ? "active" : ""}`}>
                  Events
                </Link>
                <Link to="/menu" className={`nav-item nav-link ${location.pathname === "/menu" ? "active" : ""}`}>
                  Menu
                </Link>
                <div className="nav-item dropdown">
                  <Link
                    to="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </Link>
                  <div className="dropdown-menu bg-light">
                    <Link to="/book" className={`dropdown-item ${location.pathname === "/book" ? "active" : ""}`}>
                      Booking
                    </Link>
                    <Link to="/404" className={`dropdown-item ${location.pathname === "/404" ? "active" : ""}`}>
                      404 Page
                    </Link>
                  </div>
                </div>
                <Link to="/contact" className={`nav-item nav-link ${location.pathname === "/contact" ? "active" : ""}`}>
                  Contact
                </Link>
              </div>
              <button
                className="btn-search btn btn-md-square me-4 rounded-circle d-none d-lg-inline-flex"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
              >
                <i className="fas fa-search"></i>
              </button>
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

      <div
        className="modal fade"
        id="searchModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Search by keyword
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex align-items-center">
              <div className="input-group w-75 mx-auto d-flex">
                <input
                  type="search"
                  className="form-control bg-transparent p-3"
                  placeholder="keywords"
                  aria-describedby="search-icon-1"
                />
                <span id="search-icon-1" className="input-group-text p-3">
                  <i className="fa fa-search"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
