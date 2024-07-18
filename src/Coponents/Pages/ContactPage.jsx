import { Field, Formik, Form, ErrorMessage } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import CtaSection from "../CtaSection";

const initialValues = {
  username: "",
  email: "",
  phone: "",
};

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Full name is required")
    .min(5, "Username must be at least 5 characters long"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\d+$/, "Phone number must be digits only")
    .required("Phone number is required"),
});

export const ContactPage = () => {
  const onSubmit = (values) => {
    console.log('Form data', values);
    // alert(JSON.stringify(values, null, 2));
  };

  return (
    <>
      <div className="about-bg">
        <div className="about-text-overlay text-center">
          <h1 className="about-title">Contact Us</h1>
          <p className="about-subtitle">Contact For Details</p>
        </div>
      </div>

      <div className="container-fluid contact wow bounceInUp py-5 my-5" data-wow-delay="0.1s">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 col-lg-7">
              <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form>
                  <div>
                    <Field name="username" type="text" className="w-100 form-control p-3 mb-4 bg-light" placeholder="Your Name" />
                    <ErrorMessage name="username" component="p" className="error text-danger" />
                  </div>
                  <div>
                    <Field name="email" type="email" className="w-100 form-control p-3 mb-4 bg-light" placeholder="Email" />
                    <ErrorMessage name="email" component="p" className="error text-danger" />
                  </div>
                  <div>
                    <Field name="phone" type="text" className="w-100 form-control p-3 mb-4 bg-light" placeholder="Phone" />
                    <ErrorMessage name="phone" component="p" className="error text-danger" />
                  </div>
                  <button className="w-100 btn btn-primary form-control p-3 rounded-pill" type="submit">
                    Contact Now
                  </button>
                </Form>
              </Formik>
            </div>
            <div className="col-md-6 col-lg-5">
              <div>
                <div className="d-inline-flex w-100 border p-2 rounded mb-4">
                  <i className="fas fa-map-marker-alt fa-2x text-black m-4"></i>
                  <div>
                    <h4>Address</h4>
                    <p>Indore, India, Madhya Pradesh</p>
                  </div>
                </div>
                <div className="d-inline-flex w-100 border p-2 rounded mb-4">
                  <i className="fas fa-envelope fa-2x text-black m-4"></i>
                  <div>
                    <h4>Mail Us</h4>
                    <p className="mb-2">indorecaterers@gmail.com</p>
                    <p className="mb-0">24/7 Hours Service</p>
                  </div>
                </div>
                <div className="d-inline-flex w-100 border p-2 rounded">
                  <i className="fa fa-phone-alt fa-2x text-black m-4"></i>
                  <div>
                    <h4>Telephone</h4>
                    <p className="mb-2">+91 9926777991</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CtaSection />
    </>
  );
};

export default ContactPage;
