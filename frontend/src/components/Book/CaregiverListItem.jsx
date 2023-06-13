import React from 'react'
import classNames from 'classnames'
import './CaregiverListItem.scss'
import PropTypes from 'prop-types'

// represents one caregiver and has two states: selected and not selected
// caregiver object props: id, first_name, last_name, description, photo_url, gender

export default function CaregiverListItem(props) {


  // conditionally render class if selected
  let caregiversClass = classNames('caregivers__item', {
    'caregivers__item--selected': props.selected,
  })


  return (
      // onClick, set the caregiver to the selected caregiver
      <li className={caregiversClass} onClick={props.setCaregiver}>
        <img
          className='caregivers__item-image'
          src={props.photoUrl}
          alt={props.firstName}
        />
        <br/>
        <strong>{props.firstName} {props.lastName}</strong>
        <br/>{props.description}
        <hr/>
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