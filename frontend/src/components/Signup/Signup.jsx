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
        <button type="submit">Continue</button>
      </form>
    
    </div>
  );
};

export default Signup;