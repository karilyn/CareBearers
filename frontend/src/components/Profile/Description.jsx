import React, { useState } from 'react';
import './Description.scss';
import Dropdown from './Dropdown';
import { useAppState } from '../../AppState.jsx';
import { useNavigate } from 'react-router-dom';

const Description = (props) => {
  const { state } = useAppState();
  const navigate = useNavigate();;

  const [formData, setFormData] = useState({
    description: "",
    first_name: "",
    last_name: ""
  });

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${state.url}/users/${state.user_id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user: formData}),
    }).then((response) => response.json())
    .then((data) => {
      console.log(data);
      navigate('/dashboard');
    });
  }

  return (
    <div className='description-form'>
      <h1>Profile</h1>
     <form onSubmit={handleSubmit}>
        <label for='first_name'>First Name</label>
          <input type="text" name='first_name' value={formData.first_name} onChange={handleChange}/>
        <label for='last_name'>Last Name</label>
          <input type="text" name='last_name' value={formData.last_name} onChange={handleChange}/>
        <label for='description'>A little bit about me and my family</label>
          <textarea rows='3' name='description' placeholder="Working professional looking for regular evening childcare..." value={formData.description} onChange={handleChange}></textarea>
        <Dropdown onChange={props.onChange} kids={props.kids}/>
        {props.kids === 0 && <button type="submit">Save</button>}
      </form>
      {props.kids > 0 && <h1>My Kids</h1>}
    </div>

  )
}

export default Description;