import React from 'react'
import classNames from 'classnames'
import './CaregiverListItem.scss'
import PropTypes from 'prop-types'

// represents one caregiver and has two states: selected and not selected
// caregiver object props: id, first_name, last_name, description, photo_url, gender
//TODO: figure out if it needs all the table props?

const caregiver = {
  id: 1,
  first_name: "Sarah",
  last_name: "Peter",
  description: "Give me your children",
  photo_url: "https://picsum.photos/100/100"
};

export default function CaregiverListItem(props) {
  // conditionally render class if selected
  let caregiversClass = classNames('caregivers__item', {
    'caregivers__item--selected': props.selected,
  })

  return (
    <li className={caregiversClass} onClick={props.setCaregiver}>
    
      {/* {props.selected && props.first_name} */}
      <img
        className='caregivers__item-image'
        src={caregiver.photo_url} alt="caregiver" />
      {caregiver.first_name} {caregiver.last_name}
      <br />
      {caregiver.description}
    </li>
  )
}

CaregiverListItem.propTypes = {
  id: PropTypes.number,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  description: PropTypes.string,
  photo_url: PropTypes.string,
}