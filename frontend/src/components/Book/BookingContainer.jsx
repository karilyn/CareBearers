import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CaregiverList from "../Book/CaregiverList";
import Button from "../Button";
import cartoon_care from '../../assets/cartoon_care.jpeg'
import Navbar from '../Dashboard/Navbar'
import './BookingContainer.scss'
import axios from "axios";
import { useAppState } from '../../AppState';


function BookingContainer(props) {
  const [startTime, setStartTime] = useState(null);
  const [duration, setDuration] = useState("");
  const [children, setChildren] = useState("");
  const [components, setComponents] = useState([]);
  const [currentCaregiver, setCaregiver] = useState(props.caregiver || null);
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postCode, setPostCode] = useState("");
  const [error, setError] = useState("");
  const { state, dispatch } = useAppState();

  const token = state.token;

  const instance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {'Authorization': 'Bearer '+ token}
  });


  function handleSubmit(event) {
    // Prevent the browser from reloading the page
    event.preventDefault();
    fetch("http://localhost:3000/reservations/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer '+ token
      },
      body: JSON.stringify({reservation: {
        start_time: startTime,
        duration_in_minutes: duration,
        num_of_children: children,
        caregiver_id: currentCaregiver,
        street: street,
        city: city,
        province: province,
        post_code: postCode,
        status: "pending"
      }})
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("logging data: ", data);
    })
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

    // render CaregiverList component when button is clicked
    function addComponent(component) {
      setComponents([...components, component]);
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
                        selected={startTime}
                        onChange={(date) => setStartTime(date)}
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
                      name='duration'
                      type='number'
                      min='1'
                      max='10'
                      placeholder='One hour'
                      value={duration}
                      onChange={(event) => {setDuration(event.target.value)}}
                    />
                  </div>

                  <div className='children-container'>
                    <h4>How many children need care?</h4>
                      <div className='children-container__item'>
                        <input
                          className="select-children"
                          name="num_of_children"
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
                      type="button"
                      onClick={addComponent}
                      text="Find a Babysitter"
                      style={{width: "100%"}}
                    />
                    <div className='available-caregivers'>
                    {/* render CaregiverList when Button is clicked */}
                    {components.map((component) => (
                      <CaregiverList
                        text={component}
                        onChange={setCaregiver}
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
                        name="street"
                        type='text'
                        placeholder='Street address'
                        value={street}
                        onChange={(event) => {setStreet(event.target.value)}}
                      />
                      <input
                        className="address-input__input"
                        name="city"
                        type='text'
                        placeholder='City'
                        value={city}
                        onChange={(event) => {setCity(event.target.value)}}
                      />
                      <input
                        className="address-input__input"
                        name="province"
                        type='text'
                        placeholder='Province'
                        value={province}
                        onChange={(event) => {setProvince(event.target.value)}}
                      />
                      <input
                        className="address-input__input"
                        name="postal_code"
                        type='text'
                        placeholder='Postal code'
                        value={postCode}
                        onChange={(event) => {setPostCode(event.target.value)}}
                      />


                  </div>
                  <div>
                    <Button type="submit" className='btn book now' onClick={handleSubmit} text="Book Now"/>
                  </div>
              </form>
          </div>
      </div>
      </>
  )
}

export default BookingContainer
