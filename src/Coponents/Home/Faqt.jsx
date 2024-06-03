import React from 'react'
import { useState } from 'react';

export const Faqt = ({ stats, videoUrl }) => {
    const [modalVisible, setModalVisible] = useState(false);

  const handleVideoModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <div>
        <div className="container-fluid faqt py-6">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-7">
            <div className="row g-4">
              {stats.map((stat, index) => (
                <div key={index} className={`col-sm-4 wow bounceInUp`} data-wow-delay={`${0.3 + index * 0.2}s`}>
                  <div className="faqt-item bg-primary rounded p-4 text-center">
                    <i className={`fas ${stat.icon} fa-4x mb-4 text-white`}></i>
                    <h1 className="display-4 fw-bold" data-toggle="counter-up">{stat.count}</h1>
                    <p className="text-dark text-uppercase fw-bold mb-0">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5 wow bounceInUp" data-wow-delay="0.1s">
            <div className="video">
              <button type="button" className="btn btn-play" onClick={handleVideoModal}>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {modalVisible && (
        <div className="modal fade show" style={{ display: 'block' }} onClick={handleVideoModal}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" aria-label="Close" onClick={handleVideoModal}></button>
              </div>
              <div className="modal-body">
                <div className="ratio ratio-16x9">
                  <iframe src={videoUrl} title="YouTube video" allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  )
}

export default Faqt