import React from 'react';
import Navbar from '../components/Dashboard/Navbar.jsx';
import './Dashboard.scss';
import { Outlet } from 'react-router-dom';

//Where all logged in user dashboard components are rendered
const Dashboard = (props) => {

  return (
    <>
      <div className='dashboard'>
        <Navbar />
        <Outlet />
      </div>
  </>
  )
}

export default Dashboard;