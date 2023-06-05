import React from 'react';
import "./NavigationBar.scss";

const NavigationBar = () => {
  return (
    <nav>
      <a href='/'>Care Bearers</a>

      <div>
        <p>
          Welcome, <span>Guest</span>
        </p>
        <i className="fa-solid fa-user"></i>
      </div>
    </nav>
  )
}

export default NavigationBar;