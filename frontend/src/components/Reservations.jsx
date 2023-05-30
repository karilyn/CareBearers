import React from 'react';

function Reservations(props) {
  return (
    <div>
      <h1>Reservations from the API</h1>
      {props.reservations.map((reservation) => {
        return (
          <div key={reservation.id}>
            <h3>Reservation {reservation.id} starts at {reservation.start_time} and ends at {reservation.end_time}</h3>
          
          </div>
        );
      })}
    </div>
  );
}

export default Reservations;