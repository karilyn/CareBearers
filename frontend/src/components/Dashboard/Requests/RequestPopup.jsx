import React from 'react';
import './RequestPopup.scss';

const RequestPopup = (props) => {
  return props.trigger ? (
    <div className='popup-request-container'>
      <div className='popup-request-card'>
        <button className='close-btn' onClick={() => props.setTrigger(false)}>
          x
        </button>
        <hr />
        <h5 className='popup-requst-card__title'>
          Reservation for: {props.popupData.first_name}{' '}
          {props.popupData.last_name}
        </h5>
        <p className='p-popup'>
          <strong>Number of children: </strong>
          {props.numOfKids}
        </p>
        <p className='p-popup'>
          <strong>Care address:</strong> {props.resData.street},{' '}
          {props.resData.city}, {props.resData.province},{' '}
          {props.resData.post_code}
        </p>

      <div className='popup-request-card__img'>
        <div className='card-img-top__background request'>
          <img
            className='card-img-top request'
            src={props.popupData.photo_url}
            alt='profile'
          />
        </div>
          <div className='popup-request-card__parent'>
          <p className='p-popup'>
            <strong>About {props.popupData.first_name}:</strong>{' '}
            {props.popupData.description}
          </p>
          <p>
            <strong>Contact:</strong> {props.popupData.email}
          </p>
        </div>
      </div>
      </div>
    </div>
  ) : (
    ''
  );
};

export default RequestPopup;
