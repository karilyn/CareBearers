import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import './MyProfile.scss';
import axios from 'axios';
import { useAppState } from '../../../AppState';
import Rating from '@mui/material/Rating';
// import { useNavigate } from 'react-router';

const MyProfile = (props) => {
  // const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const [myReservations, setMyReservations] = useState([]);

  const { state } = useAppState();
  const token = state.token;
  const isCaregiver = state.user.is_caregiver;

  useEffect(() => {
    const instance = axios.create({
      baseURL: 'http://localhost:3000',
      headers: { Authorization: 'Bearer ' + token },
    });

    instance.get('/reviews').then((items) => {
      setReviews(items.data);
    });

    instance.get('/reservations').then((items) => {
      if (isCaregiver) {
        setMyReservations(
          items.data.reservations.filter((item) => {
            return (
              item.caregiver_id === state.user.id && item.status === 'completed'
            );
          })
        );
      } else {
        setMyReservations(
          items.data.reservations.filter((item) => {
            return (
              item.parent_id === state.user.id && item.status === 'completed'
            );
          })
        );
      }
    });
  }, [token, isCaregiver]);

  console.log('My reservations: ', myReservations);

  const myReviews = [];

  for (const res of myReservations) {
    for (const rev of reviews) {
      if (rev.reservation_id === res.id && rev.reviewer_id !== state.user.id) {
        myReviews.push(rev.rating);
      }
    }
  }
  console.log('My Reviews: ', myReviews);

  const handleClickEdit = () => {
    //does nothing for now
  };

  return (
    <>

      <div className='user-container'>
        <h1 className='user-container__title'>My Profile</h1>
        <div className='profile-container'>
          <div className='profile-card'>
            <div className='card-img-top__background'>
              <img
                src={props.user.photo_url}
                className='card-img-top'
                alt={props.first_name}
              />
            </div>
            <div className='card-body'>
              <h5 className='card-title'>
                {props.user.first_name} {props.user.last_name}
              </h5>
              <div className='rating'>
                <h5>Rated by {isCaregiver ? 'parents' : 'caregivers'}: </h5>
                <Rating
                  name='read-only'
                  value={
                    myReviews.reduce((a, b) => a + b, 0) / myReviews.length
                  }
                  readOnly
                  precision={0.5}
                />
              </div>
              <p className='card-text'>{props.user.description}</p>
              <div className='button-container'>
                <button className='btn edit' onClick={handleClickEdit}>
                  Edit Profile
                </button>
                {/* <button
                  className='btn my-kids'
                  onClick={() => navigate('/kids')}
                >
                  View My Kids
                </button> */}
              </div>
            </div>
          </div>
          {/* <div className='my-profile__footer'>
        <a href='/kids'>My Kids</a>
      </div> */}
        </div>
      </div>
    </>
  );
};

export default MyProfile;
