import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppState } from '../AppState.jsx';
import './Auth.scss';

const Auth = (props) => {
  const { form } = useParams();
  const type = form;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    postal_code: ""
  });

  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const { state, dispatch } = useAppState();
  console.log(state);

  useEffect(() => {
    if (userData) {
      console.log(userData);
      const { token, user } = userData;
      dispatch({ type: 'auth', payload: { token, email: user.email } });
      window.localStorage.setItem("auth", JSON.stringify({ token, email: user.email }))
      navigate('/dashboard');
    }
  }, [userData, dispatch, navigate]);

  const actions = {
    signup: () => {
      return fetch(state.url + "/users", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({user: formData}),
      }).then((response) => response.json());
    },
    login: () => {
      return fetch(state.url + '/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      }).then((response) => response.json());
    },
  }

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    actions[type]().then((data) => {
      setUserData(data);
    });
  }

  return (
    <div className={type}>
      {type === 'login' ? 
      <>
        <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input type="email" name='email' placeholder="Email" value={formData.email} onChange={handleChange}/>
            <input type="password" name='password' placeholder="Password" value={formData.password} onChange={handleChange}/>
            <button type="submit">Login</button>
          </form>
        </>
      : 
      <>
      <h1>Create An Account</h1>
  
        <form onSubmit={handleSubmit}>
          <input type="email" name='email' placeholder="Email" value={formData.email} onChange={handleChange}/>
          <input type="password" name='password' placeholder="Password" value={formData.password} onChange={handleChange}/>
          <input type="text" name='postal_code' placeholder="Postal Code" value={formData.postal_code} onChange={handleChange}/>
          <p className='role'>I am a...</p>
          <div className="radio">
            <div className="radio-block">
              <label for="careseeker"><input type="radio" id="careseeker" value="careseeker"/>caregiver</label>
            </div>
              <div className="radio-block">
            <label for="caregiver"><input type="radio" id="caregiver" value="caregiver"/>careseeker</label>
            </div>
          </div>
          
          <button type="submit">Sign Up!</button>
        </form>
      </>
      }
  </div>
  )
}

export default Auth;