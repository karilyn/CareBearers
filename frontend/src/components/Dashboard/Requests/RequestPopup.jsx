import React from "react";
import "./RequestPopup.scss";
import Rating from "@mui/material/Rating";

const RequestPopup = (props) => {
  return props.trigger ? (
    <div className="popup-request">
      <div className="popup-request__inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          close
        </button>
        <h5>
          {props.popupData.first_name} {props.popupData.last_name}
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
              value={props.parentRating}
              readOnly
              precision={0.5}
            />
          </div>
          <p className="p-popup">{props.popupData.description}</p>
          <p className="p-popup">
            <strong>Contact: </strong>
            {props.popupData.email}
          </p>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default RequestPopup;
