import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Users from './components/Users';
import Kids from './components/Kids';
import Reviews from './components/Reviews';
import Reservations from './components/Reservations';

function App() {
  const [users, setUsers] = useState([]);
  const [kids, setKids] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    let mounted = true;
    Promise.all([
      axios.get('http://localhost:3000/api/users'),
      axios.get('http://localhost:3000/api/kids'),
      axios.get('http://localhost:3000/api/reviews'),
      axios.get('http://localhost:3000/api/reservations')
    ])
    .then((items) => {
      if(mounted) {
        setUsers(items[0].data);
        setKids(items[1].data);
        setReviews(items[2].data);
        setReservations(items[3].data);
      }
    });
    return () => mounted = false;
  }, []);

  return (
    <div className="App">
      <h1>TESTING API CALLS</h1>
      <Users users={users} />
      <Kids kids={kids} />
      <Reviews reviews={reviews} />
      <Reservations reservations={reservations} />
    </div>
  );
}

export default App;
