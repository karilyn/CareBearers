import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import "./ReviewPopup.scss";
// import { useAppState } from '../../../AppState';

//Form to submit a review
const ReviewPopup = (props) => {
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);

  //To revisit when useAppState is fixed
  // const { state } = useAppState();
  // const token = state.token;

  //get logged in user details - workaround until useAppState is fixed
  const token = JSON.parse(window.localStorage.getItem("auth")).token;

  //Change to axios request after demo day
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        review: {
          message: message,
          rating: rating,
          reservation_id: props.reservation,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        props.handlePopup();
      });
  };

  return (
    <div className="review-container">
      <div className="review-card">
        <h2 className="review-card__title">Review {props.name}</h2>
        <form className="form review" onSubmit={handleSubmit}>
          <div className="form-group">
            <Rating
              name="half-rating"
              precision={0.5}
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
            <div className="form-outline mb-4">
              <textarea
                className="form-control"
                rows="3"
                placeholder="Please review the booking and interaction"
                name="message"
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
              ></textarea>
            </div>
          </div>
          <button className="btn review" type="submit">
            Submit Your Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewPopup;
