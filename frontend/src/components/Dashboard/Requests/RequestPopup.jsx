import React from 'react';
import './RequestPopup.scss';

const RequestPopup = (props) => {
  return (props.trigger) ? (
    <div className="popup-request">
      <div className="popup-request__inner">
        <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
        <h5>Reservation for: {props.popupData.first_name} {props.popupData.last_name}</h5>
        <p>Number of children: {props.numOfKids}</p>
        <p>Address: {props.resData.street}, {props.resData.city}, {props.resData.province}, {props.resData.post_code}</p>
        <div className="popup-request__inner__parent">
          <img src={props.popupData.photo_url} alt="profile" />
          <p>
            About {props.popupData.first_name}: {props.popupData.description}
          </p>
          <p>Contact: {props.popupData.email}</p>
        </div>  
      </div>
    </div>
  ) : '';

}

export default RequestPopup;