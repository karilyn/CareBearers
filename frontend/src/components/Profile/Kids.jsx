import React from 'react';
import './Kids.scss';
import DropDownAge from './DropDownAge';

const Kids = () => {
  return (
    <div className='kids-form'>
      <h1>My Kids</h1>
      <form>
        <input type="text" placeholder="Name"/>
        <div className='age'>
          <input type="text" placeholder="Age"/>
          <DropDownAge />
        </div>
        <textarea rows='3' cols='60' name='text' placeholder="Description..."></textarea>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Kids;