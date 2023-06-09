
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
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


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
        <NavigationBar />
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<Hero />} />
            <Route exact path='/auth/:form' element={<Auth />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/profile' element={<DescriptionContainer />} />
          </Routes>
        </div>
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
          <div className='caregiversList'>
            <li>
              <ul className='caregivers__item'>
              <CaregiverListItem />
              </ul>
            </li>
          </div>

      </div>

  );
}

export default App;
