import React, { useState, useEffect } from "react";
import { useAppState } from '../../../AppState.jsx'
import axios from "axios";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
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

  const instance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {'Authorization': 'Bearer '+ token}
  });

  useEffect(() => {
    let mounted = true;
    instance.get('/reservations')
    .then((items) => {
      console.log("from /reservations axios call:", items.data)
      setCompletedReservations(getCompletedReservations(items.data));
      console.log("completedCare:", completedReservations)
    });
    instance.get('/users')
    .then((items) => {
      console.log('caregivers:', items.data);
      setCaregivers(items.data);
    });
    return () => mounted = false;
  },[])

  return (
    <>
    <Navbar />
      <h2>Completed Care Events</h2>
      {completedReservations.map((res) => {
        return (
          <>
          {/* <Card key={res.id} sx={{ width: 320, marginTop: 5, marginLeft: 50 }}>
            
              <CardContent>
                <Typography gutterBottom variant="h5" component="h3">
                  {moment(res.start_time).format("MMM Do YY")}, {moment(res.start_time).format("h:mm a")} - {moment(res.end_time).format("h:mm a")}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {getCaregiverDetails(caregivers, res.caregiver_id).first_name}
                </Typography>
              </CardContent>
              <CardActions onClick={handleClickReview}>
                <button>Review</button>
              </CardActions>
          </Card> */}
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{moment(res.start_time).format("MMM Do YYYY")}</h5>
              <p className="card-text">{getCaregiverDetails(caregivers, res.caregiver_id).first_name} watched your kids from {moment(res.start_time).format("h:mm a")} - {moment(res.end_time).format("h:mm a")}</p>
              <button className="btn btn-primary" onClick={handleClickReview}>Review</button>
            </div>
          </div>
          <div className="popup">
            {popup? <ReviewPopup name={getCaregiverDetails(caregivers, res.caregiver_id).first_name} /> : ''}
          </div>
         </>  
        );
      })}
    </>
  );
}

export default ReviewItems;

