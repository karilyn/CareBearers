import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import CaregiverListItem from './CaregiverListItem'
import './CaregiverList.scss'
import axios from 'axios';
// import { useAppState } from '../../AppState';

// holds all caregiverListItem components
// three props: caregivers, setCaregiver, caregiverId
// pass it to CaregiverListItem while iterating over the array
export default function CaregiverList(props) {

  const [caregivers, setCaregivers] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [reviews, setReviews] = useState([]);

  //To revisit when useAppState is fixed
  // const { state, dispatch } = useAppState();
  // const token = state.token;

  //Get logged in user details - workaround until useAppState is fixed
  const token = JSON.parse(window.localStorage.getItem('auth')).token;

  useEffect(() => {
    const instance = axios.create({
      baseURL: 'http://localhost:3000',
      headers: {'Authorization': 'Bearer '+ token}
    });

    instance.get('/users')
    .then((items) => {
      const filteredCaregivers = items.data.filter((item) => {
        return item.is_caregiver === true;
      })
      setCaregivers(filteredCaregivers);
    })

    instance.get('/reservations')
    .then((items) => {
      setReservations(items.data.reservations);
    });

    instance.get('/reviews')
    .then((items) => {  
      setReviews(items.data);
    });

  },[token])

  
  // map the caregivers array to caregiverListItem components
  const mappedCaregivers = caregivers.map((caregiver) => {
    return (
      <CaregiverListItem
        key={caregiver.id}
        firstName={caregiver.first_name}
        lastName={caregiver.last_name}
        description={caregiver.description}
        photoUrl={caregiver.photo_url}
        gender={caregiver.gender}
        setCaregiver={() => props.onChange(caregiver.id)}
        selected={props.value === caregiver.id}
        myReservations={reservations.filter((reservation) => {
          return reservation.caregiver_id === caregiver.id && reservation.status === 'completed';
        })}
        reviews={reviews.filter((review) => {
          return review.reviewer_id !== caregiver.id;
        })}
      />
    )
  })

  CaregiverList.propTypes = {
    caregivers: PropTypes.array
  }

  // render the array of CaregiverListItem components
  return (
    <section className="caregivers">
      <h4 className="caregivers__header">Choose From These Available Caregivers</h4>
      <ul className='caregivers__list'>{mappedCaregivers}</ul>
    </section>
  )
}




