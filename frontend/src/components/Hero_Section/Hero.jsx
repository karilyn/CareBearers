import React from 'react'
import hero from "../../assets/hero.jpg";

export default function Hero() {
  return (
    <div classname="hero-container">
      <div classname="hero-background-wrapper">
        <img src={hero} alt="hero" />
        <div classname="hero_copy-wrapper">
          <h1>Reliable kidcare on demand</h1>
          <div classname="hero_p-container">
            <p>Find a trusted caregiver for your child in minutes</p>
          </div>
          <a class="button sign-up" href="/signup">Sign up</a>
        </div>
      </div>
    </div>

  )
}


