import React, { useState, useEffect } from 'react';
import './MyProfile.scss';
import axios from 'axios';
// import { useAppState } from '../../../AppState';
import Rating from '@mui/material/Rating';
// import { useNavigate } from 'react-router';

const MyProfile = (props) => {
  // const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const [myReservations, setMyReservations] = useState([]);
  const [user, setUser] = useState({});

  // const { state } = useAppState();
  // const token = state.token;
  // const isCaregiver = state.user.is_caregiver;

  const token = JSON.parse(window.localStorage.getItem('auth')).token;
  const isCaregiver = JSON.parse(window.localStorage.getItem('auth')).isCaregiver;
  const userID = JSON.parse(window.localStorage.getItem('auth')).id;

  useEffect(() => {
    const instance = axios.create({
      baseURL: 'http://localhost:3000',
      headers: { Authorization: 'Bearer ' + token },
    });

    instance.get(`/users/${userID}`).then((items) => {
      setUser(items.data);
    });

    instance.get('/reviews').then((items) => {
      setReviews(items.data);
    });

    instance.get('/reservations').then((items) => {
      if (isCaregiver) {
        setMyReservations(
          items.data.reservations.filter((item) => {
            return (
              item.caregiver_id === userID && item.status === 'completed'
            );
          })
        );
      } else {
        setMyReservations(
          items.data.reservations.filter((item) => {
            return (
              item.parent_id === userID && item.status === 'completed'
            );
          })
        );
      }
    });
  }, [token, isCaregiver, userID]);

  console.log('My reservations: ', myReservations);

  const myReviews = [];

  for (const res of myReservations) {
    for (const rev of reviews) {
      if (rev.reservation_id === res.id && rev.reviewer_id !== userID) {
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
                src={user?.photo_url}
                className='card-img-top'
                alt={user?.first_name}
              />
            </div>
            <div className='card-body'>
              <h2 className='card-title'>
                {user?.first_name} {user?.last_name}
              </h2>
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
              <p className='card-text'>{user?.description}</p>
              <div className='button-container'>
                <button className='btn edit' onClick={handleClickEdit}>
                  Edit My Profile
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default MyProfile;
