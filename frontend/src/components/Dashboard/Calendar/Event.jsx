import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Event = (props) => {
  return (
    <>
      <h3>{props.title}</h3>
      <div className="icons">
        <EditIcon /> <DeleteIcon />
      </div>
      
    </>
  )
}

export default Event;