import React from 'react';
import "./NavigationBar.scss";
import { Link } from 'react-router-dom';
import { useAppState } from '../../AppState.jsx';
import { useNavigate } from 'react-router-dom';

const NavigationBar = (props) => {

  const { dispatch } = useAppState();
  const isToken = JSON.parse(window.localStorage.getItem('auth')) !== null;

  const navigate = useNavigate();

  return (
    <nav>
      <h1 className="logo"><Link to='/'>Care Bearers</Link></h1>
        <ul>
          <li className="SignUp"><Link to='/auth/signup'>Sign Up</Link> </li>
          <li><Link to='/auth/login'>Login</Link> </li>
        </ul>
        {isToken ? (<div className='logout' onClick={() => {
          dispatch({type: 'logout'});
          navigate('/');
        }}>Logout</div>) : ''}
    </nav>
  )
}

export default NavigationBar;