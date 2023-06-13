import React, { useState, useEffect } from "react";
import './MyKids.scss';
import { useAppState } from "../../AppState";
import axios from "axios";
import Button from "../Button";
import Navbar from "./Navbar";
import KidsPopup from "./KidsPopup";

const MyKids = (props) => {
  const [popup, setPopup] = useState(false);

  const handleClickAdd = () => {
    setPopup(!popup);
  }
  
  const [kids, setKids] = useState([]);

  const { state } = useAppState();
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
      <div className="kids-mapped">
      {kids.map((kid) => {
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
      })}
      </div>
      <div className="add_kids_btn">
        <Button text="Add Kids" onClick={handleClickAdd} />
      </div>
      <div className="popup">
        {popup? <KidsPopup /> : ''}
      </div>
</>
  );
}

export default MyKids;

        