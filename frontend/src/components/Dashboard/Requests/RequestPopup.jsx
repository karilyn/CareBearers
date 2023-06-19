import React from "react";
import "./RequestPopup.scss";
import Rating from "@mui/material/Rating";

const RequestPopup = (props) => {

  const myKids = props.kids.filter((kid) => {
    return kid.parent_id === props.resData.parent_id;
  });

  const parentRatings = [];

  for (const item of props.completedReservations) {
    if (item.parent_id === props.popupData.id) {
      for (const review of props.reviews) {
        if (review.reservation_id === item.id && review.reviewer_id !== props.popupData.id) {
          parentRatings.push(review.rating);
        }
      }
    }
  }

  return props.trigger ? (
    <div className="popup-request">
      <div className="popup-request__inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          close
        </button>
        <h5>
          <strong>{props.popupData.first_name} {props.popupData.last_name}</strong>
        </h5>
        <div className="popup-request__inner__parent">
          <div className="popup-request-card__img">
            <div className="card-img-top__background request">
              <img
                className="card-img-top request"
                src={props.popupData.photo_url}
                alt="profile"
              />
            </div>
            <Rating
              name="read-only"
              value={parentRatings.reduce((a, b) => a + b, 0) / parentRatings.length}
              readOnly
              precision={0.5}
            />
          </div>
          <p className="p-popup">{props.popupData.description}</p>
          <p className="p-popup">
            <strong>Contact: </strong>
            {props.popupData.email}
          </p>
          <div className="popup-kids">
            <h5><strong>My Kids: </strong></h5>
            {myKids.map((kid) => {
              return (
                <div className="kid-card" key={kid?.id}>
                  <img
                    src={kid.photo_url}
                    className="card-img-top"
                    alt={kid.name}
                  />
                
                    <h5 className="card-title">
                      {kid.name}, {kid.age}
                    </h5>
                    <p className="card-text">{kid.description}</p>
                
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default RequestPopup;
