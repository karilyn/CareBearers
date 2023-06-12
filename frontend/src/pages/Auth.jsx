import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppState } from '../AppState.jsx';

import NavigationBar from '../components/NavigationBar/NavigationBar.jsx';
import Button from '../components/Button.jsx';

const Auth = (props) => {
  const { form } = useParams();
  const type = form;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    postal_code: "",
    is_caregiver: false
  });

  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const { state, dispatch } = useAppState();


  useEffect(() => {
    if (userData) {
      console.log(userData);
      const { token, user } = userData;
      dispatch({ type: 'auth', payload: { token, email: user.email, user_id: user.id } });
      window.localStorage.setItem("auth", JSON.stringify({ token, email: user.email }))
      if (userData.user.description === null) {
        navigate('/profile');
      } else {
        navigate('/dashboard');
      }
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
      console.log("User data:", data);
      setUserData(data);
    });
  }

  return (
    <>
    <NavigationBar />

    <div className={type}>
      {type === 'login' ?
      <>
        <h1>Login</h1>
          <form className="auth" onSubmit={handleSubmit}>
            <input type="email" name='email' placeholder="Email" value={formData.email} onChange={handleChange}/>
            <input type="password" name='password' placeholder="Password" value={formData.password} onChange={handleChange}/>
            <button className='btn auth' type="submit">Login</button>
          </form>
        </>
      :
      <>
      <h1>Create An Account</h1>

        <form className='auth' onSubmit={handleSubmit}>
          <input type="email" name='email' placeholder="Email" value={formData.email} onChange={handleChange}/>
          <input type="password" name='password' placeholder="Password" value={formData.password} onChange={handleChange}/>
          <input type="text" name='postal_code' placeholder="Postal Code" value={formData.postal_code} onChange={handleChange}/>
          <p className='role'>I am a...</p>
          <div className="radio">
              <label for="role">
                <input type="radio" name='is_caregiver' id="caregiver" value={true} onClick={handleChange}/>caregiver</label>
              <label for="caregiver">
                <input type="radio" name='is_caregiver' id="careseeker" value={false} onClick={handleChange}/>careseeker</label>
          </div>

          <button type="submit" className='btn auth'>Continue</button>
        </form>
      </>
      }
  </div>
  </>
  )
}

export default Auth;