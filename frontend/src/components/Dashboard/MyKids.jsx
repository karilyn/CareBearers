import React, { useState, useEffect } from "react";
import './MyKids.scss';
import { useAppState } from "../../AppState";
import axios from "axios";

function Kids(props) {
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
      <h2>My Kids</h2>
      {kids.map((kid) => {
        return (
          <div className='kids' key={kid.id}>
            <h3>{kid.name} is {kid.age} years old</h3>
            <p>{kid.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Kids;