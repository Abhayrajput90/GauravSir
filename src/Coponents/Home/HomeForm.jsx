import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  address: Yup.string().required('Address is required'),
  eventType: Yup.string().required('Event Type is required'),
  numberOfPlaces: Yup.string().required('Number of Places is required'),
  foodType: Yup.string().required('Food Type is required'),
  contactNumber: Yup.string().required('Contact Number is required'),
  date: Yup.date().required('Date is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  name: Yup.string().required('Name is required')
});

const HomeForm = () => {
  return (
    <Formik
      initialValues={{
        address: '',
        eventType: '',
        numberOfPlaces: '',
        foodType: '',
        contactNumber: '',
        date: '',
        email: '',
        name: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const whatsappMessage = `
          Name: ${values.name}
          Email: ${values.email}
          Contact Number: ${values.contactNumber}
          Address: ${values.address}
          Event Type: ${values.eventType}
          Number of Plates: ${values.numberOfPlaces}
          Food Type: ${values.foodType}
          Date: ${values.date}
        `;
        
        const whatsappURL = `https://api.whatsapp.com/send?phone=+919926777991&text=${encodeURIComponent(whatsappMessage.trim())}`;
        window.open(whatsappURL, '_blank');
      }}
    >
      {() => (
        <Form>
          <div className="container-fluid contact py-6 my-20 wow bounceInUp" data-wow-delay="0.1s">
            <div className="container">
              <div className="row g-0">
                <div className="col-1">
                  <img src="img/background-site.jpg" className="img-fluid h-100 w-100 rounded-start" style={{ objectFit: 'cover', opacity: '0.7' }} alt="" />
                </div>
                <div className="col-10">
                  <div className="border-bottom border-top bg-light py-5 px-4">
                    <div className="text-center">
                      <small className="d-inline-block fw-bold text-dark text-uppercase bg-light eventborder rounded-pill px-4 py-1 mb-3">Book Us</small>
                      <h1 className="display-5 mb-5">Where you want Our Services</h1>
                    </div>
                    <div className="row g-4 form">
                      <div className="col-lg-4 col-md-6">
                        <Field name="name" type="text" className="form-control p-2" placeholder="Enter Your Name" />
                        <ErrorMessage name="name" component="div" className="text-danger" />
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <Field name="email" type="email" className="form-control p-2" placeholder="Enter Your Email" />
                        <ErrorMessage name="email" component="div" className="text-danger" />
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <Field name="contactNumber" type="text" className="form-control p-2" placeholder="Your Contact No." />
                        <ErrorMessage name="contactNumber" component="div" className="text-danger" />
                      </div>

                      <div className="col-lg-4 col-md-6">
                        <Field name="address" type="text" className="form-control p-2" placeholder="Enter Your Address" />
                        <ErrorMessage name="address" component="div" className="text-danger" />
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <Field as="select" name="eventType" className="form-select p-2">
                          <option value="">Select Event Type</option>
                          <option value="Big Event">Big Event</option>
                          <option value="Small Event">Small Event</option>
                        </Field>
                        <ErrorMessage name="eventType" component="div" className="text-danger" />
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <Field as="select" name="numberOfPlaces" className="form-select p-2">
                          <option value="">Select Number of Plates</option>
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
                        <Field as="select" name="foodType" className="form-select p-2">
                          <option value="">Select Type</option>
                          <option value="Vegetarian">Day</option>
                          <option value="Non Vegetarian">Night</option>
                        </Field>
                        <ErrorMessage name="foodType" component="div" className="text-danger" />
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <Field name="date" type="date" className="form-control p-2" placeholder="Select Date" />
                        <ErrorMessage name="date" component="div" className="text-danger" />
                      </div>
                      <div className="col-12 text-center">
                        <button type="submit" className="btn px-5 py-3 rounded-pill">Submit Now</button>
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
