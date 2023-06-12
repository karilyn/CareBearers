
import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Hero from './components/Hero_Section/Hero';
import CaregiverList from './components/Reservation/CaregiverList';
import CaregiverListItem from './components/Reservation/CaregiverListItem';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Auth from './pages/Auth.jsx'
import Dashboard from './pages/Dashboard.jsx';
import { useAppState } from './AppState';
import DescriptionContainer from './components/Profile/DescriptionContainer';
import MyKids from './components/Dashboard/MyKids.jsx';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import MyCalendar from './components/Dashboard/Calendar/MyCalendar.jsx';
import ReviewItems from './components/Dashboard/Reviews/ReviewItems';
// import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';
// import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

function App(props) {

  const { state, dispatch } = useAppState();
  const navigate = useNavigate();
  const[startDate, setStartDate] = useState(null);

  React.useState(() => {
    const auth = JSON.parse(window.localStorage.getItem('auth'));
    if (auth) {
      dispatch({ type: 'auth', payload: auth })
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  }, []);


  return (

      <div className="App">
        
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<Hero />} />
            <Route exact path='/auth/:form' element={<Auth />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/profile' element={<DescriptionContainer />} />
            <Route path='/kids' element={<MyKids />} />
            <Route path='/calendar' element={<MyCalendar />} />
            <Route path='/review' element={<ReviewItems />} />
          </Routes>
        </div>
      </div>

  );
}

export default App;
