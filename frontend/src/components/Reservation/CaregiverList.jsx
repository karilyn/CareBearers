import React from 'react';
import PropTypes from 'prop-types';
import CaregiverListItem from './CaregiverListItem'
import './CaregiverList.scss'

// holds all caregiverListItem components
// pass it to CaregiverListItem while iterating over the array
export default function CaregiverList(props) {
  const caregivers = props.caregivers.map((caregiver) => {

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
    caregivers: PropTypes.array.isRequired
  }

  return (
    <section className="caregivers">
      <h4 className="caregivers__header">Caregivers</h4>
      <ul className='caregivers__list'>{caregivers}</ul>
    </section>
  )
}
