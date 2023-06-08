import React from "react";

function Kids(props) {
  return (
    <div>
      <h2>My Kids</h2>
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