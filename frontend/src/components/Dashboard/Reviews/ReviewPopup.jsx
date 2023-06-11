import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import './ReviewPopup.scss';

const ReviewPopup = (props) => {
 const [message, setMessage] = useState('');
 const [rating, setRating] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(message, rating);
  }

  return (
    <div className='review-popup'>
      <div className='review-popup-inner'>
        <h1>Review {props.name}</h1>
          <form onSubmit={handleSubmit}>
            <label for='message'>Message</label>
              <input type="text" name='message' value={message} 
              onChange={(event) => {
                  setMessage(event.target.value);
              }}/>
              <Rating
                name="half-rating"
                precision={0.5}
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />
            <button type="submit">Submit</button>
          </form>
      </div>
    </div>
  )
}

export default ReviewPopup;
