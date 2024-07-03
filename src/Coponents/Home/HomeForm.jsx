import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  country: Yup.string().required('Country is required'),
  city: Yup.string().required('City is required'),
  palace: Yup.string().required('Palace is required'),
  eventType: Yup.string().required('Event Type is required'),
  numberOfPlaces: Yup.string().required('Number of Places is required'),
  foodType: Yup.string().required('Food Type is required'),
  contactNumber: Yup.string().required('Contact Number is required'),
  date: Yup.date().required('Date is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const HomeForm = () => {
  return (
    <Formik
      initialValues={{
        country: '',
        city: '',
        palace: '',
        eventType: '',
        numberOfPlaces: '',
        foodType: '',
        contactNumber: '',
        date: '',
        email: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Handle form submission
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="container-fluid contact py-6 wow bounceInUp" data-wow-delay="0.1s">
            <div className="container">
              <div className="row g-0">
                <div className="col-1">
                  <img src="img/background-site.jpg" className="img-fluid h-100 w-100 rounded-start" style={{ objectFit: 'cover', opacity: '0.7' }} alt="" />
                </div>
                <div className="col-10">
                  <div className="border-bottom border-top   bg-light py-5 px-4">
                    <div className="text-center">
                      <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border   rounded-pill px-4 py-1 mb-3">Book Us</small>
                      <h1 className="display-5 mb-5">Where you want Our Services</h1>
                    </div>
                    <div className="row g-4 form">
                      <div className="col-lg-4 col-md-6">
                        <Field as="select" name="country" className="form-select   p-2">
                          <option value="">Select Country</option>
                          <option value="USA">USA</option>
                          <option value="UK">UK</option>
                          <option value="India">India</option>
                        </Field>
                        <ErrorMessage name="country" component="div" className="text-danger" />
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <Field as="select" name="city" className="form-select   p-2">
                          <option value="">Select City</option>
                          <option value="Depend On Country">Depend On Country</option>
                        </Field>
                        <ErrorMessage name="city" component="div" className="text-danger" />
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <Field as="select" name="palace" className="form-select   p-2">
                          <option value="">Select Palace</option>
                          <option value="Depend On Country">Depend On Country</option>
                        </Field>
                        <ErrorMessage name="palace" component="div" className="text-danger" />
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <Field as="select" name="eventType" className="form-select   p-2">
                          <option value="">Select Event Type</option>
                          <option value="Big Event">Big Event</option>
                          <option value="Small Event">Small Event</option>
                        </Field>
                        <ErrorMessage name="eventType" component="div" className="text-danger" />
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <Field as="select" name="numberOfPlaces" className="form-select   p-2">
                          <option value="">Select Number of Places</option>
                          <option value="100-200">100-200</option>
                          <option value="300-400">300-400</option>
                          <option value="500-600">500-600</option>
                          <option value="700-800">700-800</option>
                          <option value="900-1000">900-1000</option>
                          <option value="1000+">1000+</option>
                        </Field>
                        <ErrorMessage name="numberOfPlaces" component="div" className="text-danger" />
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <Field as="select" name="foodType" className="form-select   p-2">
                          <option value="">Select Food Type</option>
                          <option value="Vegetarian">Vegetarian</option>
                          <option value="Non Vegetarian">Non Vegetarian</option>
                        </Field>
                        <ErrorMessage name="foodType" component="div" className="text-danger" />
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <Field name="contactNumber" type="text" className="form-control   p-2" placeholder="Your Contact No." />
                        <ErrorMessage name="contactNumber" component="div" className="text-danger" />
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <Field name="date" type="date" className="form-control   p-2" placeholder="Select Date" />
                        <ErrorMessage name="date" component="div" className="text-danger" />
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <Field name="email" type="email" className="form-control   p-2" placeholder="Enter Your Email" />
                        <ErrorMessage name="email" component="div" className="text-danger" />
                      </div>
                      <div className="col-12 text-center">
                        <button type="submit" className="btn  px-5 py-3 rounded-pill">Submit Now</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1">
                  <img src="img/background-site.jpg" className="img-fluid h-100 w-100 rounded-end" style={{ objectFit: 'cover', opacity: '0.7' }} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default HomeForm;
