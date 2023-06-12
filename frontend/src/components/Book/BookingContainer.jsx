import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CaregiverList from "../Book/CaregiverList";
import Button from "../Button";
import cartoon_care from '../../assets/cartoon_care.jpeg'
import Navbar from '../Dashboard/Navbar'
import './BookingContainer.scss'

function BookingContainer(props) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [children, setChildren] = useState(null);
  const [components, setComponents] = useState([]);
  const [currentCaregiver, setCaregiver] = useState(props.caregiver || null);
  const [streetAddress, setStreetAddress] = useState(null);
  const [city, setCity] = useState(null);
  const [province, setProvince] = useState(null);
  const [postalCode, setPostalCode] = useState(null);
  const [error, setError] = useState("");

  // render CaregiverList component when button is clicked
   function addComponent(component) {
    setComponents([...components, component]);
  }

  function handleSubmit(event) {
    // Prevent the browser from reloading the page
    event.preventDefault();
    //TODO: Add post axios request to reservations. send body with all the info. Use postman to test it out first.
    

    console.log(startDate);
    console.log(endDate);
    console.log(children);
    console.log(currentCaregiver);
    console.log(streetAddress);
    console.log(city);
    console.log(province);
    console.log(postalCode);


    // // Read the form data
    // const form = e.target;
    // const formData = new FormData(form);

    // const formJson = Object.fromEntries(formData.entries());
    // console.log(formJson);
  }


  // reset the form
  function reset() {
    setCaregiver(null)
  }

  // cancel the form
  function cancel() {
    reset()
    props.onCancel()
  }

  // validate the form
  function validate() {
    if (!currentCaregiver) {
      setError("Please select a caregiver")
      return
    }

    if(!props.date) {
      setError("Please select a date")
      return
    }

    if(!props.postalCode) {
      setError("Please enter a postal code")
      return
    }

    setError("")
    props.onSave(currentCaregiver)
  }

  return (
    <>
    <Navbar />
      <div className='booking-container'>
        <h1 className="booking-container__title">Book Childcare</h1>
          <img className="booking-container__img" src={cartoon_care} alt='children_playing' />
            <div id='booking-container__form' >
              <form
                autoComplete='off'
                onSubmit={handleSubmit}

              >

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
                        placeholderText="Click to pick a date"
                      />
                    </div>
                    <h4>For how many hours do you need childcare?</h4>
                    <input
                      className="select-hours"
                      type='number'
                      min='1'
                      max='10'
                      placeholder='One hour'
                      onChange={(event) => {setEndDate(event.target.value)}}
                    />
                  </div>

                  <div className='children-container'>
                    <h4>How many children need care?</h4>
                      <div className='children-container__item'>
                        <input
                          className="select-children"
                          type='number'
                          min='1'
                          max='10'
                          placeholder='One'
                          onChange={(event) =>{setChildren(event.target.value)}} />
                      </div>
                  </div>

                  <div className="caregiver-container">
                    <Button
                      className='btn find-caregiver'
                      onClick={addComponent}
                      text="Find a Babysitter"
                      style={{width: "100%"}}
                    />
                    <div className='available-caregivers'>
                    {/* render CaregiverList when Button is clicked */}
                    {components.map((component) => (
                      <CaregiverList
                        text={component}
                        value={currentCaregiver}
                        onChange={(event) => setCaregiver(event)}
                        />
                    ))}

                      {/* <li className='caregivers__item'>
                        <ul>
                        <CaregiverList />
                        </ul>
                      </li> */}
                    </div>
                  </div>

                  <div className='address-input'>
                    <h4>Where do you need childcare?</h4>
                      <input
                        className="address-input__input"
                        type='text'
                        placeholder='Street address'
                        onChange={(event) => {setStreetAddress(event.target.value)}}
                      />
                      <input
                        className="address-input__input"
                        type='text'
                        placeholder='City'
                        onChange={(event) => {setCity(event.target.value)}}
                      />
                      <input
                        className="address-input__input"
                        type='text'
                        placeholder='Province'
                        onChange={(event) => {setProvince(event.target.value)}}
                      />
                      <input
                        className="address-input__input"
                        type='text'
                        placeholder='Postal code'
                        onChange={(event) => {setPostalCode(event.target.value)}}
                      />


                  </div>
                  <div>
                    <Button type="button" className='btn book now' onClick={validate} text="Book Now"/>
                  </div>
              </form>
          </div>
      </div>
      </>
  )
}

export default BookingContainer
