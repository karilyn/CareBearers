import React, { useState } from 'react';
import './DescriptionContainer.scss';
import Description from './Description';
import Kids from './Kids';


const DescriptionContainer = () => {
  const [numOfKids, setnumOfKids] = useState(0);

  const handleChange = (data) => {
    setnumOfKids(data);
  };

  return (
    <div className='description-container'>
      <Description onChange={handleChange} kids={numOfKids}/>
      {numOfKids !== 0 && [...Array(numOfKids)].map((e, i) => <Kids key={i}/>)}

    </div>
  )
}

export default DescriptionContainer;