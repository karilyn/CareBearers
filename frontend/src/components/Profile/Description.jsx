import React from 'react';
import './Description.scss';
import Dropdown from './Dropdown';

const Description = (props) => {
  return (
    <div className='description-form'>
      <h1>About Me</h1>
     <form>
        <textarea rows='3' name='text' placeholder="Working professional looking for regular evening childcare..."></textarea>
        <Dropdown onChange={props.onChange} kids={props.kids}/>
        {props.kids === 0 && <button type="submit">Save</button>}
      </form>
      {props.kids > 0 && <h1>My Kids</h1>}
    </div>

  )
}

export default Description;