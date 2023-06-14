import React from 'react';
import './RequestPopup.scss';

const RequestPopup = (props) => {
  return (props.trigger) ? (
    <div className="popup-request">
      <div className="popup-request__inner">
        <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
        <h5>Reservation for: {props.popupData.first_name} {props.popupData.last_name}</h5>
        <h4>Number of children: {props.numOfKids}</h4>
        <p>
        About {props.popupData.first_name}: {props.popupData.description}
        </p>
          
      </div>
    </div>
  ) : '';

}

export default RequestPopup;