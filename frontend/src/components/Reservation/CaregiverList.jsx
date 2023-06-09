import React from 'react';
import PropTypes from 'prop-types';
import CaregiverListItem from './CaregiverListItem'
import './CaregiverList.scss'

const caregivers = [
  { id: 1, first_name: "Sarah", last_name: "Peter", description: "Give me your children", photo_url: "https://picsum.photos/100/200" },
  { id: 2, first_name: "Mike", last_name: "Brown", description: "I love kids!", photo_url: "https://picsum.photos/100/200" },
  { id: 3, first_name: "John", last_name: "Smith", description: "I'm a good caregiver", photo_url: "https://picsum.photos/100/200" },
]

// holds all caregiverListItem components
// three props: caregivers, setCaregiver, caregiverId
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
