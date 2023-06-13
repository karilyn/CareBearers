import React, { useState, useEffect } from "react";
import './MyKids.scss';
import { useAppState } from "../../AppState";
import axios from "axios";
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Navbar from "./Navbar";

function Kids(props) {
  const [kids, setKids] = useState([]);

  const { state, dispatch } = useAppState();
  const token = state.token;

  const instance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {'Authorization': 'Bearer '+ token}
  });

  useEffect(() => {

    instance.get('/kids')
    .then((items) => {
      setKids(items.data);
      // console.log("kids length: ", items.data.length);
    })
 
  },[])

  const handleClickEdit = () => {
    //does nothing for now
  }

  return (
<>
    <Navbar />
      <h2>My Kids</h2>
      {kids.length === 0 ? <button>Add Kids</button> : kids.map((kid) => {
        return (
          <div className="card">
          <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{kid.name}, {kid.age}</h5>
              <p className="card-text">{kid.description}</p>
              <button className="btn btn-primary" onClick={handleClickEdit}>Edit</button>
            </div>
          </div>
        );
      }) }
</>
  );
}

export default Kids;

        