import React from 'react';
import './RequestPopup.scss';

const RequestPopup = (props) => {
  return (props.trigger) ? (
    <div className="popup-request">
      <div className="popup-request__inner">
        <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
        <h5>Reservation for: {props.popupData.first_name} {props.popupData.last_name}</h5>
        <p className="p-popup"><strong>Number of children:</strong> {props.resData.num_of_children}</p>
        <p><strong>Address:</strong> {props.resData.street}, {props.resData.city}, {props.resData.province}, {props.resData.post_code}</p>
        <div className="popup-request__inner__parent">
          <div className='popup-request-card__img'>
            <div className='card-img-top__background request'>
              <img
                className='card-img-top request'
                src={props.popupData.photo_url}
                alt='profile'
              />
            </div>
          </div>
          {/* <img src={props.popupData.photo_url} alt="profile" /> */}
          <p className="p-popup">
            <strong>About {props.popupData.first_name}:</strong> {props.popupData.description}
          </p>
          <p className="p-popup"><strong>Contact: </strong>{props.popupData.email}</p>
        </div>
      </div>
    </div>
  ) : '';

}

export default RequestPopup;