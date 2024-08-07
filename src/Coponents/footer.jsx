import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  useEffect(() => {
  
    const footerLinks = document.querySelectorAll(".footer a");

    footerLinks.forEach((link) => {
      link.addEventListener("click", scrollToTop);
    });

    return () => {
      footerLinks.forEach((link) => {
        link.removeEventListener("click", scrollToTop);
      });
    };
  }, []);

  return (
    <>
      <div
        className="container-fluid footer py-6 my-6 mb-0 bg-light wow bounceInUp"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-item mb-4">
                <h1 className=" ">
                  Indore<span className="text-dark">Caterers</span>
                </h1>
                <p className="lh-lg mb-4">
                  We offer full catering service with everything from table
                  linens, serving pieces and servers to make your event a
                  complete success..
                </p>
                <div className="footer-icon d-flex">
                  <a
                    className="btn btn-sm-square me-2 rounded-circle"
                    href=""
                    onClick={scrollToTop}
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-sm-square me-2 rounded-circle"
                    href=""
                    onClick={scrollToTop}
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="btn btn-sm-square me-2 rounded-circle"
                    onClick={scrollToTop}
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="#"
                    className="btn btn-sm-square rounded-circle"
                    onClick={scrollToTop}
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-item">
                <h4 className="mb-4">Special Facilities</h4>
                <div className="d-flex flex-column align-items-start ms-3 mb-2">
                  <Link
                    to={"/menu"}
                    className="text-body mb-3"
                    onClick={scrollToTop}
                  >
                    <i className="fa fa-check   me-2"></i>Our Menu
                  </Link>
                  <Link
                    to={"/events"}
                    className="text-body mb-3"
                    onClick={scrollToTop}
                  >
                    <i className="fa fa-check   me-2"></i>Our Events
                  </Link>
                  <Link
                    to={"/services"}
                    className="text-body mb-3"
                    onClick={scrollToTop}
                  >
                    <i className="fa fa-check   me-2"></i>Our Service
                  </Link>
                  <Link
                    to={"/contact"}
                    className="text-body mb-3"
                    onClick={scrollToTop}
                  >
                    <i className="fa fa-check   me-2"></i>Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-item">
                <h4 className="mb-4">Contact Us</h4>
                <div className="d-flex flex-column align-items-start mb-2">
                  <p>
                    <i className="fa fa-map-marker-alt   me-2"></i> Indore,
                    India, Madhya Pradesh
                  </p>
                  <p>
                    <i className="fa fa-phone-alt   me-2"></i> 099267 77991
                  </p>
                  <p>
                    <i className="fas fa-envelope   me-2"></i>{" "}
                    indorecaterers@gmail.com
                  </p>
                  <p>
                    <i className="fa fa-clock   me-2"></i> 24/7 Hours Service
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-item">
                <h4 className="mb-4">Social Gallery</h4>
                <div className="row g-2">
                  <div className="col-4">
                    <img
                      src="img/menu-01.jpg"
                      className="img-fluid rounded-circle border   p-2"
                      alt=""
                    />
                  </div>
                  <div className="col-4">
                    <img
                      src="img/menu-02.jpg"
                      className="img-fluid rounded-circle border   p-2"
                      alt=""
                    />
                  </div>
                  <div className="col-4">
                    <img
                      src="img/menu-03.jpg"
                      className="img-fluid rounded-circle border   p-2"
                      alt=""
                    />
                  </div>
                  <div className="col-4">
                    <img
                      src="img/menu-04.jpg"
                      className="img-fluid rounded-circle border   p-2"
                      alt=""
                    />
                  </div>
                  <div className="col-4">
                    <img
                      src="img/menu-05.jpg"

                      className="img-fluid rounded-circle border   p-2"
                      alt=""
                    />
                  </div>
                  <div className="col-4">
                    <img
                      src="img/menu-06.jpg"
                      className="img-fluid rounded-circle border   p-2"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid copyright bg-dark py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 my-auto text-center text-white">
              <p className="m-0">All Copyright Reserved <span>{currentYear}</span> By @Indore Caterers</p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#"
        className="btn btn-md-square pt-2 rounded-circle back-to-top"
        onClick={scrollToTop}
      >
        <i className="fa fa-arrow-up"></i>
      </a>
    </>
  );
}

export default Footer;
