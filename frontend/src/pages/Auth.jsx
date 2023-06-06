import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppState } from '../AppState.jsx';

const Auth = (props) => {
  const { form } = useParams();
  const type = form;
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [userData, setUserData] = useState(null);

  const { state, dispatch } = useAppState();
  console.log(state);

  useEffect(() => {
    if (userData) {
      console.log(userData);
      const { token, user } = userData;
      dispatch({ type: 'auth', payload: { token, email: user.email } });
      window.localStorage.setItem("auth", JSON.stringify({ token, email: user.email }))
      props.history.push('/dashboard');
    }
  }, [userData, dispatch, props.history]);

  const actions = {
    signup: () => {
      return fetch(state.url + "/users", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <input type="email" name='email' placeholder="Email" value={formData.email} onChange={handleChange}/>
        <input type="password" name='password' placeholder="Password" value={formData.password} onChange={handleChange}/>
        <button type="submit">{type}</button>
      </form>
  </div>
  )
}

export default Auth;