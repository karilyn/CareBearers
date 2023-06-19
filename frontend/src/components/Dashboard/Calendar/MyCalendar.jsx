import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import { useAppState } from '../../../AppState';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Event from './Event';
import './MyCalendar.scss';




const MyCalendar = (props) => {
  const localizer = momentLocalizer(moment);
  const [clicked, setClicked] = useState(false);
  const [clickedEvent, setClickedEvent] = useState(null);
  const [events, setEvents] = useState([]);

  // const { state } = useAppState();
  // const isCaregiver = state.user.is_caregiver;
  // const token = state.token;

  const token = JSON.parse(window.localStorage.getItem('auth')).token;
  const isCaregiver = JSON.parse(window.localStorage.getItem('auth')).isCaregiver;
  const userID = JSON.parse(window.localStorage.getItem('auth')).id;

  useEffect(() => {
    const instance = axios.create({
      baseURL: 'http://localhost:3000',
      headers: {'Authorization': 'Bearer '+ token}
    });

    instance.get('/reservations')
    .then((items) => {
      console.log('reservations: ', items.data.reservations);
      let myEvents;
      if (isCaregiver) {
        myEvents = items.data.reservations.filter((item) => {
          return item.caregiver_id === userID;
        });
      } else {
        myEvents = items.data.reservations.filter((item) => {
          return item.parent_id === userID;
        });
      }
      setEvents(myEvents);

    })

  },[token, userID, isCaregiver])


  const myEventsList = events.map((event) => {

    return {
      start: moment(event.start_time).toDate(),
      end: moment(event.start_time).add(event.duration_in_minutes, 'm').toDate(),
      title: event.status.charAt(0).toUpperCase() + event.status.slice(1) + ": " + event.city + ', ' + event.street
    }
  })

  const handleEventClick = (event) => {
    setClicked(true)
    setClickedEvent(event)
    console.log('event data: ', event);
  }

  return (
    <>
 
      <div className="calendar">
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 700, marginLeft: 320 }}
        min={new Date(0, 0, 0, 7, 0, 0)}
        max={new Date(0, 0, 0, 23, 0, 0)}
        onSelectEvent={handleEventClick}
        eventPropGetter={(event) => {
          const eventColor = '#437A7A';
          return { style: { backgroundColor: eventColor, color: 'white' }}
          }}
        />
      </div>
      <div className="event">
        {clicked ? (<Event title={clickedEvent.title} start={moment(clickedEvent.start).format('MMM Do YYYY, h:mm a')} end={moment(clickedEvent.end).format('h:mm a')} isCaregiver={isCaregiver}/>) : null}
      </div>
    </>
  )
}

export default MyCalendar;