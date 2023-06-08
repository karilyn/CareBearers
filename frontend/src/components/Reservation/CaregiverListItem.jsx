import React from 'react'
import classNames from 'classnames'
import './CaregiverListItem.scss'

// represents one caregiver and has two states: selected and not selected
// caregiver object props: id, first_name, last_name, description, photo_url, gender
//TODO: figure out if it needs all the table props?

export default function CaregiverListItem(props) {
  // conditionally render class if selected
  let caregiversClass = classNames('caregivers__item', {
    'caregivers__item--selected': props.selected,
  })

  return (
    <li className={caregiversClass} onClick={props.onClick}>
      <img
        className="caregivers__item__photo"
        src={props.photo_url}
        alt={props.first_name}
      />
      {props.selected && props.first_name}
    </li>
  )
}
