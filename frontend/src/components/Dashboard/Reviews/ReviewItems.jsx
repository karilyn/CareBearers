import React, { useState, useEffect } from "react";
import { useAppState } from '../../../AppState.jsx'
import axios from "axios";
import Navbar from "../Navbar.jsx";
import { getCompletedReservations, getCaregiverDetails } from "../../../helpers/selectors";
import moment from 'moment';
import ReviewPopup from "./ReviewPopup.jsx";
import './ReviewItems.scss';

function ReviewItems(props) {
  const [popup, setPopup] = useState(false);

  const handleClickReview = () => {
    setPopup(!popup);
  }

  const [completedReservations, setCompletedReservations] = useState([]);
  const [caregivers, setCaregivers] = useState([]);

  const { state, dispatch } = useAppState();
  const token = state.token;
  const isCaregiver = state.user.is_caregiver;
  
  const instance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {'Authorization': 'Bearer '+ token}
  });

  useEffect(() => {
    instance.get('/reservations')
    .then((items) => {
      console.log("from /reservations axios call:", items.data)
      let myEvents;
      if (isCaregiver) {
        myEvents = items.data.filter((item) => {
          return item.caregiver_id === state.user.id;
        });
      } else {
        myEvents = items.data.filter((item) => {
          return item.parent_id === state.user.id;
        });
      }
      setCompletedReservations(getCompletedReservations(myEvents));
      console.log("completedCare:", completedReservations)
    });

    instance.get('/users')
    .then((items) => {
      console.log('caregivers:', items.data);
      setCaregivers(items.data);
    });
  },[])

  return (
    <>
    <Navbar />
      <h2>Completed Care Events</h2>
      {completedReservations.map((res) => {
        return (
          <>
    
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{moment(res.start_time).format("MMM Do YYYY")}</h5>
              <p className="card-text">{getCaregiverDetails(caregivers, res.caregiver_id) ? getCaregiverDetails(caregivers, res.caregiver_id).first_name : null } watched your kids at {moment(res.start_time).format("h:mm a")} for {res.duration_in_minutes} minutes</p>
              <button className="btn btn-primary" onClick={handleClickReview}>Review</button>
            </div>
          </div>
          <div className="popup">
            {popup? <ReviewPopup name={getCaregiverDetails(caregivers, res.caregiver_id).first_name} reservation={res.id} handlePopup={handleClickReview}/> : ''}
          </div>
         </>  
        );
      })}
    </>
  );
}

export default ReviewItems;

