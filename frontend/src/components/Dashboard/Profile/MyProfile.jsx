import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import "./MyProfile.scss";
import Button from "../../Button";
import axios from "axios";
import { useAppState } from "../../../AppState";
import Rating from "@mui/material/Rating";

const MyProfile = (props) => {
  const [reviews, setReviews] = useState([]);
  const [myReservations, setMyReservations] = useState([]);

  const { state } = useAppState();
  const token = state.token;
  const isCaregiver = state.user.is_caregiver;

  useEffect(() => {
    const instance = axios.create({
      baseURL: "http://localhost:3000",
      headers: { Authorization: "Bearer " + token },
    });

    instance.get("/reviews").then((items) => {
      setReviews(items.data);
    });

    instance.get("/reservations").then((items) => {
      if (isCaregiver) {
        setMyReservations(
          items.data.filter((item) => {
            return (
              item.caregiver_id === state.user.id && item.status === "completed"
            );
          })
        );
      } else {
        setMyReservations(
          items.data.filter((item) => {
            return (
              item.parent_id === state.user.id && item.status === "completed"
            );
          })
        );
      }
    });
  }, [token, isCaregiver]);

  console.log("My reservations: ", myReservations);

  const myReviews = [];

  for (const res of myReservations) {
    for (const rev of reviews) {
      if (rev.reservation_id === res.id && rev.reviewer_id !== state.user.id) {
        myReviews.push(rev.rating);
      }
    }
  }
  console.log("My Reviews: ", myReviews);

  const handleClickEdit = () => {
    //does nothing for now
  };

  return (
    <>
      <Navbar />
      <div className="my-profile">
        <img src="" alt="header" />
        <div className="my-profile__header">
          <img src={props.user.photo_url} alt="profile-pic" />
          <h2>
            {props.user.first_name} {props.user.last_name}
          </h2>
          <div className="rating">
            <h5>Rated by {isCaregiver ? "parents" : "caregivers"}: </h5>
            <Rating
              name="read-only"
              value={myReviews.reduce((a, b) => a + b, 0) / myReviews.length}
              readOnly
              precision={0.5}
            />
            
          </div>
        </div>
        <div className="my-profile__body">
          <p>{props.user.description}</p>
          <Button onClick={handleClickEdit} text="Edit" />
        </div>
        {/* <div className='my-profile__footer'>
        <a href='/kids'>My Kids</a>
      </div> */}
      </div>
    </>
  );
};

export default MyProfile;
