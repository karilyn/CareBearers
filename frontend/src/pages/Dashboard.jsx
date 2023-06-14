import React from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar.jsx';
import Navbar from '../components/Dashboard/Navbar.jsx';
import './Dashboard.scss';

const Dashboard = (props) => {


  return (
    <>
    <NavigationBar />
      <div>
        <h1 className="dashboard">Dashboard</h1>
        <Navbar />
      </div>
  </>
  )
}

export default Dashboard;