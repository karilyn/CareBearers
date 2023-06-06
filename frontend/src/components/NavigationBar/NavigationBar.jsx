import React from 'react';
import "./NavigationBar.scss";
import { Link } from 'react-router-dom';
import { useAppState } from '../../AppState.jsx';

const NavigationBar = (props) => {

  const { state, dispatch } = useAppState();

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
        props.history.push('/');
      }}>Logout</div>}
    </nav>
  )
}

export default NavigationBar;