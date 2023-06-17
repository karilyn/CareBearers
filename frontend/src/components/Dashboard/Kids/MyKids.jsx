import React, { useState, useEffect, useRef } from "react";
import "./MyKids.scss";
// import { useAppState } from "../../../AppState.jsx";
import axios from "axios";
import KidsPopup from "./KidsPopup";

const MyKids = (props) => {
  const bottomEl = useRef(null);

  const [popup, setPopup] = useState(false);

  const handleClickAdd = () => {
    setPopup(!popup);
  };

  const [kids, setKids] = useState([]);

  // const { state } = useAppState();
  // const token = state.token;
  const token = JSON.parse(window.localStorage.getItem("auth")).token;

  useEffect(() => {
    if (popup) {
      bottomEl.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [popup])

  useEffect(() => {
    const instance = axios.create({
      baseURL: "http://localhost:3000",
      headers: { Authorization: "Bearer " + token },
    });

    instance.get("/kids").then((items) => {
      setKids(items.data);
      // console.log("kids length: ", items.data.length);
    });
  }, [token]);

  const handleClickEdit = () => {
    //does nothing for now
  };

  const handleSetKids = (newKid) => {
    setKids((prev) => [...prev, newKid]);
  };

  return (
    <>
      <div className="my-kids-container">
        <h1 className="my-kids-container__title">My Kids</h1>
        <div className="kids-mapped-container">
          {kids.length !== 0
            ? kids.map((kid) => {
                return (
                  <div className="kid-card">
                    <div className="card-img-top__background">
                      <img
                        src={kid.photo_url}
                        className="card-img-top"
                        alt={kid.name}
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                        {kid.name}, {kid.age}
                      </h5>
                      <p className="card-text">{kid.description}</p>
                      <button className="btn kids" onClick={handleClickEdit}>
                        Edit
                      </button>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
        <div className="add-kids-container">
          <button className="btn kids add" onClick={handleClickAdd}>
            Add a Kid
          </button>
        </div>
        <div className="popup" ref={bottomEl}>
          {popup ? (
            <KidsPopup setPopup={handleClickAdd} setKids={handleSetKids} />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default MyKids;
