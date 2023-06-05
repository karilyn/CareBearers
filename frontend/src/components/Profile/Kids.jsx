import React from 'react';
import './Kids.scss';
import DropDownAge from './DropDownAge';

const Kids = (props) => {
  return (
    <div className='kids-form'>

      <form>
        <input type="text" placeholder="Name"/>
        <div className='age'>
          <input type="text" placeholder="Age"/>
          <DropDownAge />
        </div>
        <textarea rows='3' cols='60' name='text' placeholder="Description..."></textarea>
        
      </form>
    </div>
  );
}

export default Kids;