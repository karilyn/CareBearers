import React from 'react';
import "./NavigationBar.scss";
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav>
      <a href='/'>CareBearers</a>
      <div className='menu'>
        <ul>
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/login">Login/Signup</Link> </li>
          <li> <Link to="/about">About</Link> </li>

        </ul>
      </div>
      <div>
        <p>
          Welcome, <span>Guest</span>
        </p>
        <i class="fa-solid fa-user"></i>
      </div>
    </nav>
  )
}

export default NavigationBar;