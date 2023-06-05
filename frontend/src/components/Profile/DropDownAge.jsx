import React from 'react';
import './DropDownAge.scss';

const DropDownAge = () => {
  const [value, setValue] = React.useState('years');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (

        <select className='dropdown-age' value={value} onChange={handleChange}>
          <option value="years">years</option>
          <option value="months">months</option>
        </select>

  );
};

export default DropDownAge;