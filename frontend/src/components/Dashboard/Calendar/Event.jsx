import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import './Event.scss';

//Event details popup for calendar
const Event = (props) => {
  return (
    <div className='event-container'>
    <div className="event-card">
        <h3 className='event-card__title'>{props.title}</h3>
        <p className='event-card__description'>{props.start} - {props.end}</p>
      
        <div className="icons">
          {props.isCaregiver ? '' :
            <IconButton>
              <EditIcon /> 
            </IconButton>
          }
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </div>
     </div> 
     </div>

  )
}

export default Event;