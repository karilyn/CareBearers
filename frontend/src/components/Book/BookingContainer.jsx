import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './BookingContainer.scss'
import CaregiverList from "../Book/CaregiverList";

function BookingContainer() {
  const[startDate, setStartDate] = useState(null);

  return (

    <div className='booking-container'>
      <h1>Book Childcare</h1>
      <div id='booking-container__form' >

        <div className='datepicker-container'>
          <h4>When do you need childcare?</h4>
            <div className='datepicker-container__input'>
              <DatePicker
                showIcon
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="MMMM d, yyyy h:mm aa"
                minDate={new Date()}
                isClearable
                showTimeSelect
                timeIntervals={15}
                placeholderText="Click to select a date and time"
              />
            </div>
          </div>

          <div className='children-container'>
            <h4>How many children do you need care for?</h4>
              <div className='children-container__item'>
                <input type='number' min='1' max='10' placeholder='1' />
              </div>
          </div>

          <div className="caregiver-container">
            <button type="button" className='btn book'>Find a Caregiver</button>
            <div className='available-caregivers'>
              <li className='caregivers__item'>
                <ul>
                <CaregiverList />
                </ul>
              </li>
            </div>
          </div>

          <div>
            <button type="button" className='btn book now'>Book Now</button>
          </div>

      </div>
    </div>
  )
}

export default BookingContainer
