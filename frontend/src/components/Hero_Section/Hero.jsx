import React from 'react'
import hero from "../../assets/hero.jpg";
import "./Hero.scss";

export default function Hero() {
  return (
    <div className="px-4 py-5 my-5 text-center bg-image"
      style={{ backgroundImage: `url(${hero})` }}>
      <h1 className="display-5 fw-bold">Reliable childcare <br/>on demand</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">Find a trusted caregiver for your child in minutes</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn sign-up">Sign up</button>
        </div>
      </div>
  </div>

  )
}





