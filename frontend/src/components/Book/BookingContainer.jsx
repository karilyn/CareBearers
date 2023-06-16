import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CaregiverList from "../Book/CaregiverList";
import cartoon_care from '../../assets/cartoon_care.jpeg'
import Navbar from '../Dashboard/Navbar'
import './BookingContainer.scss'
import { useAppState } from "../../AppState";
import { useNavigate } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

function BookingContainer(props) {
  const [startTime, setStartTime] = useState(null);
  const [duration, setDuration] = useState("");
  const [children, setChildren] = useState("");
  const [showCareGiverList, setShowCaregiverList] = useState(false);
  const [currentCaregiver, setCaregiver] = useState(props.caregiver || null);
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postCode, setPostCode] = useState("");

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    navigate("/calendar");
  }

  const { state } = useAppState();

  const navigate = useNavigate();

  const token = state.token;

  // submit the form
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
        duration_in_minutes: duration * 60,
        num_of_children: children,
        caregiver_id: currentCaregiver,
        street: street,
        city: city,
        province: province,
        post_code: postCode,
        status: 0
      }})
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("logging data: ", data);
      // alert("Your booking has been submitted!");
      setOpen(true);
      // navigate("/calendar");

    })
  }

  const handleBabysitterClick = (event) => {
    event.preventDefault();
    setShowCaregiverList(true);
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
                // onSubmit={handleSubmit}
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
                    <button className='btn booking' onClick={handleBabysitterClick}>Find a babysitter</button>

                    <div className='available-caregivers'>
                    {/* render CaregiverList when Button is clicked */}
                    {showCareGiverList ?
                      (<CaregiverList
                        onChange={setCaregiver}
                        value={currentCaregiver}

                        />)
                    : null}
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
                    <button type="submit" className='btn booking' onClick={handleSubmit}>Book Now</button>
                  </div>
              </form>
          </div>
      </div>
      <div>
        <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
            {"Your booking has been submitted!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Check your email for confirmation that your booking has been accepted.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Ok</Button>
          </DialogActions>
        </Dialog>
      </div>
      </>
  )
}

export default BookingContainer
