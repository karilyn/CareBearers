import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CaregiverListItem from '../Book/CaregiverListItem'
import './BookingContainer.scss'

function BookingContainer() {
  const[startDate, setStartDate] = useState(null);

  return (
    <div>
      <h1>Book Childcare</h1>
      <div id='booking' className='booking-container'>
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
            />
            </div>
            <div className='caregivers'>
              <li>
                <ul className='caregivers__item'>
                <CaregiverListItem />
                </ul>
              </li>
            </div>
        </div>
    </div>
  )
}

export default BookingContainer
