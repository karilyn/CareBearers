import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './BookingContainer.scss'
import CaregiverList from "../Book/CaregiverList";
import Button from "../Button";
import cartoon_care from '../../assets/cartoon_care.jpeg'

function BookingContainer() {
  const[startDate, setStartDate] = useState(null);
  const [components, setComponents] = useState([]);

  // render CaregiverList component when button is clicked
  function addComponent(component) {
    setComponents([...components, component]);
  }





  return (

    <div className='booking-container'>
      <h1>Book Childcare</h1>
      <div id='booking-container__form' >
        <img className="booking-container__img" src={cartoon_care} alt='children_playing' />
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
            <Button onClick={addComponent} text="Find a Caregiver"/>
            {/* render CaregiverList when Button is clicked */}
            {components.map((component, index) => (
              <CaregiverList text={component}/>
            ))}
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
