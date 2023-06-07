
import React, { useState } from 'react';
import LoginSignupContainer from './components/Login_Signup/LoginSignupContainer';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Hero from './components/Hero_Section/Hero';
import DescriptionContainer from './components/Profile/DescriptionContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

function App() {
  // const [date, setDate] = useState(new Date());
  const data = [
    {
        Id: 1,
        Subject: 'Date Night',
        StartTime: new Date(2023, 6, 5, 19, 0),
        EndTime: new Date(2023, 6, 5, 23, 0),
        IsAllDay: false,
        Status: 'Completed',
        Priority: 'High'
    },
];
const fieldsData = {
    id: 'Id',
    subject: { name: 'Subject' },
    isAllDay: { name: 'IsAllDay' },
    startTime: { name: 'StartTime' },
    endTime: { name: 'EndTime' }
}
const eventSettings = { dataSource: data, fields: fieldsData }


  return (
    <Router>
      <div className='App'>
        <NavigationBar />

        <div className='content'>
          <Routes>
            <Route exact path='/' element={<Hero />} />
            <Route exact path='/login' element={<LoginSignupContainer />} />
            <Route exact path='/about' element={<DescriptionContainer />} />
          </Routes>
        </div>
        <div className='schedule-container'>
          <ScheduleComponent currentView='Month' eventSettings={eventSettings}>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
          </ScheduleComponent>
        </div>
      </div>
    </Router>


  );
}

export default App;
