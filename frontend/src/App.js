
import React from 'react';
import Hero from './components/Hero_Section/Hero';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Auth from './pages/Auth.jsx'
import Dashboard from './pages/Dashboard.jsx';
import { useAppState } from './AppState';
import Description from './components/Profile/Description';
import BookingContainer from './components/Book/BookingContainer';
import MyKids from './components/Dashboard/Kids/MyKids';
import MyCalendar from './components/Dashboard/Calendar/MyCalendar.jsx';
import ReviewItems from './components/Dashboard/Reviews/ReviewItems';
import Requests from './components/Dashboard/Requests/Requests';
import MyProfile from './components/Dashboard/Profile/MyProfile';

function App(props) {

  const { state, dispatch } = useAppState();
  const navigate = useNavigate();

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

      <div className="App Home">

        <div className='content'>
          <Routes>
            <Route exact path='/' element={<Hero />} />
            <Route exact path='/auth/:form' element={<Auth />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/profile' element={<Description />} />
            <Route path='/book' element={<BookingContainer />} />
            <Route path='/kids' element={<MyKids />} />
            <Route path='/calendar' element={<MyCalendar />} />
            <Route path='/review' element={<ReviewItems />} />
            <Route path='/requests' element={<Requests />} />
            <Route path='/dashboard/profile' element={<MyProfile user={state.user}/>} />
          </Routes>
        </div>
      </div>

  );
}

export default App;
