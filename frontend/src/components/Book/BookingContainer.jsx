import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './BookingContainer.scss'
import CaregiverList from "../Book/CaregiverList";

function BookingContainer() {
  const[startDate, setStartDate] = useState(null);

  return (
    <div>
      <h1>Book Childcare</h1>
      <div id='booking' className='booking-container'>
        <section className='booking-container__form'>
          <p>When do you need childcare?</p>
            <div className='datepicker-container'>
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
              <button type="button" className='btn find-caregiver'>Find a Caregiver</button>
              <div className='caregivers'>
                <li>
                  <ul className='caregivers__item'>
                  <CaregiverList />
                  </ul>
                </li>
              </div>
          </section>
        </div>
    </div>
  )
}

export default BookingContainer
