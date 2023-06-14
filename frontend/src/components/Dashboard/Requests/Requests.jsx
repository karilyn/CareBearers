import React from 'react';
import Navbar from '../Navbar';
import './Requests.scss';
import { useEffect, useState } from 'react';
import { getPendingReservations } from '../../../helpers/selectors';
import axios from 'axios';
import { useAppState } from '../../../AppState';
import moment from 'moment';
import Button from '../../Button';

const Requests = () => {
  const [pendingRequests, setPendingRequests] = useState([])

  const { state } = useAppState();
  const token = state.token;

  
  useEffect(() => {
    const instance = axios.create({
      baseURL: 'http://localhost:3000',
      headers: {'Authorization': 'Bearer '+ token}
    });

    instance.get('/reservations')
    .then((items) => {
      console.log('reservations: ', items.data);
      const myEvents = items.data.filter((item) => {
        return item.caregiver_id === state.user.id;
      });
      setPendingRequests(getPendingReservations(myEvents));
      console.log("pendingRequests:", pendingRequests)
    })
  }, [token, state.user.id])

  const clickButton = (status, id) => {
    fetch(`${state.url}/reservations/${id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ token
    },
    body: JSON.stringify({reservation: {status: status}}),
    }).then((response) => response.json())
    .then((data) => {
      console.log(data);
    }); 
  }


  return (
    <>
    <Navbar />
    <div className="requests">
      <h2>Pending Requests</h2>
      {pendingRequests.map((res) => {
        return (
       
          <div className="request-card" key={res.id}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{moment(res.start_time).format("MMM Do YYYY")}</h5>
              <p className="card-text">{moment(res.start_time).format("h:mm a")} for {res.duration_in_minutes} minutes</p>
              <Button text='Accept' onClick={() => clickButton(1, res.id)} />
              <Button text='Reject' onClick={() => clickButton(2, res.id)} />

            </div>
          </div>
       
        )})}
    </div>
    </>
  )

}

export default Requests;