import React from 'react';
import './Signup.scss';

const Signup = () => {
  return ( 
    <div className='signup'>
      <h1>Create An Account</h1>
      <form>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
        <input type="text" placeholder="Postal Code"/>
        <p className='role'>I am a...</p>
        <div className="radio">
         
          <div className="radio-block">
            <label for="careseeker"><input type="radio" id="careseeker" value="careseeker"/>caregiver</label>
          </div>
            <div className="radio-block">
          <label for="caregiver"><input type="radio" id="caregiver" value="caregiver"/>careseeker</label>
          </div>
        </div>
        <button type="submit">Continue</button>
      </form>
    
    </div>
  );
};

export default Signup;