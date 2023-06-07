
import React, { useState } from 'react';
import LoginSignupContainer from './components/Login_Signup/LoginSignupContainer';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Hero from './components/Hero_Section/Hero';
import DescriptionContainer from './components/Profile/DescriptionContainer';
// import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

function App() {
  // const [date, setDate] = useState(new Date());



  return (
    <div className='App'>
      <NavigationBar />
      <div className='hero'>
        <Hero />
      </div>
      {/* <LoginSignupContainer /> */}
      <div className='schedule-container'>
        <ScheduleComponent currentView='Month'>
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
      </div>
      {/* <h1 className='text-center'>Your Calendar</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p> */}

      {/* <DescriptionContainer />  */}
    </div>
  );
}

export default App;
