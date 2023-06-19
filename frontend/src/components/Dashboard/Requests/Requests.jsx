import React from 'react';
import './Requests.scss';
import { useEffect, useState } from 'react';
import {
  getPendingReservations,
  getParentDetails,
} from '../../../helpers/selectors';
import axios from 'axios';
import { useAppState } from '../../../AppState';
import moment from 'moment';
import RequestPopup from './RequestPopup';

const Requests = () => {
  const [pendingRequests, setPendingRequests] = useState([]);
  const [completedReservations, setCompletedReservations] = useState([]);
  const [parents, setParents] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [parentData, setParentData] = useState({});
  const [resData, setResData] = useState({});
  const [reviews, setReviews] = useState([]);
  const [kids, setKids] = useState([]);

  const { state } = useAppState();
  // const token = state.token;

  const token = JSON.parse(window.localStorage.getItem('auth')).token;
  const userID = JSON.parse(window.localStorage.getItem('auth')).id;

  useEffect(() => {
    const instance = axios.create({
      baseURL: 'http://localhost:3000',
      headers: { Authorization: 'Bearer ' + token },
    });

    instance.get('/reservations').then((items) => {

      setCompletedReservations(items.data.reservations.filter((item) => {
        return item.status === 'completed';
      }));
      const myEvents = items.data.reservations.filter((item) => {
        return item.caregiver_id === userID;
      });
      setPendingRequests(getPendingReservations(myEvents));
    });

    instance.get('/users').then((items) => {
      const filteredParents = items.data.filter((item) => {
        return item.is_caregiver === false;
      });

      setParents(filteredParents);
    });

    instance.get('/reviews').then((items) => {
      setReviews(items.data);
    });

    instance.get('/kids').then((items) => {
      setKids(items.data.kids);
    });

  }, [token, userID]);

  const clickButton = (status, id) => {
    fetch(`${state.url}/reservations/${id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({ reservation: { status: status } }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Updated reservation: ', data);
        const index = pendingRequests.findIndex((res) => res.id === id);

        setPendingRequests((prev) => {
          return [...prev.slice(0, index), ...prev.slice(index + 1)];
        });
        console.log('index: ', index);
      });
  };

  const onClickDetails = (id) => {
    setParentData(getParentDetails(parents, id.parent_id));
    setResData(id);
    setButtonPopup(true);
  };

  return (
    <>
      <div className='request-container'>
        <h1 className='request-container__title'>My Pending Requests</h1>
        <div className='request-container-mapped'>
          {pendingRequests.length !== 0 &&
            pendingRequests.map((res) => {
              return (
                <div className='request-card' key={res?.id}>
                  <div className='card-body'>
                    <h5 className='request card-title'>
                      Date: {moment(res?.start_time).format('MMM Do YYYY')}
                    </h5>
                    <p className='card-text'>
                      <strong>Time:</strong> {moment(res?.start_time).format('h:mm a')} for{' '}
                      {res.duration_in_minutes} minutes
                    </p>
                    <p className='card-text'>
                      <strong>Address:</strong> {res?.street} {res?.city}, {res?.province}
                    </p>
                    <p className='card-text'>
                      <strong>Reservation for:</strong> {getParentDetails(parents, res?.parent_id)?.first_name} {getParentDetails(parents, res?.parent_id)?.last_name}
                    </p>
                    <p className='card-text'>
                      <strong>Children:</strong> {res?.num_of_children}
                    </p>
                    <div className='button-container'>
                    <button className='btn request accept' onClick={() => clickButton(1, res?.id)}>
                      Accept
                    </button>
                    <button className='btn request decline' onClick={() => clickButton(2, res?.id)}>
                      Decline
                    </button>
                    <button className='btn request details' onClick={() => onClickDetails(res)}>
                      Details
                    </button>
                    </div>
                    <RequestPopup
                      key={res?.id}
                      trigger={buttonPopup}
                      setTrigger={setButtonPopup}
                      popupData={parentData}
                      resData={resData}
                      completedReservations={completedReservations}
                      kids={kids}
                      reviews={reviews}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Requests;
