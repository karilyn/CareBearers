import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppState } from '../AppState.jsx';

import NavigationBar from '../components/NavigationBar/NavigationBar.jsx';
import Button from '../components/Button.jsx';
import './Auth.scss';

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
        navigate('/calendar');
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

    <div id="auth-container" className={type}>
      {type === 'login' ?
      <>
      <div >
        <form className="auth-form-container" onSubmit={handleSubmit}>
          <h1 className='auth'>Login</h1>
            <div className="form-outline mb-4">
              <input type="email" className="form-control" placeholder="Email address" value={formData.email} onChange={handleChange}/>
            </div>
            <div className="form-outline mb-4">
              <input type="password"  className="form-control" placeholder="Password" value={formData.password} onChange={handleChange}/>

            </div>
            <div className="row mb-4">
              <div className="col d-flex justify-content-center">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" defaultChecked />
                  <label className="form-check-label">Remember me </label>
                </div>
              </div>

              <div className="col">
                <a href="#!">Forgot password?</a>
              </div>
            </div>
            <Button type="submit" className="btn auth" text="Login"/>
        </form>
      </div>
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

          <Button type="submit" className='btn auth' text="Continue"/>
        </form>
      </>
      }
  </div>
  </>
  )
}

export default Auth;