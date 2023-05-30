import React from 'react';

function Reviews(props) {
  return (
    <div>
      <h1>Reviews from the API</h1>
      {props.reviews.map((review) => {
        return (
          <div key={review.id}>
            <p>{review.reviewer_id} says {review.message}</p>
           
          </div>
        );
      })}
    </div>
  );
}

export default Reviews;