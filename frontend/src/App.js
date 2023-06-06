import React from 'react';
import './App.css';
import LoginSignupContainer from './components/Login_Signup/LoginSignupContainer';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Hero from './components/Hero_Section/Hero';
import DescriptionContainer from './components/Profile/DescriptionContainer';
import { Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth.jsx'
import Dashboard from './pages/Dashboard.jsx';
import Home from './pages/Home.jsx';
import { useAppState } from './AppState';

function App(props) {
  const { state, dispatch } = useAppState();
  React.useState(() => {
    const auth = JSON.parse(window.localStorage.getItem('auth'));
    if (auth) {
      dispatch({ type: 'auth', payload: auth })
      props.history.push('/dashboard');
    } else {
      props.history.push('/');
    }
  }, []);

  return (
  
      <div className="App">
        <Routes>
        <Route path='/' element={<NavigationBar />} />
        </Routes>
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/auth/:form' element={<Auth />} />
            <Route path = '/dashboard' element={<Dashboard />} />

            {/* <Route exact path='/' element={<Hero />} />
            <Route exact path='/login' element={<LoginSignupContainer />} />
            <Route exact path='/about' element={<DescriptionContainer />} /> */}
          </Routes>
        </div>
      </div>

  );
}

export default App;
