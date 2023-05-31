import React from 'react';
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <nav>
      <a href='/'>CareBearers</a>

      <div>
        <p>
          Welcome, <span>Guest</span>
        </p>
        <i className='fa fa-user'></i>
      </div>
    </nav>
  )
}

export default NavigationBar;