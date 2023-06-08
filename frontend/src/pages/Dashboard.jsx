import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppState } from '../AppState.jsx';
import MyKids from '../components/Dashboard/MyKids.jsx';

const Dashboard = (props) => {
  const [kids, setKids] = useState([]);

  const { state, dispatch } = useAppState();
  const token = state.token;

  const instance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {'Authorization': 'Bearer '+ token}
  });

  useEffect(() => {
    let mounted = true;
    instance.get('/kids')
    .then((items) => {
      setKids(items.data);
    })
    return () => mounted = false;
  },[])

  return (
  <div>
    <h1>Dashboard</h1>
     <MyKids kids={kids}/>
  </div>
  )
}

export default Dashboard;