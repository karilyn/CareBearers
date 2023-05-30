import React from 'react';

function Kids(props) {
  return (
    <div>
      <h1>Kids from the API</h1>
        {props.kids.map((kid) => {
          return (
            <div key={kid.id}>
              <h3>{kid.name} is {kid.age} years old</h3>
              <p>{kid.description}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Kids;