import React, { useState } from 'react';
import './KidsPopup.scss';
import { useAppState } from '../../../AppState.jsx';
import Button from '../../Button';


const KidsPopup = (props) => {

  const [value, setValue] = useState('years');
  const { state } = useAppState();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    description: "",
    parent_id: state.user_id
  });

  const handleYearsMonths = (event) => {
    setValue(event.target.value);
  }

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/kids', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer '+ state.token
      },
      body: JSON.stringify({kid: formData })
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      props.setKids(data.kid);
      
      props.setPopup();
    })
  
  }

  return (
    <div className='kids-form-popup'>
      <div className='kids-form-popup__content'>
        <h1>Add a Kid</h1>
        <form>
          <div className='form-group'>
            <input type="text" placeholder="Name" name='name' value={formData.name} onChange={handleChange}/>
          </div>
          <div className='age'>
            <input type="text" placeholder="Age" name='age' value={formData.age} onChange={handleChange}/>
            <select className='dropdown-age' value={value} onChange={handleYearsMonths}>
              <option value="years">years</option>
              <option value="months">months</option>
            </select>
          </div>
          <div className='form-group'>
            <textarea rows='3' cols='60' name='description' value={formData.description} onChange={handleChange} placeholder="Description..."></textarea>
          </div>
          <Button text="Save" onClick={handleSubmit}  />
        </form>
      </div>
    </div>
  );
}

export default KidsPopup;