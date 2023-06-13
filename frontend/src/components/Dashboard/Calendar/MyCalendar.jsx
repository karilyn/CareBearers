import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Navbar from '../Navbar';
import { useAppState } from '../../../AppState';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const MyCalendar = (props) => {
  const localizer = momentLocalizer(moment);

  const [events, setEvents] = useState([]);

  const { state } = useAppState();
  const token = state.token;

  const instance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {'Authorization': 'Bearer '+ token}
  });

  useEffect(() => {

    instance.get('/reservations')
    .then((items) => {
      console.log(items.data);
      setEvents(items.data);
 
    })

  },[])


  const myEventsList = events.map((event) => {
   
    return {
      start: moment(event.start_time).toDate(),
      end: moment(event.start_time).add(event.duration_in_minutes, 'm').toDate(),
      title: event.status.charAt(0).toUpperCase() + event.status.slice(1) + ": " + event.city + ', ' + event.street
    }
  })
 
  return (
    <>
      <Navbar />
      <div className="calendar">
      <Calendar 
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 700, marginLeft: 320 }}
        min={new Date(0, 0, 0, 7, 0, 0)}
        max={new Date(0, 0, 0, 23, 0, 0)}
        />
      </div>
    </>
  )
}

export default MyCalendar;