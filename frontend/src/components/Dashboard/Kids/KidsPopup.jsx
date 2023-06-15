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
    parent_id: state.user.id
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
    <div className='add-kid-container'>
      <div className='add-kid-form'>
        {/* <h1 className="add-kid__header">Add a Kid</h1> */}
        <form>
          <div className='form-outline mb-4'>
            <input
              type="text"
              className='form-control'
              placeholder="Child's name"
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className='form-row'>
            <div className='col-4'>
              <input type="text" className='form-control mb-2' placeholder="Age" name='age' value={formData.age} onChange={handleChange}/>
            </div>
            <div className='col'>
              <div className='form-check form-check-inline'>
                <input className='form-check-input' type='radio' name='age' id='years' onChange={handleYearsMonths} value={value} defaultChecked/>
                <label className='form-check-label' for='years'>years</label>
              </div>
              <div className='form-check form-check-inline'>
                <input className='form-check-input' type='radio' name='age' id='months' onChange={handleYearsMonths} value={value} defaultChecked/>
                <label className='form-check-label' for='years'>months</label>
              </div>
            </div>
          </div>
              {/* <select className='dropdown-age' value={value} onChange={handleYearsMonths}>
                <option value="years">years</option>
                <option value="months">months</option>
              </select> */}

          <div className='form-outline mb-4'>
            <textarea
              className='form-control'
              rows='3'
              name='description'
              placeholder='A little bit about your child'
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className='form-control-file'>
            <label for='image'>Upload an image</label>
            <input type="file" className='form-control-file' name="image" accept="image/*" />
          </div>
          <button className='btn add-kid' type='submit' onClick={handleSubmit}>Save</button>
        </form>
      </div>
    </div>
  );
}

export default KidsPopup;