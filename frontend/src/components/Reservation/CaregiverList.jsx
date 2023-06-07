import React from 'react'
import './CaregiverList.css'

export default function CaregiverList(props) {
  const { caregivers } = props

  return (
    <div className="caregiver-list">
      {caregivers.map((caregiver, index) => (
        <div key={index} className="caregiver">
          <div className="caregiver-name">{caregiver.name}</div>
          <div className="caregiver-email">{caregiver.email}</div>
        </div>
      ))}
    </div>
  )
}
