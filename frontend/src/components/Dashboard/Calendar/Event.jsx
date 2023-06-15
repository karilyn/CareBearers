import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const Event = (props) => {
  return (
    <>
      <h3>{props.title}</h3>
      <p>{props.start} - {props.end}</p>
      
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
      
    </>
  )
}

export default Event;