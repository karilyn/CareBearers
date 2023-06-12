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
      <div className='review-popup__content'>
        <h1>Review {props.name}</h1>
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
            <button className='btn btn-primary' type="submit">Submit</button>
           
          </form>
      </div>
    </div>
  )
}

export default ReviewPopup;
