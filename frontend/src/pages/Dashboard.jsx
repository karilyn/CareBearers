import React from 'react';
import Navbar from '../components/Dashboard/Navbar.jsx';
import './Dashboard.scss';
import { Outlet } from 'react-router-dom';

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