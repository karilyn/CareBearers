import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppState } from '../AppState.jsx';
import NavigationBar from '../components/NavigationBar/NavigationBar.jsx';
import './Auth.scss';

const Auth = (props) => {
  const { form } = useParams();
  const type = form;
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    postal_code: '',
    is_caregiver: false,
  });

  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const { state, dispatch } = useAppState();

  useEffect(() => {
    if (userData) {
      console.log(userData);
      const { token, user } = userData;
      console.log(user);
      dispatch({ type: 'auth', payload: { token, email: user.email, user_id: user.id, user: user } });
      window.localStorage.setItem(
        "auth",
        JSON.stringify({ token, email: user.email, id: user.id, isCaregiver: user.is_caregiver })
      );
      if (userData.user.description === null) {
        navigate('/profile');
      } else {
        userData.user.is_caregiver ? navigate('/requests') : navigate('/book');
      }
    }
  }, [userData, dispatch, navigate]);

  const actions = {
    signup: () => {
      return fetch(state.url + '/users', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: formData }),
      }).then((response) => response.json());
    },
    login: () => {
      return fetch(state.url + '/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).then((response) => response.json());
    },
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log('Form data:', formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    actions[type]().then((data) => {
      console.log('User data:', data);
      setUserData(data);
    });
  };

  return (
    <>
      <NavigationBar />

      <div className={type}>
        {type === 'login' ? (
          <>
            <div id='auth-container'>
              <h1 className='auth__header'>Login</h1>
              <form className='auth-form-container' onSubmit={handleSubmit}>
                <div className='form-outline mb-4'>
                  <input
                    type='email'
                    className='form-control'
                    name='email'
                    placeholder='Email address'
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-outline mb-4'>
                  <input
                    type='password'
                    className='form-control'
                    name='password'
                    placeholder='Password'
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className='row mb-4'>
                  <div className='col d-flex justify-content-center'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        defaultChecked
                      />
                      <label className='form-check-label'>Remember me</label>
                    </div>
                  </div>

                  <div className='col'>
                    <a className='forgotPW' href='#!'>
                      Forgot password?
                    </a>
                  </div>
                </div>
                <button
                  type='submit'
                  className='btn auth'
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </form>
            </div>
          </>
        ) : (
          <>
            <div id='auth-container'>
              <h1 className='auth__header'>Create an Account</h1>
              <form className='auth-form-container' onSubmit={handleSubmit}>
                <div className='form-outline mb-4'>
                  <input
                    type='email'
                    className='form-control'
                    name='email'
                    placeholder='Email address'
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-outline mb-4'>
                  <input
                    type='password'
                    className='form-control'
                    name='password'
                    placeholder='Password'
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-outline mb-4'>
                  <input
                    type='text'
                    name='postal_code'
                    className='form-control'
                    placeholder='Postal code'
                    value={formData.postal_code}
                    onChange={handleChange}
                  />
                </div>
                <div className='radio'>
                  <label className='p auth-role'>I am a:</label>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='is_caregiver'
                      id='caregiver'
                      value={true}
                      onClick={handleChange}
                    />
                    <label className='form-check-label'> Caregiver </label>
                  </div>

                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='is_caregiver'
                      id='careseeker'
                      value={false}
                      onClick={handleChange}
                    />
                    <label className='form-check-label'> Care seeker </label>
                  </div>
                </div>
                <button
                  type='submit'
                  className='btn auth'
                  onClick={handleSubmit}
                >
                  Continue
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Auth;
