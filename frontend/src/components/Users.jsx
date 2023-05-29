import React from 'react';

function Users(props) {
  return (
    <div>
      <h1>These users are from the api</h1>
      {props.users.map((user) => {
        return (
          <div key={user.id}>
            <h3>{user.first_name} {user.last_name}</h3>
            <p>{user.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Users;