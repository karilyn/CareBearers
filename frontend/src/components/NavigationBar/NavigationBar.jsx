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
      <h1 className="logo"><Link to='/'>Care Bearers</Link></h1>
        <ul>
          {/* <li className="Home"><Link to='/'>Home</Link> </li> */}
          <li className="SignUp"><Link to='/auth/signup'>Sign Up</Link> </li>
          <li><Link to='/auth/login'>Login</Link> </li>
        </ul>
        {state.token && <div onClick={() => {
          dispatch({type: 'logout'});
          navigate('/');
        }}>Logout</div>}
    </nav>
  )
}

export default NavigationBar;