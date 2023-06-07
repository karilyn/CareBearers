import React from 'react';
import "./NavigationBar.scss";
import { Link } from 'react-router-dom';
import { useAppState } from '../../AppState.jsx';
import { useNavigate } from 'react-router-dom';

const NavigationBar = (props) => {

  const { state, dispatch } = useAppState();
  const navigate = useNavigate();
  return (
    <nav>
      <ul>
        <li><Link to='/'>Home</Link> </li>
        <li><Link to='/auth/signup'>Sign Up</Link> </li>
        <li><Link to='/auth/login'>Login</Link> </li>
      
        <li> <Link to='/login'>Login</Link></li>
        <li> <Link to='/about'>ProfileTest</Link></li>
      </ul> 
      {state.token && <div onClick={() => {
        dispatch({type: 'logout'});
        navigate('/');
      }}>Logout</div>}
    </nav>
  )
}

export default NavigationBar;