import React, { useState } from 'react';
import './Description.scss';
import { useAppState } from '../../AppState.jsx';
import { useNavigate } from 'react-router-dom';

const Description = (props) => {
  const { state } = useAppState();
  const navigate = useNavigate();;

  const [numOfKids, setnumOfKids] = useState(0);
  
  const changeKids = (event) => {
    setnumOfKids(parseInt(event.target.value, 10));
  };

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
    <>
      <div className='description-container'>
    
        <div className='description-form'>
          <h1>Profile</h1>
          <form onSubmit={handleSubmit}>
              <label for='first_name'>First Name</label>
                <input 
                  type="text" 
                  name='first_name' 
                  value={formData.first_name} 
                  onChange={handleChange}/>
              <label for='last_name'>Last Name</label>
                <input 
                  type="text" 
                  name='last_name' 
                  value={formData.last_name} 
                  onChange={handleChange}/>
              <label for='description'>A little bit about me and my family</label>
                <textarea 
                  rows='3' 
                  name='description' 
                  placeholder="Working professional looking for regular evening childcare..." 
                  value={formData.description} 
                  onChange={handleChange}>
                </textarea>
              {/* <div className='dropdown'>
                <label>
                  How many children do you have?
                  <select 
                    className='dropdown' 
                    value={numOfKids} 
                    onChange={changeKids}>
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4+</option>
                  </select>
                </label>
              </div> */}
            {/* {numOfKids === 0 && <button type="submit">Save</button>}
            {numOfKids > 0 && <h1>My Kids</h1>}
            {numOfKids > 0 && [...Array(numOfKids)].map((e, i) => <Kids key={i}/>)} */}
            <button type="submit">Save</button>
          </form>
        </div>
      
    </div>

    </> 
  )
}

export default Description;