import React, { useState, useEffect } from 'react';
import { useAppState } from '../../../AppState.jsx';
import axios from 'axios';
import Navbar from '../Navbar.jsx';
import {
  getCompletedReservations,
  getCaregiverDetails,
  getParentDetails,
} from '../../../helpers/selectors';
import moment from 'moment';
import ReviewPopup from './ReviewPopup.jsx';
import './ReviewItems.scss';


function ReviewItems(props) {
  const [popup, setPopup] = useState(-1);

  const handleClickReview = (index) => {
    setPopup(index);
  };

  const [completedReservations, setCompletedReservations] = useState([]);
  const [caregivers, setCaregivers] = useState([]);
  const [parents, setParents] = useState([]);

  const { state } = useAppState();
  const token = state.token;
  const isCaregiver = state.user?.is_caregiver;

  useEffect(() => {
    const instance = axios.create({
      baseURL: "http://localhost:3000",
      headers: { Authorization: "Bearer " + token },
    });

    instance.get("/reservations").then((items) => {
      console.log("from /reservations axios call:", items.data.reservations);
      let myEvents;
      if (isCaregiver) {
        myEvents = items.data.reservations.filter((item) => {
          return item.caregiver_id === state.user?.id;
        });
      } else {
        myEvents = items.data.reservations.filter((item) => {
          return item.parent_id === state.user?.id;
        });
      }
      items.data.reviews.forEach((review) => {
        myEvents.forEach((event) => {
          if (review.reservation_id === event.id) {
            event.review = review;
          }
        });
      });

      setCompletedReservations(getCompletedReservations(myEvents));
    });

    instance.get("/users").then((items) => {
      console.log("caregivers:", items.data);
      const filteredCaregivers = items.data.filter((item) => {
        return item?.is_caregiver === true;
      });
      const filteredParents = items.data.filter((item) => {
        return item?.is_caregiver === false;
      });
      setCaregivers(filteredCaregivers);
      setParents(filteredParents);
    });
  }, []);

  console.log("completedCare:", completedReservations);
  console.log("caregivers:", caregivers);
  console.log("parents:", parents);

  return (
    <>
      <Navbar />
      <div className='reviews-container'>
        <h1 className='reviews-container__title'>Completed Care Events</h1>
        {completedReservations.map((res, index) => {
          return (
            <>
              <div className='completed-care-container'>
                <div className='completed-care-card' key={res?.id}>
                  <h5 className='card-title'>
                    Date of care:{' '}
                    {moment(res?.start_time).format('MMM Do YYYY')}
                  </h5>

                  <div className='card-body'>
                    <p className='card-text'>
                      {isCaregiver &&
                        `You watched ${
                          getParentDetails(parents, res?.parent_id)?.first_name
                        }'s kids at ${moment(res?.start_time).format(
                          'h:mm a'
                        )} for ${res?.duration_in_minutes} minutes`}

                      {!isCaregiver &&
                        `${
                          getCaregiverDetails(caregivers, res?.caregiver_id)
                            ?.first_name
                        } watched your kids at ${moment(res?.start_time).format(
                          'h:mm a'
                        )} for ${res?.duration_in_minutes} minutes`}
                    </p>
                    <button
                      className='btn review'
                      onClick={() => handleClickReview(index)}
                      disabled={res?.review ? true : false}
                    >
                      Leave a Review
                    </button>
                  </div>
                </div>
              </div>

              {popup === index ? (
                <ReviewPopup
                className='popup review'
                  name={ isCaregiver ?
                    getParentDetails(parents, res?.parent_id).first_name : getCaregiverDetails(caregivers, res?.caregiver_id).first_name
                  }
                  reservation={res?.id}
                  handlePopup={() => setPopup(-1)}

                />
              ) : (
                ""
              )}

            </>
          );
        })}
      </div>
    </>
  );
}

export default ReviewItems;
