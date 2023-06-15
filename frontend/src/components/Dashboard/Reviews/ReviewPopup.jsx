import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import './ReviewPopup.scss';
import { useAppState } from '../../../AppState';

const ReviewPopup = (props) => {
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);

  const { state } = useAppState();
  const token = state.token;

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/reviews', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer '+ token
      },
      body: JSON.stringify({review: { message: message, rating: rating, reservation_id: props.reservation}})
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data, "props:", props);
      props.handlePopup();
    })

  }

  return (
    <div className='review-popup'>
      <div className='review-popup__content'>
        <h3>Review {props.name}</h3>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label for='message'>Message</label>
                <input type="text" className='form-control' name='message' value={message}
                onChange={(event) => {
                    setMessage(event.target.value);
                }}/>
            </div>
            <div className='form-group'>
              <Rating
                name="half-rating"
                precision={0.5}
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />
            </div>
            <button className='btn btn-primary' type="submit" onClick={props.onClick}>Submit</button>

          </form>
      </div>
    </div>
  )
}

export default ReviewPopup;
