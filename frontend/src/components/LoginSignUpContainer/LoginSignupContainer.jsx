import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import "./LoginSignupContainer.scss"
import React, { useState, useRef } from "react";

const LoginSignupContainer = () => {
  const [login, setLogin] = useState(true);
  const loginSignupContainerRef = useRef(null);

  const handleClick = () => {
    setLogin(!login);

    loginSignupContainerRef.current.classList.toggle("active");
  }

  return (
    <div className="login-signup-container" ref={loginSignupContainerRef}>
      <Login />
      <div className="side-div">
        <button type="button" onClick={handleClick} > {login ? "Sign Up" : "Login"}</button>
      </div>
      <Signup />
    </div>

  )
};

export default LoginSignupContainer;