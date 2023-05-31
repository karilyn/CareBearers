import React from 'react';
import "./NavigationBar.scss";

const NavigationBar = () => {
  return (
    <nav>
      <a href='/'>CareBearers</a>

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