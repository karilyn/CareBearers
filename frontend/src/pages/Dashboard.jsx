import React from 'react';
import Navbar from '../components/Dashboard/Navbar.jsx';
import './Dashboard.scss';

const Dashboard = (props) => {


  return (
  <div>
    <h1 className="dashboard">Dashboard</h1>
     <Navbar />
  </div>
  )
}

export default Dashboard;