import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import CaregiverListItem from './CaregiverListItem'
import './CaregiverList.scss'
import axios from 'axios';
import { useAppState } from '../../AppState';



// holds all caregiverListItem components
// three props: caregivers, setCaregiver, caregiverId
// pass it to CaregiverListItem while iterating over the array
export default function CaregiverList(props) {
  const [caregivers, setCaregivers] = useState([]);

  const { state, dispatch } = useAppState();
  const token = state.token;

  const instance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {'Authorization': 'Bearer '+ token}
  });

  useEffect(() => {
    let mounted = true;
    instance.get('/users')
    .then((items) => {
      console.log(items.data);
      setCaregivers(items.data);
    })
    return () => mounted = false;
  },[])


  // map the caregivers array to caregiverListItem components
  const mappedCaregivers = caregivers.map((caregiver) => {
    console.log(caregiver);
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
      />
    )
  })

  CaregiverList.propTypes = {
    caregivers: PropTypes.array
  }

  // render the array of CaregiverListItem components
  return (
    <section className="caregivers">
      <h4 className="caregivers__header">Available Caregivers for This Date</h4>
      <ul className='caregivers__list'>{mappedCaregivers}</ul>
    </section>
  )
}




